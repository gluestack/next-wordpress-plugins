import { IPlugin } from "./IPlugin";

class PluginStore {
  registeredPlugins: IPlugin[];
  bootedPlugins: IPlugin[];

  constructor() {
    this.registeredPlugins = [];
    this.bootedPlugins = [];
  }

  registerPlugin(plugin: IPlugin) {
    this.registeredPlugins.push(plugin);
  }
}

export default PluginStore;
