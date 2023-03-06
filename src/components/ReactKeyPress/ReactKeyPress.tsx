import React, { ReactElement } from "react";

interface ReactKeyPressProp {
  setActions: Function;
  actions: any;
  children: ReactElement[] | ReactElement;
}
declare global {
  interface Window {
    keypress: {
      Listener: any;
    };
  }
}

const KeyPressContext = React.createContext({
  setupKey: (keyCode: string, callback: Function)=>{},
  actions: {},
  addAction: (action: string)=>{},
});

const ReactKeyPress: React.FC<ReactKeyPressProp> = (props) => {
  const { children, setActions } = props;
  const [listener, setListener] = React.useState<any>();

  const addAction: Function = (action: any) => {
    setActions((actions: any) => [...actions, action]);
  };

  React.useEffect(() => {
    setListener(() => new window.keypress.Listener());
  }, []);

  const setupKey = (keyCombo: string, callback: Function) => {
    listener.simple_combo(keyCombo, callback);
  };
  return (
    <KeyPressContext.Provider
      value={{
        addAction: addAction as any,
        actions: setActions,
        setupKey: setupKey as any,
      }}
    >
      {children}
    </KeyPressContext.Provider>
  );
};

export const Item = (props: any) => {
  const { helpText, callback, children } = props;
  const context = React.useContext(KeyPressContext);
  React.useEffect(() => {
    context.addAction(helpText);
    context.setupKey('shift s', callback)
  }, []);

  return children;
};
export default ReactKeyPress;
