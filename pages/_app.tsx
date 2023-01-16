import { GlueContext } from "../src/react/GlueContext";
import type { AppProps } from "next/app";

import glue from "../bootstrap";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlueContext.Provider value={{ glue }}>
      <Component {...pageProps} />
    </GlueContext.Provider>
  );
}
