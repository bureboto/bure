import { NextRequest, NextResponse } from "next/server";

const DESIGN_HOST = "design.bure.art";
const DESIGN_PATHS = [
  "/home",
  "/project1",
  "/project2",
  "/project3",
  "/project4",
  "/project5",
  "/project6",
  "/project7",
  "/project8",
  "/project9",
];

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") ?? "";
  const isDesignHost = hostname === DESIGN_HOST || hostname.startsWith(`${DESIGN_HOST}:`);

  if (!isDesignHost) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (!DESIGN_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`))) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
