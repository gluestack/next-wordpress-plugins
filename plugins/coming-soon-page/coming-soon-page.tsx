import { GlueContext } from "../../glue/react/GlueContext";
import { useContext } from "react";

function ComingSoonPage({ caption }: { caption: string }) {
  const { glue } = useContext(GlueContext);
  if (!glue) return <div>Glue not found</div>;

  const { ShareButton } = glue.getAllComponents();

  return (
    <div>
      <div>Coming soon</div>
      <ShareButton />
    </div>
  );
}

export default ComingSoonPage;
