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
  }
}

export default LoginPlugin;
