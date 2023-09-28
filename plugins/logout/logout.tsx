import {
  Text,
  Button,
  ButtonText,
  Center,
  Heading,
  VStack,
  HStack,
  Avatar,
  AvatarImage,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
import React, { useContext, useState } from "react";
import { PluginContext } from "../../src/react/PluginContext";
import { useRouter } from "next/router";
const Logout = () => {
  const router = useRouter();

  async function handleLogout() {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }
  const { pluginSystem } = useContext(PluginContext);
  if (!pluginSystem) return <div>PluginSystem not found</div>;
  const ref = React.useRef(null);

  return (
    <Center backgroundColor="$primary900" sx={{ _web: { h: "100vh" } }}>
      <VStack space="2xl">
        <HStack space="md" justifyContent="center" alignItems="center">
          <Avatar size="2xl">
            <AvatarFallbackText>SS</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
              }}
            />
          </Avatar>
          <VStack>
            <Heading size="sm" color="$textLight0">
              Ronald Richards
            </Heading>
            <Text size="sm" color="$textLight0">
              Nursing Assistant
            </Text>
          </VStack>
        </HStack>

        <Button onPress={() => handleLogout()} size="lg" variant="solid">
          <ButtonText>Logout </ButtonText>
        </Button>
      </VStack>
    </Center>
  );
};

export default Logout;
