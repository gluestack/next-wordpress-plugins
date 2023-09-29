import { NextApiRequest, NextApiResponse } from "next";
import pluginSystem from "../../bootstrap";

export default async function All(req: NextApiRequest, res: NextApiResponse) {
  //@ts-ignore
  const apiRouteDefinition = pluginSystem.getAllApiRoutes()[req.url];

  if (apiRouteDefinition) {
    return apiRouteDefinition.handler(req, res);
  }
}
