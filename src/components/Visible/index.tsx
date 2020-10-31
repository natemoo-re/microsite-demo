import React, { FC } from "react";
import { withHydrate } from "microsite/hydrate";
import Counter from "../Counter";

import css from "./index.module.css";

const Visible: FC<any> = (props: any) => {
  let message = "Hydrated when visible";
  if (Object.keys(props).length > 0) message += " (with props)";

  return (
    <section class={css.visible}>
      <Counter {...props} />
      <p>{message}</p>
    </section>
  );
};

export default withHydrate(Visible, { method: "visible" });
