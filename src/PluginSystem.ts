import { IPlugin } from "./plugin-system/core/IPlugin";
import PluginStore from "./plugin-system/core/PluginStore";
import RouteStore from "./plugin-system/core/RouteStore";
import ComponentStore from "./plugin-system/core/ComponentStore";
import ApiRouteStore from "./plugin-system/core/ApiRouteStore";
import { IComponentDefinition } from "./plugin-system/core/IComponentDefinition";
import { IRouteDefinition } from "./plugin-system/core/IRouteDefinition";
import { IApiRouteDefinition } from "./plugin-system/core/IApiRouteDefinition";

export class PluginSystem {
  pluginStore: PluginStore;
  componentStore: ComponentStore;
  routeStore: RouteStore;
  apiRouteStore: ApiRouteStore;

  constructor() {
    this.pluginStore = new PluginStore();
    this.componentStore = new ComponentStore();
    this.routeStore = new RouteStore();
    this.apiRouteStore = new ApiRouteStore();
  }

  registerPlugin(plugin: any) {
    this.pluginStore.registerPlugin(new plugin(this));
  }

  registerComponent(component: IComponentDefinition) {
    this.componentStore.registerComponent(component);
  }

  registerRoute(routeDefinition: IRouteDefinition) {
    this.routeStore.registerRoute(routeDefinition);
  }

  registerApiRoute(apiRouteDefinition: IApiRouteDefinition) {
    this.apiRouteStore.registerApiRoute(apiRouteDefinition);
  }

  getComponentDefinition(name: string) {
    return this.componentStore.getComponent(name);
  }

  getAllComponents(placementString: string) {
    return this.componentStore.getAllComponents(placementString);
  }

  getAllRoutes() {
    return this.routeStore.getAllRouteDefinitions();
  }

  getAllApiRoutes() {
    return this.apiRouteStore?.getAllApiRouteDefinitions();
  }

  bootPlugins() {
    this.pluginStore.registeredPlugins.forEach((plugin) => {
      plugin.boot();
      this.pluginStore.bootedPlugins.push(plugin);
    });
  }
}
