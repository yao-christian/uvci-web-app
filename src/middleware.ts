import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/core/services/auth/check-authentication";

export const config = {
  matcher: ["/api/protected", "/admin/:path*"],
};

export async function middleware(request: NextRequest) {
  const isAuthenticatedResponse = await isAuthenticated(request);
  return privateRouteMiddleware(request, isAuthenticatedResponse);
}

async function privateRouteMiddleware(
  request: NextRequest,
  isAuthenticated: boolean
) {
  if (!isAuthenticated) {
    if (request.nextUrl.pathname.startsWith("/api/protected")) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "Veuillez vous connecter" }),
        { status: 401, headers: { "content-type": "application/json" } }
      );
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}
