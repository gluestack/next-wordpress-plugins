import { useContext } from "react";
import { PluginContext } from "../src/react/PluginContext";

export default function Home() {
  const { pluginSystem } = useContext(PluginContext);

  return (
    <>
      <h1 style={{ fontFamily: "sans-serif", textAlign: "center" }}>
        Next.js Wordpress-like plugin system: An experiment
      </h1>
    </>
  );
}
