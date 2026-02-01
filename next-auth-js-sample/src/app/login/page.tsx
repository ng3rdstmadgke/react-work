import { signIn } from "@/auth"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-4 p-8">
        <h1 className="text-2xl font-bold text-center">ログイン</h1>
        
        <form
          action={async () => {
            "use server"
            await signIn("keycloak", { redirectTo: "/dashboard" })
          }}
        >
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Keycloakでログイン
          </button>
        </form>
      </div>
    </div>
  )
}