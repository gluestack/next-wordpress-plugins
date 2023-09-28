import React from "react";
import { IApiRouteDefinition } from "./IApiRouteDefinition";

class ApiRouteStore {
  registeredApiRoutes: { [key: string]: IApiRouteDefinition };

  constructor() {
    this.registeredApiRoutes = {};
  }

  registerApiRoute(apiRouteDefinition: IApiRouteDefinition) {
    //jo bhi props hum ek api route mei define krege 
    this.registeredApiRoutes[apiRouteDefinition.route] = apiRouteDefinition;
  }

  getApiRoute(route: string) {
    return this.registeredApiRoutes[route];
  }

  getAllApiRouteDefinitions() {
    return this.registeredApiRoutes;
  }

  /*  getAllComponents(): { [key: string]: React.FC } {
    const that = this;
    const ret: any = {};

    Object.keys(this.registeredApiRoutes).forEach(function (key, index) {
      ret[key] = that.registeredApiRoutes[key].component;
    });

    return ret;
  }*/
}

export default ApiRouteStore;
