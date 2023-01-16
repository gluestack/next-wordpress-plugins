import { useContext } from "react";
import { GlueContext } from "../src/react/GlueContext";

export default function Home() {
  const { glue } = useContext(GlueContext);

  console.log(glue);

  return (
    <>
      <h1>Test</h1>
    </>
  );
}
