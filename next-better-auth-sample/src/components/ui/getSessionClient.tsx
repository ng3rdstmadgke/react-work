'use client';
import { authClient } from "@/lib/auth-client";
import { useState } from "react"

type Session = Awaited<ReturnType<typeof authClient.getSession>>;

export function GetSessionClient() {
  const [session, setSession] = useState<Session|null>(null)

  const getSessionClient = async () => {
    const session = await authClient.getSession();
    setSession(session)
  }


  return (
    <>
      <button className="px-4 py-2 rounded-md border" onClick={getSessionClient}>
        Get Session
      </button>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
    </>

  )
}
