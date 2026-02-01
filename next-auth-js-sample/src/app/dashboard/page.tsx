import { auth } from "@/auth"
import { SignOutButton } from "@/components/ui/SignOutButton"

export default async function DashboardPage() {
  const session = await auth()  // サーバーコンポーネント

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-4 p-8">
        <h1 className="text-2xl font-bold text-center">ダッシュボード</h1>
        <p>ようこそ、{session?.user?.name}さん</p>
        <p>メール: {session?.user?.email}</p>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
          <code>{JSON.stringify(session, null, 2)}</code>
        </pre>
        <SignOutButton />
        </div>
    </div>

  )
}