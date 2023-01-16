import React, { createContext } from "react";
import { PluginSystem } from "../PluginSystem";

export const PluginContext = createContext<{
  pluginSystem: PluginSystem | null;
}>({
  pluginSystem: null,
});
