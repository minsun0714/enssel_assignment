import React, { createContext, useState, useContext } from "react";

const SelectedRowDataContext = createContext(null);
export const SelectedRowDataProvider = ({ children }) => {
  const [selectedRowData, setSelectedRowData] = useState(null);

  return (
    <SelectedRowDataContext.Provider
      value={{
        selectedRowData,
        setSelectedRowData,
      }}
    >
      {children}
    </SelectedRowDataContext.Provider>
  );
};

export const useSelectedRowDataContext = () => {
  const context = useContext(SelectedRowDataContext);
  if (!context)
    throw new Error(
      "useSelectedRowDataContext must be used within a SelectedRowDataContextProvider"
    );
  return context;
};
