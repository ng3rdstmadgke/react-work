'use client';
import { authClient } from "@/lib/auth-client"


export function LoginButton() {
  const signIn = async () => {
    // https://www.better-auth.com/docs/plugins/generic-oauth#initiate-oauth-sign-in
    const {data, error } = await authClient.signIn.oauth2({
      providerId: "keycloak",
      callbackURL: "/dashboard",  // ログイン後にリダイレクトするURL
    })

    if (!data || error) {
      throw error
    }

    return data
  }

  return (
    <button className="px-4 py-2 rounded-md border" onClick={signIn} >
      Sign in with Keycloak
    </button>
  )
}