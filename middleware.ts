import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE_URL } from "./lib/site";

const SITE_HOST = new URL(SITE_URL).hostname;

function isLocalDevHost(host: string) {
  return (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === "[::1]" ||
    host.endsWith(".localhost")
  );
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase().split(":")[0];
  if (!host || host === SITE_HOST || isLocalDevHost(host)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = SITE_HOST;
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
