import React from "react";

const Helper = (props: any) => {
  const { actions } = props;
  return (
    <ul>
      {actions.map((action: any) => (
        <li>{action}</li>
      ))}
    </ul>
  );
};

export default Helper;
