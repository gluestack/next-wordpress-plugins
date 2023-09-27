import { PluginSystem } from "@/src/PluginSystem";
import { IPlugin } from "../../src/plugin-system/core/IPlugin";

import Confetti from "./confetti";

class ConfettiPlugin implements IPlugin {
  name = "confetti-plugin";
  version = "0.0.1";

  pluginSystem: PluginSystem;

  constructor(pluginSystem: PluginSystem) {
    this.pluginSystem = pluginSystem;
  }

  async boot() {
    this.pluginSystem.registerComponent({
      name: "ConfettiComponent",
      component: Confetti,
      placement: "beforePage",
    });
  }
}

export default ConfettiPlugin;
