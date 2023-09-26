import { PluginSystem } from "@/src/PluginSystem";
import { IPlugin } from "../../src/plugin-system/core/IPlugin";
import HelloWorldPlugin from "./hello-world-plugin";

class HelloWorldPagePlugin implements IPlugin {
  name = "hello-world-page-plugin";
  version = "0.0.1";

  pluginSystem: PluginSystem;

  constructor(pluginSystem: PluginSystem) {
    this.pluginSystem = pluginSystem;
  }

  async boot() {
    this.pluginSystem.registerRoute({
      route: "/hello-world",
      component: HelloWorldPlugin,
    });
  }
}

export default HelloWorldPagePlugin;
