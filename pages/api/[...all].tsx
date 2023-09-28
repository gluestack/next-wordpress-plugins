import { NextApiRequest, NextApiResponse } from "next";
import pluginSystem from "../../bootstrap";

export default async function All(req: NextApiRequest, res: NextApiResponse) {
  //@ts-ignore
  const apiRouteDefinition = pluginSystem.getAllApiRoutes()[req.url];

  if (apiRouteDefinition) {
    return apiRouteDefinition.handler(req, res);
  }
  // res.status(200).json({ name: "John Doe" });
}

//  try {
//       const result = await apiRouteDefinition.handler();
//       res.status(200).json(result);
//     } catch (error) {
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   } else {
//     res.status(404).json({ error: "API Route Not Found" });
//   }
