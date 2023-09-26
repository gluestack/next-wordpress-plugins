import {
  Button,
  ButtonIcon,
  ButtonText,
  Center,
  CloseIcon,
  HStack,
  Heading,
  Icon,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ShareIcon,
  Text,
} from "@gluestack-ui/themed";
import React, { useState, useRef } from "react";
import {
  FacebookIcon,
  GoogleIcon,
  LinkedIn,
  TwitterIcon,
} from "./assets/icons/SocialShare";

function SocialShareButton({ caption }: { caption: string }) {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  return (
    <Center>
      <Button onPress={() => setShowModal(true)} ref={ref}>
        <ButtonIcon as={ShareIcon} />
      </Button>
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
            <HStack justifyContent="space-around" p="$4">
              <Button variant="outline">
                <ButtonIcon size="xl" as={FacebookIcon} />
              </Button>
              <Button variant="outline">
                <ButtonIcon size="xl" as={TwitterIcon} />
              </Button>
              <Button variant="outline">
                <ButtonIcon size="xl" as={LinkedIn} />
              </Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Center>
  );
}

export default SocialShareButton;
