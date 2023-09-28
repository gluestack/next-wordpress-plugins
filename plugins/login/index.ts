import { PluginSystem } from "@/src/PluginSystem";
import { IPlugin } from "../../src/plugin-system/core/IPlugin";
import Login from "./login";

class LoginPlugin implements IPlugin {
  name = "login-page-plugin";
  version = "0.0.1";

  pluginSystem: PluginSystem;

  constructor(pluginSystem: PluginSystem) {
    this.pluginSystem = pluginSystem;
  }

  async boot() {
    this.pluginSystem.registerRoute({
      route: "/login",
      component: Login,
    });

    this.pluginSystem.registerApiRoute({
      route: "/api/login",
      handler: function (req: any, res: any) {
        const { email, password } = req.body;
        if (req.method === "POST") {
          const users = [
            { id: 1, username: "xyz@gmail.com", userPassword: "Xyz@12345" },
          ];

          const user = users.find(
            (u) => u.username === email && u.userPassword === password
          );

          if (user) {
            res.setHeader(
              "Set-Cookie",
              `loggedin=true; Expires=2024-03-12T12:49:11.479Z; Path=/; SameSite=Strict; HttpOnly`
            );
            return res.status(200).json({ message: "Login successful" });
          } else {
            return res.status(401).json({ message: "Invalid credentials" });
          }
        } else {
          return res.status(405).json({ message: "Method not allowed" });
        }
      },
    });

    // this.pluginSystem.registerMiddleware(function(){

    // })
  }
}

export default LoginPlugin;
