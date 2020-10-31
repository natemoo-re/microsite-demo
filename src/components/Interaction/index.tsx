import React, { FC } from "react";
import { withHydrate } from "microsite/hydrate";
import Counter from "../Counter";

import css from "./index.module.css";

const Interaction: FC<any> = (props: any) => {
  let message = "Hydrated on user interaction";
  if (Object.keys(props).length > 0) message += " (with props)";

  return (
    <section class={css.interaction}>
      <Counter {...props} />
      <p>{message}</p>
    </section>
  );
};

export default withHydrate(Interaction, { method: "interaction" });
