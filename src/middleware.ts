import { NextApiRequest, NextApiResponse } from "next";
import pluginSystem from "../bootstrap";
console.log("minayo minayo");

export default function middleware(req: NextApiRequest, res: NextApiResponse) {
  const middlewareDefinition = "dsjncvksd";
  console.log("hi form rishav ", middlewareDefinition);

  // const middlewareDefinition =
  //   pluginSystem.ge

  // console.log("people farm 1234 3333 ", middlewareDefinition);
  // if (apiRouteDefinition) {
  //   return apiRouteDefinition.handler(req, res);
  // }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
