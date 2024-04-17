import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    // console.log(req.nextUrl); ?callbackUrl=%2Fdashboard
    // Callback permission granted then working in config routed

    const { token } = req.nextauth; // Auth token
    const { pathname, origin } = req.nextUrl; // Requested pathname  and base URL
    // Auth Route protected
    
    if (pathname === "/auth" && token) {
      if (token.role === "ADMIN") {
        return NextResponse.redirect(origin + "/admin");
      } else if (token.role === "VENDOR") {
        return NextResponse.redirect(origin + "/shop");
      } else {
        return NextResponse.redirect(origin + "/");
      }
    }

    // Login Route protected
    if (pathname === "/login" && token?.role === "USER") {
      return NextResponse.redirect(origin + "/");
    }
    // Admin Vendor Route protected
    if (pathname.startsWith("/admin")) {
      if (token?.role !== "ADMIN") {
        return NextResponse.redirect(origin + "/auth");
      }
    } else if (pathname.startsWith("/shop")) {
      if (token?.role !== "VENDOR") {
        return NextResponse.redirect(origin + "/auth");
      }
    }
  },
  {
    callbacks: {
      // Callback permission
      authorized: ({ token, req }) => {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/auth", "/login", "/shop/:path*"],
};
