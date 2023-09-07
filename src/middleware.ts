import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/core/services/auth";

export const config = {
  matcher: ["/api/protected", "/admin/:path*", "/login", "/register"],
};

export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/api/protected") ||
    request.nextUrl.pathname.startsWith("/admin")
  ) {
    await isAuthenticatedMiddleware(request);
  }

  if (
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/register"
  ) {
    const isAuthenticatedResponse = await isAuthenticated(request);
    if (isAuthenticatedResponse) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

async function isAuthenticatedMiddleware(request: NextRequest) {
  const isAuthenticatedResponse = await isAuthenticated(request);
  if (!isAuthenticatedResponse) {
    if (request.nextUrl.pathname.startsWith("/api/protected")) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "Connexion obligatoire" }),
        { status: 401, headers: { "content-type": "application/json" } }
      );
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}
