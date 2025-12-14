import Link from "next/link"

export default function HomePage() {
  return (
    <main >
      <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
    </main>
  );
}