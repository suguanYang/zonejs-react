import { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";

const Portal = () => {
  console.log("Portal", Zone.current);
  useEffect(() => {
    console.log("useEffect callback: ", Zone.current);
  }, []);

  return <div>Protal</div>;
};

const AsyncContext = (id) => {
  const ele = document.querySelector(id);
  const newAppLevelCtx = Zone.root.fork({
    name: "does not matter",
  });

  newAppLevelCtx.run(() => {
    const root = ReactDOM.createRoot(ele);
    setTimeout(() => {
        // after timeout, this render will trigger a new scheduler, thus the render phase will use this app level context
      root.render(<Portal />);
    }, 200);
  });

  return null;
};

export default AsyncContext;
