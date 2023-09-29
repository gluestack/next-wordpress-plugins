import { IPlugin } from "./plugin-system/core/IPlugin";
import PluginStore from "./plugin-system/core/PluginStore";
import RouteStore from "./plugin-system/core/RouteStore";
import ComponentStore from "./plugin-system/core/ComponentStore";
import ApiRouteStore from "./plugin-system/core/ApiRouteStore";
import MiddlewareStore from "./plugin-system/core/MiddlewareStore";
import { IComponentDefinition } from "./plugin-system/core/IComponentDefinition";
import { IRouteDefinition } from "./plugin-system/core/IRouteDefinition";
import { IApiRouteDefinition } from "./plugin-system/core/IApiRouteDefinition";
import { IMiddlewareDefinition } from "./plugin-system/core/IMiddlewareDefinition";

export class PluginSystem {
  pluginStore: PluginStore;
  componentStore: ComponentStore;
  routeStore: RouteStore;
  apiRouteStore: ApiRouteStore;
  middlewareStore: MiddlewareStore;

  constructor() {
    this.pluginStore = new PluginStore();
    this.componentStore = new ComponentStore();
    this.routeStore = new RouteStore();
    this.apiRouteStore = new ApiRouteStore();
    this.middlewareStore = new MiddlewareStore();
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

  registerMiddlewares(middlewareDefinition: any) {
    return this.middlewareStore.registerMiddlewares(middlewareDefinition);
  }

  getAllRegisteredMiddleware(middlewareDefinition: any) {
    return this.middlewareStore.registerMiddlewares(middlewareDefinition);
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
    return this.apiRouteStore.getAllApiRouteDefinitions();
  }

  bootPlugins() {
    this.pluginStore.registeredPlugins.forEach((plugin) => {
      plugin.boot();
      this.pluginStore.bootedPlugins.push(plugin);
    });
  }
}
