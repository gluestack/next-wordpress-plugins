import React from "react";
import { IMiddlewareDefinition } from "./IMiddlewareDefinition";

class MiddlewareStore {
  registeredMiddlewares: Array<any>;

  constructor() {
    this.registeredMiddlewares = [];
  }

  registerMiddlewares(middlewareDefinition: any) {
    console.log("hello world 1");
    this.registeredMiddlewares.push(middlewareDefinition);
  }

  getAllRegisteredMiddleware() {
    console.log("hi all come");
    return this.registeredMiddlewares;
  }
}

export default MiddlewareStore;
