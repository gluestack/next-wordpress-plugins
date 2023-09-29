import { PluginSystem } from "@/src/PluginSystem";
import { IPlugin } from "../../src/plugin-system/core/IPlugin";
import Logout from "./logout";

class LogoutPlugin implements IPlugin {
  name = "logout-page-plugin";
  version = "0.0.1";

  pluginSystem: PluginSystem;

  constructor(pluginSystem: PluginSystem) {
    this.pluginSystem = pluginSystem;
  }

  async boot() {
    this.pluginSystem.registerRoute({
      route: "/logout",
      component: Logout,
    });
    
    this.pluginSystem.registerApiRoute({
      route: "/api/logout",
      handler: function (req: any, res: any) {
        if (req.method === "POST") {
          res.setHeader(
            "Set-Cookie",
            "loggedin=false; Max-Age=0; Path=/; SameSite=Strict; HttpOnly"
          );
         return  res.status(200).json({ message: "Logout successful" });
        } else {
         return res.status(405).json({ message: "Method not allowed" });
        }
      },
    });
  }
}

export default LogoutPlugin;
