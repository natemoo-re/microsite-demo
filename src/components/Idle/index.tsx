import React, { FC } from "react";
import { withHydrate } from "microsite/hydrate";
import Counter from "../Counter";

import css from "./index.module.css";

const Idle: FC<any> = (props: any) => {
  return (
    <section class={css.idle}>
      <Counter {...props} />
      <p>Hydrated as soon as possible (on idle)</p>
    </section>
  );
};

export default withHydrate(Idle, { method: "idle" });
