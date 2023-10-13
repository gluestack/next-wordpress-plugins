import { PluginContext } from "../../src/react/PluginContext";
import React, { useContext } from "react";
import { Image, Heading, HStack, Center, VStack } from "@gluestack-ui/themed";

function PageText() {
  return (
    <Heading mt="$8" pb="$8" fontSize="$2xl" textAlign="center">
      Coming Soon !
    </Heading>
  );
}

function ComingSoonPage({ caption }: { caption: string }) {
  const { pluginSystem } = useContext(PluginContext);
  if (!pluginSystem) return <div>PluginSystem not found</div>;

  //@ts-ignore
  const { SocialShareButton } = pluginSystem.getAllComponents();

  return (
    <Center flex={1} sx={{ _web: { h: "100vh" } }}>
      <VStack>
        <Image
          h="$96"
          w="$96"
          source={require("./assets/images/coming-soon.png")}
          alt="Alternet Text"
        />
        <HStack space="md" justifyContent="center">
          <PageText />
          {SocialShareButton !== undefined ? <SocialShareButton /> : null}
        </HStack>
      </VStack>
    </Center>
  );
}

export default ComingSoonPage;
