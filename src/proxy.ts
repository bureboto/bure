import { NextRequest, NextResponse } from "next/server";

const DESIGN_HOSTS = ["design.bure.art", "www.design.bure.art"];
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
  "/project10",
  "/project11",
  "/project12",
  "/project13",
];

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") ?? "";
  const isDesignHost = DESIGN_HOSTS.some(
    (host) => hostname === host || hostname.startsWith(`${host}:`)
  );

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
