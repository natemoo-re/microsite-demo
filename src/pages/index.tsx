import { h, Fragment, FunctionalComponent } from "preact";
import { definePage } from "microsite/page";
import { Head, seo } from "microsite/head";

import Idle from "@/components/Idle";
import Interaction from "@/components/Interaction";
import Visible from "@/components/Visible";
import Static from "@/components/Static";

const Index: FunctionalComponent<any> = ({ renderedAt }) => {
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
