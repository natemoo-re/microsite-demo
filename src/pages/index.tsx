import React from "react";
import { Head } from "microsite/head";

import Idle from "@/components/Idle/index";
import Interaction from "@/components/Interaction/index";
import Visible from "@/components/Visible/index";
import Static from "@/components/Static/index";

export const getStaticProps = async () => {
  return {
    props: {
      renderedAt: new Date().toLocaleString().replace(", ", " at "),
    },
  };
};

const Index = ({ renderedAt }) => {
  return (
    <>
      <Head>
        <title>Microsite Demo</title>
      </Head>

      <main>
        <Static renderedAt={renderedAt} />
        <Idle />
        <Interaction />
        <Visible />

        <Interaction initialCount={10} />
        <Visible initialCount={10} />
      </main>
    </>
  );
};

export default Index;
