import { PluginSystem } from "@/src/PluginSystem";
import { IPlugin } from "../../src/plugin-system/core/IPlugin";

import ShareButton from "./share-button";

class ShareButtonPlugin implements IPlugin {
  name = "share-button-plugin";
  version = "0.0.1";

  pluginSystem: PluginSystem;

  constructor(pluginSystem: PluginSystem) {
    this.pluginSystem = pluginSystem;
  }

  async boot() {
    this.pluginSystem.registerComponent({
      name: "ShareButton",
      component: ShareButton,
    });
  }
}

export default ShareButtonPlugin;
