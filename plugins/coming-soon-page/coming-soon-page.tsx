import { GlueContext } from "../../src/react/GlueContext";
import { useContext } from "react";

function ComingSoonPage({ caption }: { caption: string }) {
  const { glue } = useContext(GlueContext);
  if (!glue) return <div>Glue not found</div>;

  const { ShareButton } = glue.getAllComponents();

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontFamily: "sans-serif", textAlign: "center" }}>
        Coming soon
      </h1>
      <ShareButton />
    </div>
  );
}

export default ComingSoonPage;
