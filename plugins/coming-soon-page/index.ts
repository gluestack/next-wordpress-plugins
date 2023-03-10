import { PluginSystem } from "@/src/PluginSystem";
import { IPlugin } from "../../src/plugin-system/core/IPlugin";

import ComingSoonPage from "./coming-soon-page";

class ComingSoonPagePlugin implements IPlugin {
  name = "coming-soon-page-plugin";
  version = "0.0.1";

  pluginSystem: PluginSystem;

  constructor(pluginSystem: PluginSystem) {
    this.pluginSystem = pluginSystem;
  }

  async boot() {
    this.pluginSystem.registerRoute({
      route: "/coming-soon",
      component: ComingSoonPage,
    });
  }
}

export default ComingSoonPagePlugin;
