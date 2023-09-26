import {
  View,
  Text,
  Button,
  ButtonText,
  Box,
  Icon,
  Modal,
  Fab,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Center,
  Heading,
  CloseIcon,
  Image,
  Avatar,
  AvatarImage,
  MessageCircleIcon,
  FabIcon,
} from "@gluestack-ui/themed";
import React, { useContext, useState } from "react";
import { PluginContext } from "../../src/react/PluginContext";

const Logout = () => {
  const [showModal, setShowModal] = useState(false);
  const { pluginSystem } = useContext(PluginContext);
  if (!pluginSystem) return <div>PluginSystem not found</div>;
  const ref = React.useRef(null);

  return (
    <Box>
      <Box position="absolute" right="$0" m="$4" zIndex={1}>
        <Button onPress={() => setShowModal(true)} ref={ref}>
          <ButtonText>Logout</ButtonText>
        </Button>
      </Box>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader justifyContent="flex-end">
            <ModalCloseButton>
              <Icon size="lg" as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Avatar size="xl" alignSelf="center">
              <AvatarImage
                source={{
                  uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                }}
              />
            </Avatar>
            <Text p="$4">
              Are you sure that you want to logout from account? All your
              unsaved data will be lost.
            </Text>
          </ModalBody>
          <ModalFooter flexDirection="row" alignItems="center">
            <Button
              flex={1}
              size="sm"
              py="$2.5"
              action="primary"
              borderWidth="$0"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>YES</ButtonText>
            </Button>
            <Button
              ml="$4"
              py="$2.5"
              variant="outline"
              size="sm"
              action="secondary"
              onPress={() => {
                setShowModal(false);
              }}
              flex={1}
            >
              <ButtonText>NO</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Logout;
