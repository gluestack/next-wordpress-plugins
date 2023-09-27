import { IPlugin } from "./plugin-system/core/IPlugin";
import PluginStore from "./plugin-system/core/PluginStore";
import RouteStore from "./plugin-system/core/RouteStore";
import ComponentStore from "./plugin-system/core/ComponentStore";
import { IComponentDefinition } from "./plugin-system/core/IComponentDefinition";
import { IRouteDefinition } from "./plugin-system/core/IRouteDefinition";

export class PluginSystem {
  pluginStore: PluginStore;
  componentStore: ComponentStore;
  routeStore: RouteStore;

  constructor() {
    this.pluginStore = new PluginStore();
    this.componentStore = new ComponentStore();
    this.routeStore = new RouteStore();
  }

  registerPlugin(plugin: any) {
    this.pluginStore.registerPlugin(new plugin(this));
  }

  registerComponent(component: IComponentDefinition) {
    this.componentStore.registerComponent(component);
    if (component.placement === "afterPage") {
      console.log("After pageeeeee");
    }
    if (component.placement === "beforePage") {
      console.log("BeforePageeeee");
    }
  }

  registerRoute(routeDefinition: IRouteDefinition) {
    this.routeStore.registerRoute(routeDefinition);
  }

  getComponentDefinition(name: string) {
    return this.componentStore.getComponent(name);
  }

  getAllComponents() {
    return this.componentStore.getAllComponents();
  }

  getAllRoutes() {
    return this.routeStore.getAllRouteDefinitions();
  }

  bootPlugins() {
    this.pluginStore.registeredPlugins.forEach((plugin) => {
      plugin.boot();
      this.pluginStore.bootedPlugins.push(plugin);
    });
  }
}
