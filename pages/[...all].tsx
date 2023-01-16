/*import { useContext } from "react";
import { useRouter } from "next/router";

import { GlueContext } from "../glue/react/GlueContext";

export default function All() {
  const router = useRouter();
  const { meta, plugins } = useContext(GlueContext);

  for (let i in plugins) {
    if (plugins[i].route == router.asPath) {
      return plugins[i].render();
    }
  }
}
*/

import glue from "../bootstrap";
import { useRouter } from "next/router";

export default function All() {
  const router = useRouter();
  const routeDefinition = glue.getAllRoutes()[router.asPath];

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
  const paths = Object.keys(glue.getAllRoutes());
  return {
    paths,
    fallback: false,
  };
}
