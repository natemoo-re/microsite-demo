import React, { FC, useState } from "react";
import css from "./dynamic.module.css";
import { withHydrate } from "microsite/hydrate";

const Dynamic: FC<any> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div class={css.counter}>
      <p>{count}</p>
      <button onClick={() => setCount((v) => v + 1)}>+</button>
    </div>
  );
};

export default withHydrate(Dynamic);
