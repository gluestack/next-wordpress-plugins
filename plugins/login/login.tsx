import React, { useContext, useState } from "react";
import { PluginContext } from "../../src/react/PluginContext";
import {
  Center,
  Button,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
  Link,
  useToast,
  Toast,
  Box,
  CheckIcon,
  Checkbox,
  Icon,
  ToastTitle,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  InputIcon,
  FormControlHelper,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  ButtonText,
  ButtonIcon,
  Image,
  Divider,
  ArrowLeftIcon,
  Heading,
  LinkText,
  InputSlot,
  EyeIcon,
  EyeOffIcon,
  ScrollView,
  StatusBar,
} from "@gluestack-ui/themed";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Keyboard } from "react-native";

import {
  FacebookIcon,
  LinkedInIcon,
} from "../social-share-button/assets/icons/SocialShare";
import router from "next/router";

const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email(),
  password: z
    .string()
    .min(6, "Must be at least 8 characters in length")
    .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
    .regex(new RegExp(".*[a-z].*"), "One lowercase character")
    .regex(new RegExp(".*\\d.*"), "One number")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "One special character"
    ),
  rememberme: z.boolean().optional(),
});

type SignInSchemaType = z.infer<typeof signInSchema>;

const SignInForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
  });
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [message, setMessage] = useState("");
  const toast = useToast();

  const onSubmit = async (_data: SignInSchemaType) => {
    const email = _data.email;
    const password = _data.password;

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.status === 200) {
        router.push("/coming-soon");
      } else if (response.status === 401) {
        setMessage("Invalid credentials");
      } else {
        setMessage("An error occurred");
      }
      if (response.status === 200) {
        router.push("/coming-soon");
        reset();
      } else {
        toast.show({
          placement: "bottom right",
          render: ({ id }) => {
            return (
              <Toast nativeID={id} variant="accent" action="error">
                <ToastTitle>Invalid credentials</ToastTitle>
              </Toast>
            );
          },
        });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setMessage("An error occurred");
    }

    // toast.show({
    //   placement: "bottom right",
    //   render: ({ id }) => {
    //     return (
    //       <Toast nativeID={id} variant="accent" action="success">
    //         <ToastTitle>Signed in successfully</ToastTitle>
    //       </Toast>
    //     );
    //   },
    // });
    // reset();
  };

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  return (
    <>
      <VStack justifyContent="space-between">
        <FormControl
          isInvalid={(!!errors.email || isEmailFocused) && !!errors.email}
          isRequired={true}
        >
          <Controller
            name="email"
            defaultValue=""
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signInSchema.parseAsync({ email: value });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input>
                <InputField
                  fontSize="$sm"
                  placeholder="Email"
                  type="text"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  returnKeyType="done"
                />
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorText>
              {errors?.email?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl my="$6" isInvalid={!!errors.password} isRequired={true}>
          <Controller
            name="password"
            defaultValue=""
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signInSchema.parseAsync({
                    password: value,
                  });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input>
                <InputField
                  fontSize="$sm"
                  placeholder="Password"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  returnKeyType="done"
                  type={showPassword ? "text" : "password"}
                />
                <InputSlot onPress={handleState} pr="$3">
                  <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            )}
          />
          <FormControlError>
            {/* <FormControlErrorIcon as={AlertTriangle} size="sm" /> */}
            <FormControlErrorText>
              {errors?.password?.message}
            </FormControlErrorText>
          </FormControlError>

          <FormControlHelper></FormControlHelper>
        </FormControl>
      </VStack>
      <Link ml="auto">
        <LinkText fontSize="$xs">Forgot password?</LinkText>
      </Link>
      <Controller
        name="rememberme"
        defaultValue={false}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Checkbox
            my="$5"
            size="sm"
            value="Remember me"
            isChecked={value}
            onChange={onChange}
            alignSelf="flex-start"
          >
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Remember me and keep me logged in</CheckboxLabel>
          </Checkbox>
        )}
      />
      <Button
        variant="solid"
        size="lg"
        mt="$5"
        onPress={handleSubmit(onSubmit)}
      >
        <ButtonText fontSize="$sm"> SIGN IN</ButtonText>
      </Button>
    </>
  );
};

function SideContainerWeb() {
  return (
    <Center
      flex={1}
      bg="$primary500"
      sx={{
        _dark: { bg: "$primary500" },
      }}
    >
      <Image
        w="$80"
        h="$10"
        alt="gluestack-ui Pro"
        resizeMode="contain"
        source={require("./assets/images/gluestackUiProLogo_web_light.svg")}
      />
    </Center>
  );
}

const Main = () => {
  return (
    <>
      <Box
        px="$4"
        sx={{
          "@md": {
            px: "$8",
            borderTopLeftRadius: "$none",
            borderTopRightRadius: "$none",
            borderBottomRightRadius: "$none",
          },
          _dark: { bg: "$backgroundDark800" },
        }}
        py="$8"
        flex={1}
        bg="$backgroundLight0"
        justifyContent="space-between"
        borderTopLeftRadius="$2xl"
        borderTopRightRadius="$2xl"
        borderBottomRightRadius="$none"
      >
        <Heading
          display="none"
          mb="$8"
          sx={{
            "@md": { display: "flex", fontSize: "$2xl" },
          }}
        >
          Sign in to continue
        </Heading>
        <SignInForm />
        <HStack my="$4" space="md" alignItems="center" justifyContent="center">
          <Divider
            w="$2/6"
            bg="$backgroundLight200"
            sx={{ _dark: { bg: "$backgroundDark700" } }}
          />
          <Text
            fontWeight="$medium"
            color="$textLight400"
            sx={{ _dark: { color: "$textDark300" } }}
          >
            or
          </Text>
          <Divider
            w="$2/6"
            bg="$backgroundLight200"
            sx={{ _dark: { bg: "$backgroundDark700" } }}
          />
        </HStack>
        <HStack
          mt="$6"
          sx={{
            "@md": {
              mt: "$4",
            },
          }}
          mb="$9"
          justifyContent="center"
          alignItems="center"
          space="lg"
        >
          <Link href="">
            <Button action="secondary" variant="link" onPress={() => {}}>
              <ButtonIcon as={FacebookIcon} size="md" />
            </Button>
          </Link>
          <Link href="">
            <Button action="secondary" variant="link" onPress={() => {}}>
              <ButtonIcon as={LinkedInIcon} size="md" />
            </Button>
          </Link>
        </HStack>
        <HStack
          space="xs"
          alignItems="center"
          justifyContent="center"
          mt="auto"
        >
          <Text
            color="$textLight500"
            fontSize="$sm"
            sx={{ _dark: { color: "$textDark400" } }}
          >
            Don't have an account?
          </Text>
          <Link href="">
            <LinkText fontSize="$sm">Sign up</LinkText>
          </Link>
        </HStack>
      </Box>
    </>
  );
};

export default function SignIn() {
  const { pluginSystem } = useContext(PluginContext);
  if (!pluginSystem) return <div>PluginSystem not found</div>;

  return (
    <>
      <Box
        sx={{
          _web: {
            height: "100vh",
            overflow: "hidden",
          },
        }}
        height="$full"
      >
        <StatusBar
          translucent
          backgroundColor="$none"
          barStyle="light-content"
        />
        <ScrollView
          flex={1}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          sx={{
            "@base": { _light: { bg: "$primary500" } },
            "@md": { _light: { bg: "$primary900" }, p: "$8" },
            _dark: { bg: "$backgroundDark900" },
          }}
          bounces={false}
        >
          <VStack
            w="$full"
            flex={1}
            overflow="hidden"
            sx={{
              "@md": {
                maxWidth: 1016,
                flexDirection: "row",
                rounded: "$xl",
                flex: undefined,
              },
            }}
          >
            <Box display="none" sx={{ "@md": { display: "flex" } }} flex={1}>
              <SideContainerWeb />
            </Box>

            <Box flex={1}>
              <Main />
            </Box>
          </VStack>
        </ScrollView>
      </Box>
    </>
  );
}
