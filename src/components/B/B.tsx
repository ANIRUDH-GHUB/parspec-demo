import React from "react";
import * as ReactKeyPress from "../ReactKeyPress/ReactKeyPress";

const B = (props: any) => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <ReactKeyPress.Item
      helpText={"Click A or Click shift s to toggle"}
      onTrigger={() => setToggle((toggle) => !toggle)}
    >
      <div className="box">B</div>
    </ReactKeyPress.Item>
  );
};

export default B;
