import { useTableDataContext } from "@/provider/User/UserTableDataProvider";
import DataGrid from "devextreme-react/data-grid";
import React from "react";

const GroupByTable = () => {
  const { groupByTableData } = useTableDataContext();
  return (
    <div>
      <DataGrid dataSource={groupByTableData} />
    </div>
  );
};

export default GroupByTable;
