import React from "react";
import SharedDynamic from "@/components/Test/test";
import Static from "@/components/static";
import styles from "./haha.module.css";

const Haha = () => {
  return (
    <>
      <Static />
      <SharedDynamic>Ahhh</SharedDynamic>
      <div class={styles.root}>Haha!</div>
    </>
  );
};

export default Haha;
