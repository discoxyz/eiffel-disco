"use client";

import { Prisma } from "@prisma/client";
import { Key, useEffect, useState } from "react";
import { DropRow } from "../components/v2/dropRow";
import Link from "next/link";
import { getDrops } from "./services/getDrops";
import { useAccount } from "wagmi";
import { NavTabs } from "../components/navTabs";

export default function Page() {
  const { address } = useAccount();
  const [drops, setDrops] = useState<
    Prisma.DropGetPayload<{
      include: {
        claims?: true;
      };
    }>[]
  >();

  useEffect(() => {
    const fetchDrops = async () => {
      const drops = await getDrops({ address });
      setDrops(drops || []);
    };
    fetchDrops();
  }, [address]);

  return (
    <>
      <main className="mx-auto mb-auto w-full max-w-4xl px-6">
        <NavTabs />
        {drops?.map((drop, key: Key) => {
          return (
            <Link href={`/${drop.path}`} key={key}>
              <DropRow drop={drop} className="mb-4" />
            </Link>
          );
        })}
      </main>
    </>
  );
}
