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
                uri: "https://geekyants.com/_next/image/?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Fuser%2F11%2F2022-09-04%2F166229332377190.jpg&w=3840&q=75",
              }}
              alt="avatar-image"
            />
          </Avatar>
          <VStack>
            <Heading size="sm" color="$textLight0">
              Sanket Sahu
            </Heading>
            <Text size="sm" color="$textLight0">
              CEO GeekyAnts
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
