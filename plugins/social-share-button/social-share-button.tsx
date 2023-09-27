import {
  Button,
  ButtonIcon,
  Center,
  CloseIcon,
  HStack,
  Icon,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ShareIcon,
} from "@gluestack-ui/themed";
import React, { useState, useRef } from "react";
import {
  FacebookIcon,
  LinkedInIcon,
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
                <ButtonIcon size="xl" as={LinkedInIcon} />
              </Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Center>
  );
}

export default SocialShareButton;
