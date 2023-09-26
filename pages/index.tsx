import { useContext } from "react";
import { PluginContext } from "../src/react/PluginContext";
import { Heading } from "@gluestack-ui/themed";

export default function Home() {
  const { pluginSystem } = useContext(PluginContext);

  return (
    <>
      <Heading style={{ fontFamily: "sans-serif", textAlign: "center" }}>
        Next.js Wordpress-like plugin system: An experiment
      </Heading>
    </>
  );
}
