import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const MenuTableDataContext = createContext(null);
export const MenuTableDataProvider = ({ children }) => {
  const [menuTableData, setMenuTableData] = useState(null);

  const getMenuTableData = async () => {
    const response = await axios.get(
      "http://localhost:12400/menu/bi/menu/table"
    );
    setMenuTableData(response.data);
  };

  const handleFetchData = () => {
    getMenuTableData();
  };

  return (
    <MenuTableDataContext.Provider
      value={{
        handleFetchData,
        menuTableData,
      }}
    >
      {children}
    </MenuTableDataContext.Provider>
  );
};

export const useTableDataContext = () => {
  const context = useContext(MenuTableDataContext);
  if (!context)
    throw new Error(
      "useTableDataContext must be used within a MenuTableDataProvider"
    );
  return context;
};
