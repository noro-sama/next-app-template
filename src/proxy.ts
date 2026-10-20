import { NextResponse, type NextRequest } from "next/server";
import { config as appConfig } from "@/constants/config";

export function proxy(request: NextRequest) {
  if (request.cookies.get(appConfig.authCookieName)?.value) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
