'use client';
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();
  const signOut = async () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/")
        }
      }
    })
  }
  return (
    <button className="px-4 py-2 rounded-md border" onClick={signOut} >
      Sign Out
    </button>
  )

}