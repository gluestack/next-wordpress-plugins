import React from "react";
import { IRouteDefinition } from "./IRouteDefinition";
console.log("1");
class RouteStore {
  registeredRoutes: { [key: string]: IRouteDefinition };

  constructor() {
    this.registeredRoutes = {};
  }

  registerRoute(routeDefinition: IRouteDefinition) {
    console.log(routeDefinition);
    this.registeredRoutes[routeDefinition.route] = routeDefinition;
  }

  getRoute(route: string) {
    console.log(route, " api route");
    return this.registeredRoutes[route];
  }
  getApiRoute(apiRoute: string) {
    console.log(apiRoute, " api route");
    return this.registeredRoutes[apiRoute];
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
