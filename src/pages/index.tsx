import React from "react";
import { definePage } from "microsite/page";
import { Head, seo } from "microsite/head";

import { Idle, Interaction, Visible, Static } from "../components";

const Index = ({ renderedAt }) => {
  return (
    <>
      <Head>
        <seo.title>Microsite Demo</seo.title>
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

export default definePage(Index, {
  async getStaticProps() {
    return {
      props: {
        renderedAt: new Date().toLocaleString().replace(", ", " at "),
      },
    };
  },
});
