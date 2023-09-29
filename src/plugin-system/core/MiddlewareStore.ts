import React from "react";
import { IMiddlewareDefinition } from "./IMiddlewareDefinition";
class MiddlewareStore {
  registeredMiddlewares: Array<any>;

  constructor() {
    this.registeredMiddlewares = [];
  }

  registerMiddleware(middlewareDefinition: any) {
    this.registeredMiddlewares.push(middlewareDefinition);
  }

  getAllRegisteredMiddleware() {
    return this.registeredMiddlewares;
  }
}

export default MiddlewareStore;
