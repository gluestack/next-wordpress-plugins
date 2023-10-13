import {
  HStack,
  Image,
  Center,
  VStack,
  Button,
  ButtonText,
  Heading,
} from "@gluestack-ui/themed";
import Link from "next/link";

export default function Home() {
  return (
    <HStack backgroundColor="$primary900" sx={{ _web: { h: "100vh" } }}>
      <Center flex={1}>
        <HStack alignItems="center">
          <Image
            size="2xl"
            w="$35"
            h="$35"
            rounded="$md"
            source={require("../assets/images/wordpress.png")}
            alt="banner-image"
          />
          <Image
            mx="$12"
            size="2xl"
            w="$24"
            h="$24"
            rounded="$md"
            source={require("../assets/images/arrow.png")}
            alt="banner-image"
          />
          <Image
            size="2xl"
            w="$48"
            h="$24"
            rounded="$md"
            source={require("../assets/images/next.png")}
            alt="banner-image"
          />
        </HStack>
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

        <Link href={"/login"} style={{ textDecorationLine: "none" }}>
          <Button mt="$12" size="lg" w="$1/3" rounded="$3xl" variant="solid">
            <ButtonText>Sign In </ButtonText>
          </Button>
        </Link>
      </VStack>
    </HStack>
  );
}
