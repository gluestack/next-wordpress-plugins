import React from "react";
import { IMiddlewareDefinition } from "./IMiddlewareDefinition";

class MiddlewareStore {
  registeredMiddlewares: Array<IMiddlewareDefinition>;

  constructor() {
    this.registeredMiddlewares = [];
  }

  registerMiddlewares(middlewareDefinition: IMiddlewareDefinition) {
    this.registeredMiddlewares.push(middlewareDefinition);
  }

  getAllRegisteredMiddleware() {
    return this.registeredMiddlewares;
  }
}

export default MiddlewareStore;
