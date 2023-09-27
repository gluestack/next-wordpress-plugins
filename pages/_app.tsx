import { PluginContext } from "../src/react/PluginContext";
import pluginSystem from "../bootstrap";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import {
  GluestackUIProvider,
  Text,
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  Heading,
  AlertDialogCloseButton,
  CloseIcon,
  View,
} from "@gluestack-ui/themed";
import { config } from "../gluestack-ui.config";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { AIChatbotComponent, ConfettiComponent } =
    pluginSystem.getAllComponents();
  const [open, setOpen] = useState(false);
  const componentsArray = Object.values(
    pluginSystem.componentStore.registeredComponents
  );

  // useEffect(() => {
  //   // Check if the window object exists before calling alert
  //   if (typeof window !== "undefined") {
  //     window.alert("Hello World");
  //   }
  // }, []);

  // return <View></View>;
  return (
    <GluestackUIProvider config={config}>
      <PluginContext.Provider value={{ pluginSystem: pluginSystem }}>
        {/* <AlertDialog isOpen={true}>
          <AlertDialogBackdrop />
          <AlertDialogContent p="$4">
            <AlertDialogHeader alignSelf="center">
              <Heading size="lg">Hello World !</Heading>
              <AlertDialogCloseButton
                as={CloseIcon}
                onPress={() => setOpen(false)}
              ></AlertDialogCloseButton>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog> */}
        {componentsArray.map((component, index): any => {
          if (component.placement === "beforePage") {
            console.log("BeforePage", ConfettiComponent);
            return (
              <>
                {ConfettiComponent !== undefined ? <ConfettiComponent /> : null}
                {AIChatbotComponent !== undefined ? (
                  <AIChatbotComponent />
                ) : null}
              </>
            );
          } else if (component.placement === "afterPage") {
            return (
              <>
                {ConfettiComponent !== undefined ? <ConfettiComponent /> : null}
                {AIChatbotComponent !== undefined ? (
                  <AIChatbotComponent />
                ) : null}
              </>
            );
          }
        })}
        <Component {...pageProps} />
      </PluginContext.Provider>
    </GluestackUIProvider>
  );
}
