import { useContext } from "react";
import { PluginContext } from "../src/react/PluginContext";
import {
  HStack,
  Image,
  Center,
  VStack,
  Text,
  Button,
  ButtonText,
  Heading,
} from "@gluestack-ui/themed";
import Link from "next/link";
export default function Home() {
  const { pluginSystem } = useContext(PluginContext);

  return (
    <HStack backgroundColor="$primary900" sx={{ _web: { h: "100vh" } }}>
      <Center flex={1}>
        <Image
          size="2xl"
          w="$550"
          h="$350"
          rounded="$md"
          source={{
            uri: "https://www.datocms-assets.com/75941/1670871011-next-js-vs-wordpress-vista-actual.png?fit=crop&fm=webp&h=490&w=734",
          }}
        />
      </Center>

      <VStack flex={1} justifyContent="center" ml="$5">
        <Image
          mb="$2"
          w="$80"
          h="$10"
          alt="gluestack-ui Pro"
          resizeMode="contain"
          source={require("../assets/images/gluestackUiProLogo_web_light.svg")}
        />

        <Heading
          fontSize="$5xl"
          color="$textLight0"
          lineHeight="$4xl"
          paddingTop="$10"
          fontWeight="$thin"
          width="90%"
        >
          Next.js Wordpress-like plugin system: An experiment
        </Heading>

        <Text w="$3/5" pt="$16" size="lg">
          Partner with SHIFT and build your brand with our bold & original
          marketplace strategies. All delivered by our team of trusted experts.
        </Text>
        <Link href={"/login"} style={{ textDecorationLine: "none" }}>
          <Button mt="$16" size="lg" w="$1/3" rounded="$3xl" variant="solid">
            <ButtonText>Sign In </ButtonText>
          </Button>
        </Link>
      </VStack>
    </HStack>
  );
}
