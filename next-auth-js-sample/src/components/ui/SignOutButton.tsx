import { signOut } from "@/auth"

export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({ redirectTo: "/login" })
      }}
    >
      <button 
        type="submit"
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        ログアウト
      </button>
    </form>
  )
}