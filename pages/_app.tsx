import { PluginContext } from "../src/react/PluginContext";
import pluginSystem from "../bootstrap";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "../gluestack-ui.config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GluestackUIProvider config={config.theme}>
      <PluginContext.Provider value={{ pluginSystem: pluginSystem }}>
        <Component {...pageProps} />
      </PluginContext.Provider>
    </GluestackUIProvider>
  );
}
