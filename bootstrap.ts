import { Glue } from "./src/Glue";

import plugins from "./plugins";

const glue = new Glue();

plugins.forEach((plugin: any) => {
  glue.registerPlugin(plugin);
});

glue.bootPlugins();

export default glue;
