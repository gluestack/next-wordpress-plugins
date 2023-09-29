import { NextApiRequest, NextApiResponse } from "next";
import pluginSystem from "../bootstrap";

export default function middleware(req: NextApiRequest, res: NextApiResponse) {
  const middlewareDefinition =
    pluginSystem.middlewareStore.registeredMiddlewares;

  // if (apiRouteDefinition) {
  //   return apiRouteDefinition.handler(req, res);
  // }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
