import React, { createContext, useState, useContext } from "react";

const defaultCondition = {
  userId: "",
  username: "",
  regiUser: "",
  updaUser: "",
  regiDtFrom: "",
  regiDtTo: "",
  updaDtFrom: "",
  updaDtTo: "",
};

const FilterContext = createContext(null);
export const FilterProvider = ({ children }) => {
  const [filterCondition, setFilterCondition] = useState(defaultCondition);

  return (
    <FilterContext.Provider value={{ filterCondition, setFilterCondition }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("useFilterContext must be used within a FilterProvider");
  return context;
};
