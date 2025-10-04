import { getAuthUser } from "./data/services/auth-service";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const user = await getAuthUser();
  const currentPath = req.nextUrl.pathname;

  if (!user && currentPath.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
