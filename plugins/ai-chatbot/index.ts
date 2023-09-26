import { PluginSystem } from "@/src/PluginSystem";
import { IPlugin } from "../../src/plugin-system/core/IPlugin";

import AIChatbot from "./ai-chatbot";

class AIChatbotPlugin implements IPlugin {
  name = "ai-chatbot-page-plugin";
  version = "0.0.1";

  pluginSystem: PluginSystem;

  constructor(pluginSystem: PluginSystem) {
    this.pluginSystem = pluginSystem;
  }

  async boot() {
    this.pluginSystem.registerRoute({
      route: "/ai-chatbot",
      component: AIChatbot,
    });
  }
}

export default AIChatbotPlugin;
