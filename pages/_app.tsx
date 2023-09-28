import { PluginContext } from "../src/react/PluginContext";
import pluginSystem from "../bootstrap";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "../gluestack-ui.config";

export default function App({ Component, pageProps }: AppProps) {
  const beforePageComponents = pluginSystem.getAllComponents("beforePage");
  const afterPageComponents = pluginSystem.getAllComponents("afterPage");
  return (
    <GluestackUIProvider config={config}>
      <PluginContext.Provider value={{ pluginSystem: pluginSystem }}>
        {Object.keys(beforePageComponents).map((key) => {
          const Elem = beforePageComponents[key];
          return <Elem />;
        })}

        <Component {...pageProps} />

        {Object.keys(afterPageComponents).map((key) => {
          const Elem = afterPageComponents[key];
          return <Elem />;
        })}
      </PluginContext.Provider>
    </GluestackUIProvider>
  );
}
