import { useContext } from "react";
import { GlueContext } from "../src/react/GlueContext";

export default function Home() {
  const { glue } = useContext(GlueContext);

  return (
    <>
      <h1 style={{ fontFamily: "sans-serif", textAlign: "center" }}>
        Next.js Wordpress-like plugin system: An experiment
      </h1>
    </>
  );
}
