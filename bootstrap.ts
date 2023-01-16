import { PluginSystem } from "./src/PluginSystem";

import plugins from "./plugins";

const pluginSystem = new PluginSystem();

plugins.forEach((plugin: any) => {
  pluginSystem.registerPlugin(plugin);
});

pluginSystem.bootPlugins();

export default pluginSystem;
