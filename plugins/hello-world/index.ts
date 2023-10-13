import { PluginSystem } from "@/src/PluginSystem";
import { IPlugin } from "../../src/plugin-system/core/IPlugin";
import HelloWorld from "./hello-world";

class HelloWorldPagePlugin implements IPlugin {
  name = "hello-world-page-plugin";
  version = "0.0.1";

  pluginSystem: PluginSystem;

  constructor(pluginSystem: PluginSystem) {
    this.pluginSystem = pluginSystem;
  }

  async boot() {
    if (typeof window !== "undefined") {
      alert("Hello world!");
    }
  }
}

export default HelloWorldPagePlugin;
