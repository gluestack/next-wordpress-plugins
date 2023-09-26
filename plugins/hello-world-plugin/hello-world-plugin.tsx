import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogHeader,
  Button,
  ButtonText,
  Center,
  CloseIcon,
  Heading,
  Icon,
  View,
  Text,
} from "@gluestack-ui/themed";
import { PluginContext } from "../../src/react/PluginContext";
import { useContext } from "react";
import React from "react";

function HelloWorldPlugin({ caption }: { caption: string }) {
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const { pluginSystem } = useContext(PluginContext);
  if (!pluginSystem) return <div>PluginSystem not found</div>;

  return (
    <View style={{ textAlign: "center" }}>
      <Center h={300}>
        <Button onPress={() => setShowAlertDialog(true)}>
          <ButtonText>Click me</ButtonText>
        </Button>
        <AlertDialog
          isOpen={showAlertDialog}
          onClose={() => {
            setShowAlertDialog(false);
          }}
        >
          <AlertDialogBackdrop />
          <AlertDialogContent>
            <AlertDialogHeader>
              <Heading size="lg">Hello World</Heading>
              <AlertDialogCloseButton>
                <Icon as={CloseIcon} />
              </AlertDialogCloseButton>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>
      </Center>
    </View>
  );
}

export default HelloWorldPlugin;
