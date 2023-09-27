import { PluginContext } from "../src/react/PluginContext";
import pluginSystem from "../bootstrap";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "../gluestack-ui.config";

export default function App({ Component, pageProps }: AppProps) {
  const { AIChatbotComponent, ConfettiComponent } =
    pluginSystem.getAllComponents();
  const data = pluginSystem.componentStore.registeredComponents;
  return (
    <GluestackUIProvider config={config}>
      <PluginContext.Provider value={{ pluginSystem: pluginSystem }}>
        {Object.keys(data).map((key) => {
          const component = data[key];
          if (component.placement === "beforePage" && component.component) {
            const ComponentToRender = component.component;
            return <ComponentToRender key={key} />;
          }
          return null;
        })}
        <Component {...pageProps} />
      </PluginContext.Provider>
    </GluestackUIProvider>
  );
}
