import { useContext } from "react";
import { PluginContext } from "../src/react/PluginContext";
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  HStack,
  Heading,
  View,
  Image,
  Center,
  VStack,
  Text,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";

export default function Home() {
  const { pluginSystem } = useContext(PluginContext);

  return (
    <HStack backgroundColor="#270239" h={"100vh"}>
      <Center
        flex={1}
        // bg="$primary500"
        // sx={{
        //   _dark: { bg: "$primary500" },
        // }}
      >
        <Image
          size="2xl"
          w={550}
          h={350}
          rounded="$md"
          source={{
            uri: "https://www.datocms-assets.com/75941/1670871011-next-js-vs-wordpress-vista-actual.png?fit=crop&fm=webp&h=490&w=734",
          }}
        />
      </Center>

      <VStack flex={1} justifyContent="center" ml="$5">
        <Image
          mb={"$2"}
          w="$80"
          h="$10"
          alt="gluestack-ui Pro"
          resizeMode="contain"
          source={require("./assets/images/gluestackUiProLogo_web_light.svg")}
        />

        <Text
          fontSize={"$5xl"}
          color="white"
          lineHeight={"$4xl"}
          paddingTop={40}
          fontWeight="200"
          width={"90%"}
        >
          Next.js Wordpress-like plugin system: An experiment
        </Text>

        <Text color="gray" flexWrap="wrap" w={"$3/5"} pt={"$16"} size="lg">
          Partner with SHIFT and build your brand with our bold & original
          marketplace strategies. All delivered by our team of trusted experts.
        </Text>

        <Button
          mt="$16"
          size="lg"
          w="$1/3"
          rounded="$3xl"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          bgColor="white"
          sx={{
            ":hover": {
              bgColor: "#411F51",
            },
          }}
        >
          <ButtonText
            color="#270239"
            sx={{
              ":hover": {
                color: "#FFFFFF",
              },
            }}
          >
            SignIn{" "}
          </ButtonText>
        </Button>
      </VStack>
    </HStack>
  );
}
