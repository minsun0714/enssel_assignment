import { useTableDataContext } from "@/provider/User/UserTableDataProvider";
import React from "react";

const FetchButton = () => {
  const { handleFetchData } = useTableDataContext();

  return <button onClick={handleFetchData}>조회</button>;
};

export default FetchButton;
