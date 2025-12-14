import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/ui/LogoutButton"
import { GetSessionClient } from "@/components/ui/getSessionClient"


export default async function DashboardPage() {
  // https://www.better-auth.com/docs/plugins/bearer#5-using-bearer-tokens-outside-the-auth-client
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <main>
      <div>
        <LogoutButton></LogoutButton>
      </div>
      <div>
        <h2 className="text-2xl">Server</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
          <code>{JSON.stringify(session, null, 2)}</code>
        </pre>
      </div>
      <div>
        <h2 className="text-2xl">Client</h2>
        <GetSessionClient></GetSessionClient>
      </div>
    </main>
  );
}