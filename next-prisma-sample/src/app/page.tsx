import prisma from '@/lib/prisma';

export default async function Home() {
  const users = await prisma.user.findMany();
  console.log(users)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Superblog
      </h1>
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {
          users.map((user) => {
            return (
              <li key={user.id} className="mb-2">{user.name}</li>
            )
          })
        }
      </ol>
    </div>
  );
}
