import React from "react";
import { IComponentDefinition } from "./IComponentDefinition";

class ComponentStore {
  registeredComponents: { [key: string]: IComponentDefinition };

  constructor() {
    this.registeredComponents = {};
  }

  registerComponent(component: IComponentDefinition) {
    this.registeredComponents[component.name] = component;
  }

  getComponent(name: string) {
    return this.registeredComponents[name];
  }

  getAllComponents(placementString: string): { [key: string]: React.FC } {
    const that = this;
    const ret: any = {};

    Object.keys(this.registeredComponents).forEach(function (key, index) {
      if (that.registeredComponents[key].placement === placementString) {
        ret[key] = that.registeredComponents[key].component;
      }
    });
    return ret;
  }
}

export default ComponentStore;
