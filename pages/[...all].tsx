import pluginSystem from "../bootstrap";
import { useRouter } from "next/router";

export default function All() {
  const router = useRouter();
  const routeDefinition = pluginSystem.getAllRoutes()[router.asPath];

  if (routeDefinition) {
    return <routeDefinition.component />;
  }
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  const paths = Object.keys(pluginSystem.getAllRoutes());
  return {
    paths,
    fallback: false,
  };
}
