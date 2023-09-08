"use client";

import { useCallback, useEffect, useState } from "react";
import { useAccount, useSignMessage } from "wagmi";
import { redirect } from "next/navigation";
import { Button } from "../../components/v2/button";
import {
  ToastError,
  ToastLoading,
  ToastSuccess,
} from "../../components/v2/toast";
// import { useState } from "react";

// // This gets called on every request
// async function getData() {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/v2/drops/getAll`, {
//     method: "GET",
//   });
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }

export default function Page() {
  const { address, isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const [isAuthenticated, setIsAuthentated] = useState(false);
  const [value, setValue] = useState<number | undefined>();
  useEffect(() => {
    if (!isConnected) {
      redirect("/");
    }
  }, [address, isConnected]);

  const fetchAuth = async (sig: string) => {
    const fetchAuth = await fetch("/api/v2/admin/sign-in", {
      method: "POST",
      body: JSON.stringify({
        signature: sig,
      }),
    });
    const auth = await fetchAuth.json();
    return auth;
  };

  const signIn = useCallback(async () => {
    const sig = await signMessageAsync({ message: "I am authenticating" });
    const res = await fetchAuth(sig);
    setIsAuthentated(res.authenticated || false);
  }, [signMessageAsync]);

  const fetchDelete = async (sig: `0x${string}`, dropId: number) => {
    if (!dropId) {
      console.error("No drop ID");
    }
    if (!sig) {
      console.error("No signature");
    }

    if (!sig || !dropId) return;

    const data = {
      dropId: dropId,
      signature: sig,
    };

    const fetchAuth = await fetch("/api/v2/admin/delete-drop", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (fetchAuth.ok) {
      console.log("auth ok");
      const auth = await fetchAuth.json();
      return auth;
    } else {
      console.error(fetchAuth);
      return { deleted: false };
    }
  };
  const [deleteState, setDeleteState] = useState<
    "delete" | "deleting" | "deleted" | "error"
  >("delete");

  const deleteDrop = useCallback(async () => {
    if (value) {
      setDeleteState("deleting");
      const sig = await signMessageAsync({
        message: `Delete drop ID ${value}`,
      });
      const del = await fetchDelete(sig, value);
      setDeleteState(del.deleted ? "deleted" : "error");
    }
  }, [signMessageAsync, value]);

  const [dropData, setDropData] = useState({ drops: 0, claims: 0, users: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const counts = await fetch("/api/v2/admin/get-counts");
      const res = await counts.json();
      console.log(res);
      setDropData(res.data || { drops: 0, claims: 0, users: 0 });
    };
    fetchData();
    const interval = setInterval(() => {
      if (isConnected) {
        fetchData();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="mx-auto mb-auto w-full max-w-4xl">
        <h1 className="text-3xl mb-10">Admin</h1>
        {!isAuthenticated ? (
          <Button onClick={signIn}>Sign in</Button>
        ) : (
          <>
            <div className="flex w-full justify-stretch space-x-5 mb-20">
              <div className="flex-1 rounded-md border border-white/10 p-5">
                <h2 className="opacity-60">Drops</h2>
                <p className="text-mono text-3xl">{dropData.drops}</p>
              </div>
              <div className="flex-1 rounded-md border border-white/10 p-5">
                <h2 className="opacity-60">Claims</h2>
                <p className="text-mono text-3xl">{dropData.drops}</p>
              </div>
              <div className="flex-1 rounded-md border border-white/10 p-5">
                <h2 className="opacity-60">Connected Addresses</h2>
                <p className="text-mono text-3xl">{dropData.drops}</p>
              </div>
            </div>
            <label>Enter a drop ID to delete</label>

            <div className="flex mb-20">
              <input
                disabled={deleteState === "deleting"}
                className="mr-4"
                type="number"
                value={value || ""}
                onChange={(e) =>
                  setValue(parseInt(e.target.value) || undefined)
                }
              />
              <Button onClick={deleteDrop} disabled={deleteState == "deleting"}>
                {deleteState}
              </Button>
            </div>
          </>
        )}
        <div className="fixed bottom-0 left-0 right-0 w-full">
          {deleteState == "deleted" ? (
            <ToastSuccess
              text="Drop deleted"
              onDismiss={() => {
                setDeleteState("delete");
                setValue(undefined);
              }}
            />
          ) : deleteState == "deleting" ? (
            <ToastLoading text="Deleting" />
          ) : (
            deleteState == "error" && (
              <ToastError
                text="Error deleting drop"
                onDismiss={() => {
                  setDeleteState("delete");
                  setValue(undefined);
                }}
              />
            )
          )}
        </div>
      </main>
    </>
  );
}
