import { createContext, useContext, useState, useCallback } from "react";

const Context = createContext({});

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount((prevState) => prevState - 1);
  }, [count]);

  return (
    <Context.Provider value={{ count, increment, decrement }}>
      {children}
    </Context.Provider>
  );
};

export function useCount() {
  return useContext(Context);
}