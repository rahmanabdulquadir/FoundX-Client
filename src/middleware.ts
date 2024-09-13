import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // const user = {
  //   name: "Rahman",
  //   token: "sigjwprg",
  //   role: "USER",
  // };
  let user = undefined

  if (user?.name) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile", "/admin"],
};
