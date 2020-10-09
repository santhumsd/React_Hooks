import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
export const countContext=React.createContext()
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function UseReducerUseContext() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <div>
        parent count-{count}
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
    <countContext.Provider value={{dispatch,count}}>
    <ComponentA/>
    </countContext.Provider>
    </div>
  );
}

export default UseReducerUseContext;
