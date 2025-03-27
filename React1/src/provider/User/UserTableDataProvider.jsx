import React, { createContext, useState, useContext } from "react";
import { useFilterContext } from "./FilterProvider";
import axios from "axios";

const UserTableDataContext = createContext(null);
export const UserTableDataProvider = ({ children }) => {
  const { filterCondition } = useFilterContext();
  const [groupByTableData, setGroupByTableData] = useState(null);
  const [userTableData, setUserTableData] = useState(null);

  const getGroupByTableData = async () => {
    const response = await axios.get(
      "http://localhost:12400/user/bi/user/select",
      { params: filterCondition }
    );
    setGroupByTableData(response.data);
  };

  const getUserTableData = async () => {
    const response = await axios.get(
      "http://localhost:12400/user/bi/user/table",
      { params: filterCondition }
    );
    setUserTableData(response.data);
  };

  const handleFetchData = () => {
    getGroupByTableData();
    getUserTableData();
  };

  return (
    <UserTableDataContext.Provider
      value={{
        handleFetchData,
        groupByTableData,
        userTableData,
      }}
    >
      {children}
    </UserTableDataContext.Provider>
  );
};

export const useTableDataContext = () => {
  const context = useContext(UserTableDataContext);
  if (!context)
    throw new Error(
      "useTableDataContext must be used within a UserTableDataProvider"
    );
  return context;
};
