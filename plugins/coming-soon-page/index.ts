import { Glue } from "@/src/Glue";
import { IPlugin } from "../../src/plugin-system/core/IPlugin";

import ComingSoonPage from "./coming-soon-page";

class ComingSoonPagePlugin implements IPlugin {
  name = "coming-soon-page-plugin";
  version = "0.0.1";

  app: Glue;

  constructor(app: Glue) {
    this.app = app;
  }

  async boot() {
    this.app.registerRoute({
      route: "/coming-soon",
      component: ComingSoonPage,
    });
  }
}

export default ComingSoonPagePlugin;
