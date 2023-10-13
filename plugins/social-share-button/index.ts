import { PluginSystem } from "@/src/PluginSystem";
import { IPlugin } from "../../src/plugin-system/core/IPlugin";

import SocialShareButton from "./social-share-button";

class SocialShareButtonPlugin implements IPlugin {
  name = "social-share-button-plugin";
  version = "0.0.1";

  pluginSystem: PluginSystem;

  constructor(pluginSystem: PluginSystem) {
    this.pluginSystem = pluginSystem;
  }

  async boot() {
    this.pluginSystem.registerComponent({
      name: "SocialShareButton",
      component: SocialShareButton,
    });
  }
}

export default SocialShareButtonPlugin;
