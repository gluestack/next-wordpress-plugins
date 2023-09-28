// //middleware store
// import React from "react";
// import { IMiddlewareDefinition } from "./IMiddlewareDefinintion";
// class MiddlewareStore {
//   registeredRoutes: { [key: string]: IMiddlewareDefinition };

//   constructor() {
//     this.registeredRoutes = {};
//   }
//   registerRoute(routeDefinition: IMiddlewareDefinition) {
//     this.registeredRoutes[routeDefinition.route] = routeDefinition;
//   }

//   getRoute(route: string) {
//     return this.registeredRoutes[route];
//   }

//   // getApiRoute(apiRoute: string) {
//     // console.log(apiRoute, " api route");
//   //   return this.registeredRoutes[apiRoute];
//   // }

//   getAllRouteDefinitions() {
//     return this.registeredRoutes;
//   }

//   /*  getAllComponents(): { [key: string]: React.FC } {
//     const that = this;
//     const ret: any = {};

//     Object.keys(this.registeredRoutes).forEach(function (key, index) {
//       ret[key] = that.registeredRoutes[key].component;
//     });

//     return ret;
//   }*/
// }

// export default RouteStore;
