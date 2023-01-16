import React, { createContext } from "react";
import { Glue } from "../Glue";

export const GlueContext = createContext<{ glue: Glue | null }>({
  glue: null,
});
