import NextAuth from "next-auth"
import type { NextAuthConfig } from "next-auth"
import Keycloak from "next-auth/providers/keycloak"

// NextAuthConfig: https://authjs.dev/reference/nextjs#nextauthconfig
const config = {
  // https://authjs.dev/reference/nextjs#pages
  pages: {
    signIn: "/login",
  },
  providers: [
    // Keycloakプロバイダーの設定
    // https://authjs.dev/getting-started/providers/keycloak#configuration
    Keycloak({
      clientId: process.env.AUTH_KEYCLOAK_ID!,
      clientSecret: process.env.AUTH_KEYCLOAK_SECRET!,
      issuer: process.env.AUTH_KEYCLOAK_ISSUER!,
    }),
  ],
} satisfies NextAuthConfig

// 認証関数（`auth`, `signIn`, `signOut`）とAPIハンドラー（`handlers`）をエクスポート
// NextAuthResult: https://authjs.dev/reference/nextjs#nextauthresult
export const { handlers, signIn, signOut, auth } = NextAuth(config)