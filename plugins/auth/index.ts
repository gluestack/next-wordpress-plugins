import { PluginSystem } from "@/src/PluginSystem";
import { IPlugin } from "../../src/plugin-system/core/IPlugin";
import Login from "./login";
import Logout from "./logout";
import { NextResponse } from "next/server";

class AuthPlugin implements IPlugin {
  name = "auth-page-plugin";
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

    this.pluginSystem.registerRoute({
      route: "/logout",
      component: Logout,
    });

    this.pluginSystem.registerApiRoute({
      route: "/api/login",
      handler: function (req: any, res: any) {
        try {
          const { email, password } = req.body;
          if (req.method === "POST") {
            const users = [
              {
                id: 1,
                username: "sanket@geekyants.com",
                userPassword: "Sanket@12345",
              },
            ];
            if (!isValidEmail(email)) {
              return res.status(400).json({ message: "Invalid email format" });
            }
            if (password.length < 8) {
              return res.status(400).json({
                message: "Password must be at least 6 characters long",
              });
            }
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
              res.status(401).json({ message: "Invalid credentials" });
            }
          } else {
            res.status(405).json({ message: "Method not allowed" });
          }
        } catch (error) {
          console.error("An error occurred:", error);
          res.status(500).json({ message: "Internal server error" });
        }

        function isValidEmail(email: string) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        }
      },
    });

    this.pluginSystem.registerApiRoute({
      route: "/api/logout",
      handler: function (req: any, res: any) {
        if (req.method === "POST") {
          res.setHeader(
            "Set-Cookie",
            "loggedin=false; Max-Age=0; Path=/; SameSite=Strict; HttpOnly"
          );
          return res.status(200).json({ message: "Logout successful" });
        } else {
          return res.status(405).json({ message: "Method not allowed" });
        }
      },
    });

    this.pluginSystem.registerMiddlewares({
      handler: function (request: any) {
        let isLogin = request.cookies.get("loggedin");
        if (!isLogin) {
          if (request.nextUrl.pathname === "/") {
            return NextResponse.next();
          }
          if (request.nextUrl.pathname !== "/login") {
            return NextResponse.redirect(new URL("/login", request.url));
          }
          return NextResponse.next();
        } else {
          if (request.nextUrl.pathname === "/login") {
            return NextResponse.redirect(new URL("/coming-soon", request.url));
          }
          return NextResponse.next();
        }
      },
    });
  }
}

export default AuthPlugin;
