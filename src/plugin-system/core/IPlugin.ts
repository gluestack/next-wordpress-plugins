import { Glue } from "../../Glue";

export interface IPlugin {
  app: Glue;
  boot(): void;
}
