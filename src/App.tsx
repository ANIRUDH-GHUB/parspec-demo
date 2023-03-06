import "./App.css";
import React from "react";
import ReactKeyPress from "./components/ReactKeyPress/ReactKeyPress";
import A from "./components/A/A";
import Helper from "./components/Helper/Helper";
import B from "./components/B/B";

function App() {
  const [actions, setActions] = React.useState<any>();
  return (
    <ReactKeyPress setActions={setActions} actions={actions}>
      <A />
      <B />
      <Helper actions={actions} />
    </ReactKeyPress>
  );
}

export default App;
