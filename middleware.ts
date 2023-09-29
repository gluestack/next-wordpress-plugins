import pluginSystem from "./bootstrap";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest, response: NextResponse) {
  const middlewareRoute =
    pluginSystem.middlewareStore.getAllRegisteredMiddleware()[0];

  if (middlewareRoute) {
    return middlewareRoute.handler(request, response);
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
