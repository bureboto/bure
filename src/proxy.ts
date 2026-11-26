import { NextRequest, NextResponse } from "next/server";

const DESIGN_HOSTS = ["design.bure.art", "www.design.bure.art"];
const MAD_HOSTS = ["mad.bure.art", "www.mad.bure.art"];
const MAD_PREFIX = "/mad";
const DESIGN_PATHS = [
  "/home",
  "/about-me",
  "/project1",
  "/project2",
  "/project3",
  "/project4",
  "/project5",
  "/project6",
  "/project7",
  "/project8",
  "/project9",
  "/project11",
  "/project12",
  "/projects",
  "/robopets",
  "/elpulsodelasdivisas",
  "/pulso",
];

function matchesHost(hostname: string, hosts: string[]) {
  return hosts.some((host) => hostname === host || hostname.startsWith(`${host}:`));
}

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") ?? "";

  // mad.bure.art → Mad Cactus label site, served from the (mad) route group under /mad.
  if (matchesHost(hostname, MAD_HOSTS)) {
    const { pathname } = request.nextUrl;
    if (pathname === MAD_PREFIX || pathname.startsWith(`${MAD_PREFIX}/`)) {
      return NextResponse.next();
    }
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? MAD_PREFIX : `${MAD_PREFIX}${pathname}`;
    return NextResponse.rewrite(url);
  }

  const isDesignHost = matchesHost(hostname, DESIGN_HOSTS);

  if (!isDesignHost) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (pathname === "/project10" || pathname.startsWith("/project10/")) {
    return NextResponse.redirect(new URL("/projects/bando", request.url));
  }

  if (pathname === "/project13" || pathname.startsWith("/project13/")) {
    return NextResponse.redirect(new URL("/projects/INE", request.url));
  }

  if (!DESIGN_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`))) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
