import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

type Role = keyof typeof roleBasedRoutes

const AuthRoutes = ["/register", "/login"];
const roleBasedRoutes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // const user = {
  //   name: "Rahman",
  //   token: "sigjwprg",
  //   role: "ADMIN",
  // };
  let user = undefined;

  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if(user?.role && roleBasedRoutes[user?.role as Role]) {
   const routes = roleBasedRoutes[user?.role as Role]

   if(routes.some((route) => pathname.match(route))){
    return NextResponse.next();
   }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile", "/admin", "/login", "/register"],
};
