import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth-token")?.value;
  if (!token) return Response.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
