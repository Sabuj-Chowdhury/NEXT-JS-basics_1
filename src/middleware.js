import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const dummyUserData = {
    role: "user",
    email: "text@admin.com",
  };
  let isServicePage = request.nextUrl.pathname.startsWith("/services");
  let isAdmin = dummyUserData.role === "admin";
  //   console.log(request.nextUrl.pathname.startsWith("/services"));

  if (isServicePage && !isAdmin) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };
