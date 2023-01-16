import { Glue } from "@/src/Glue";
import { IPlugin } from "../../src/plugin-system/core/IPlugin";

import ShareButton from "./share-button";

class ShareButtonPlugin implements IPlugin {
  name = "share-button-plugin";
  version = "0.0.1";

  app: Glue;

  constructor(app: Glue) {
    this.app = app;
  }

  async boot() {
    this.app.registerComponent({
      name: "ShareButton",
      component: ShareButton,
    });
  }
}

export default ShareButtonPlugin;
