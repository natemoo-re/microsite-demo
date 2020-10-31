import React from "react";
import { Head } from "microsite/head";
import styles from "./test.module.css";

import A from "../components/A/a";
import Dynamic from "../components/Dynamic/dynamic";
import SharedDynamic from "@/components/Test/test";

export const getStaticProps = async () => {
  return {
    props: {
      renderedAt: new Date().toISOString(),
    },
  };
};

const Index = ({ renderedAt }) => {
  return (
    <>
      <Head>
        <title>Hello world!</title>
      </Head>
      <A />
      <SharedDynamic initialCount={0} />
      <Dynamic initialCount={12} />
      <div class={styles.root}>Hello world! Rendered at {renderedAt}</div>
    </>
  );
};

export default Index;
