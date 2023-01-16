import { PluginContext } from "../src/react/PluginContext";
import type { AppProps } from "next/app";

import pluginSystem from "../bootstrap";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PluginContext.Provider value={{ pluginSystem: pluginSystem }}>
      <Component {...pageProps} />
    </PluginContext.Provider>
  );
}
