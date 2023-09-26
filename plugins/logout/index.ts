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
  }
}

export default LogoutPlugin;
