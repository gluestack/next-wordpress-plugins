import { PluginContext } from "../../src/react/PluginContext";
import { useContext } from "react";

function ComingSoonPage({ caption }: { caption: string }) {
  const { pluginSystem } = useContext(PluginContext);
  if (!pluginSystem) return <div>PluginSystem not found</div>;

  const { ShareButton } = pluginSystem.getAllComponents();

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
