import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    address,
    withDrops,
  }: { address: string; dropId?: number; withDrops?: boolean } = JSON.parse(
    req.body,
  );

  try {
    const drops = await prisma.claim.findMany({
      where: {
        address: address,
        claimed: true,
      },
      include: {
        drop: withDrops || false,
      },
    });

    res.status(200).send({
      message: `${drops.length} claims found`,
      data: {
        drops,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "Something went wrong when finding the claims",
      data: [],
    });
  }
};

export default handler;
