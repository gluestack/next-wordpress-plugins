import { PluginContext } from "../src/react/PluginContext";
import pluginSystem from "../bootstrap";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "../gluestack-ui.config";
export default function App({ Component, pageProps }: AppProps) {
  const { AIChatbotComponent, ConfettiComponent } =
    pluginSystem.getAllComponents();

  return (
    <GluestackUIProvider config={config}>
      <PluginContext.Provider value={{ pluginSystem: pluginSystem }}>
        <ConfettiComponent />
        <AIChatbotComponent />
        <Component {...pageProps} />
      </PluginContext.Provider>
    </GluestackUIProvider>
  );
}
