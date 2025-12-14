import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { genericOAuth, keycloak } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import prisma from "@/lib/prisma"


export const auth = betterAuth({
  database: prismaAdapter(prisma, {
      provider: "postgresql"
  }),
  plugins: [
    genericOAuth({
      config: [
        keycloak({
          clientId: process.env.KEYCLOAK_CLIENT_ID!,
          clientSecret: process.env.KEYCLOAK_CLIENT_SECRET!,
          issuer: process.env.KEYCLOAK_ISSUER!,
        }),
      ],
    }),
    nextCookies(),
  ],
});