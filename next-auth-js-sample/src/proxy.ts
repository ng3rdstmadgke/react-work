import { auth } from "@/auth"
import { NextResponse } from "next/server"

// ミドルウェアで認証を強制する
export default auth((req) => {
  // ユーザーがログインしているかどうか
  const isLoggedIn = !!req.auth

  const { pathname } = req.nextUrl

  // 公開ページリスト
  const publicPages = ["/", "/login"]
  const isPublicPage = publicPages.includes(pathname)

  // 未ログインで、公開ページ以外にアクセスしようとした場合
  if (!isLoggedIn && !isPublicPage) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  // ログイン済みで、ログインページにアクセスしようとした場合
  if (isLoggedIn && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  // それ以外はそのまま通す
  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}