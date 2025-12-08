import { PrismaClient, Prisma } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({adapter})

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Discord",
          content: "https://pris.ly/discord",
          published: true,
          tags: {
            connectOrCreate: [
              { where: {name: "a"}, create: {name: "a"} },
              { where: {name: "b"}, create: {name: "b"} },
            ]
            
          }
        },
        {
          title: "Prisma on YouTube",
          content: "https://pris.ly/youtube",
          tags: {
            connectOrCreate: [
              { where: {name: "b"}, create: {name: "b"} },
              { where: {name: "c"}, create: {name: "c"} },
            ]
          }
        },
      ],
    },
  },
  {
    name: "Bob",
    email: "bob@prisma.io",
    posts: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          content: "https://www.twitter.com/prisma",
          published: true,
          tags: {
            connectOrCreate: [
              { where: {name: "c"}, create: {name: "c"} },
              { where: {name: "d"}, create: {name: "d"} },
            ]
          }
        },
      ],
    },
  },
]

export async function main() {
  for (const u of userData) {
    await prisma.user.create({data: u})
  }
}

main()