import { createContext, useContext, useReducer } from "react";
import { reducer } from "../Reducer/reducer";

const ReducerContext = createContext();

const ReducerProvider = ({ children }) => {
  const [
    {  labels,  priority, searchTerm, timeSort },
    dispatch,
  ] = useReducer(reducer, {
    labels: [],
    priority: [],
    searchTerm: "",
    timeSort: null,
  });

  return (
    <ReducerContext.Provider
      value={{
        labels,
        priority,
        searchTerm,
        timeSort,
        dispatch,
      }}
    >
      {children}
    </ReducerContext.Provider>
  );
};

const useReducerContext = () => useContext(ReducerContext);

export { useReducerContext, ReducerProvider };