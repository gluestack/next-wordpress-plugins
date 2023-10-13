import React from "react";
import { IRouteDefinition } from "./IRouteDefinition";
class RouteStore {
  registeredRoutes: { [key: string]: IRouteDefinition };

  constructor() {
    this.registeredRoutes = {};
  }
  registerRoute(routeDefinition: IRouteDefinition) {
    this.registeredRoutes[routeDefinition.route] = routeDefinition;
  }

  getRoute(route: string) {
    return this.registeredRoutes[route];
  }

  getAllRouteDefinitions() {
    return this.registeredRoutes;
  }

  /*  getAllComponents(): { [key: string]: React.FC } {
    const that = this;
    const ret: any = {};

    Object.keys(this.registeredRoutes).forEach(function (key, index) {
      ret[key] = that.registeredRoutes[key].component;
    });

    return ret;
  }*/
}

export default RouteStore;
