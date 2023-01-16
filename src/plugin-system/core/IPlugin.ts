import { PluginSystem } from "../../PluginSystem";

export interface IPlugin {
  pluginSystem: PluginSystem;
  boot(): void;
}
