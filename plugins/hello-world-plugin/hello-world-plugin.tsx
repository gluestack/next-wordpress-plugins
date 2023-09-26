import React, { useContext } from "react";
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  Heading,
  View,
} from "@gluestack-ui/themed";
import { PluginContext } from "../../src/react/PluginContext";

function HelloWorldPlugin() {
  const { pluginSystem } = useContext(PluginContext);
  if (!pluginSystem) return <div>PluginSystem not found</div>;

  return (
    <AlertDialog isOpen={true}>
      <AlertDialogBackdrop />
      <AlertDialogContent p="$4">
        <AlertDialogHeader alignSelf="center">
          <Heading size="lg">Hello World !</Heading>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default HelloWorldPlugin;
