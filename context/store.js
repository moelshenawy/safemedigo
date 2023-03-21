import { createContext, useEffect, useState } from "react";

export let appContext = createContext();

export default function CounterContextProvider(props) {
  const [count, setCount] = useState(0);

  return (
    <appContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
}
