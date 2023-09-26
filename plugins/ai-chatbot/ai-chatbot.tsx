import React, { useState } from "react";
import {
  ArrowLeftIcon,
  Avatar,
  Text,
  AvatarImage,
  Box,
  Button,
  ButtonIcon,
  HStack,
  Icon,
  MessageCircleIcon,
  Pressable,
  SearchIcon,
  VStack,
  Image,
  CheckIcon,
  InputField,
  Input,
  ExternalLinkIcon,
  PhoneIcon,
  AddIcon,
  Divider,
  AtSignIcon,
  ScrollView,
  Fab,
  FabIcon,
} from "@gluestack-ui/themed";

type ChatItem = {
  name?: string;
  text: string;
  time: string;
  type: string;
  align: string;
  read: boolean;
};

const chatItemList: ChatItem[] = [
  {
    name: "User",
    text: "Hello, chatbot!",
    time: "10:00 AM",
    type: "text",
    align: "right",
    read: true,
  },
  {
    name: "Chatbot",
    text: "Hi there! How can I assist you today?",
    time: "10:01 AM",
    type: "text",
    align: "left",
    read: true,
  },
  {
    name: "User",
    text: "I have a question about a product.",
    time: "10:02 AM",
    type: "text",
    align: "right",
    read: true,
  },
  {
    name: "Chatbot",
    text: "Sure, I would be happy to help. What is your question?",
    time: "10:03 AM",
    type: "text",
    align: "left",
    read: true,
  },
  {
    name: "User",
    text: "Can you provide information on your latest smartphone model?",
    time: "10:04 AM",
    type: "text",
    align: "right",
    read: true,
  },
  {
    name: "Chatbot",
    text: 'Of course! Our latest model is called the "Smartphone X." It features a high-resolution display, a powerful processor, and an advanced camera system.',
    time: "10:05 AM",
    type: "text",
    align: "left",
    read: true,
  },
  {
    name: "User",
    text: "Sounds interesting. What is the price of the Smartphone X?",
    time: "10:06 AM",
    type: "text",
    align: "right",
    read: true,
  },
  {
    name: "Chatbot",
    text: "The price of the Smartphone X starts at $699 for the base model. We also offer different storage options with varying prices.",
    time: "10:07 AM",
    type: "text",
    align: "left",
    read: true,
  },
  {
    name: "User",
    text: "Great, thanks for the information!",
    time: "10:08 AM",
    type: "text",
    align: "right",
    read: true,
  },
  {
    name: "Chatbot",
    text: "You are welcome! If you have any more questions or need assistance with anything else, feel free to ask.",
    time: "10:09 AM",
    type: "text",
    align: "left",
    read: true,
  },
];

function ChatHeader() {
  return (
    <HStack bg="$primary500" alignItems="center" space="sm" p="$4">
      <Pressable p="$0">
        <Icon as={ArrowLeftIcon} m="$2" w="$6" h="$6" color="$textLight50" />
      </Pressable>

      <Avatar size="md">
        <AvatarImage
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/010/054/157/original/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-illustration-ai-technology-futuristic-helper-communication-conversation-concept-in-flat-style-vector.jpg",
          }}
        />
      </Avatar>

      <Box>
        <Text color="$textLight50" fontSize="$lg">
          Help Center
        </Text>
      </Box>

      <HStack alignItems="center" space="xs" ml="auto">
        <Pressable p="$0">
          <Icon as={SearchIcon} m="$2" w="$5" h="$5" color="$textLight50" />
        </Pressable>
      </HStack>
    </HStack>
  );
}

function ChatItem(props: ChatItem) {
  return (
    <Box flexDirection={props.align === "left" ? "row" : "row-reverse"}>
      {props.type === "text" ? (
        <VStack
          minWidth="$32"
          bg={props.align === "left" ? "$backgroundLight200" : "$primary200"}
          sx={{
            "@md": {
              maxWidth: "$96",
            },
          }}
          maxWidth="$64"
          borderRadius="$sm"
          pt="$2"
          pb="$1"
          px="$2"
          gap="$0.5"
        >
          {props.name ? (
            <Text fontSize="$sm" fontWeight="$medium" color="$primary500">
              {props.name}
            </Text>
          ) : null}
          <Text fontSize="$sm">{props.text}</Text>
          <HStack justifyContent="flex-end" alignItems="center">
            <Text fontSize="$xs">{props.time}</Text>
            {props.read ? <Icon as={CheckIcon} m="$2" size="sm" /> : null}
          </HStack>
        </VStack>
      ) : (
        <Box flex={1} alignItems="flex-end">
          <HStack
            position="absolute"
            bottom="$1"
            right="$2"
            zIndex={2}
            gap="$1"
          >
            <Text fontSize="$xs">{props.time}</Text>
            {props.read ? <Icon as={CheckIcon} m="$2" size="sm" /> : null}
          </HStack>
        </Box>
      )}
    </Box>
  );
}

function ChatInput() {
  const [textInput, setTextInput] = useState("");
  return (
    <Box w="$full">
      <Divider />
      <HStack
        alignItems="center"
        pt="$3"
        pb="$4"
        px="$4"
        sx={{ "@md": { px: "$8" } }}
      >
        <Pressable p="$0.5">
          <Icon as={AtSignIcon} m="$2" size="lg" color="$textLight400" />
        </Pressable>

        <Input
          flex={1}
          sx={{
            "@md": {
              ml: "$3",
            },
          }}
          ml="$2"
          mr="$3"
          variant="outline"
          size="md"
          rounded="$md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField
            py="$2"
            px="$4"
            placeholder="Type a message"
            placeholderTextColor="$textLight400"
            fontSize="$sm"
            value={textInput}
            onChangeText={setTextInput}
          />
        </Input>

        <HStack alignItems="center" space="xs" ml="auto">
          <Pressable p="$0">
            <Icon
              as={ExternalLinkIcon}
              m="$2"
              w="$5"
              h="$5"
              color="$textLight400"
            />
          </Pressable>

          <Pressable p="$0">
            <Icon as={PhoneIcon} m="$2" w="$5" h="$5" color="$textLight400" />
          </Pressable>

          <Button
            h="$8"
            w="$8"
            p="$0"
            variant="solid"
            action="primary"
            rounded="$full"
            isDisabled={false}
            isFocusVisible={false}
          >
            <ButtonIcon as={AddIcon} size="xs" />
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
}

function MainContent() {
  return (
    <Box flex={1} bg="$backgroundLight50">
      <ChatHeader />
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <VStack px="$4" py="$4" gap="$2">
          {chatItemList.map((item, index) => {
            return <ChatItem {...item} key={index} />;
          })}
        </VStack>
      </ScrollView>
      <ChatInput />
    </Box>
  );
}

function AIChatbot() {
  const [visible, setVisible] = useState(false);
  return (
    <Box position="absolute" right="$0" zIndex={1}>
      <Box
        w={visible ? 480 : "$0"}
        sx={{
          _web: {
            h: "100vh",
          },
        }}
        borderRadius="$md"
      >
        <Fab
          h="$12"
          w="$12"
          p="$0"
          placement="bottom right"
          onPress={() => setVisible(!visible)}
        >
          <FabIcon as={MessageCircleIcon} size="lg" />
        </Fab>
        {visible && <MainContent />}
      </Box>
    </Box>
  );
}

export default AIChatbot;
