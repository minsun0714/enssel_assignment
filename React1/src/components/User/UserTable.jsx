import { useSelectedRowDataContext } from "@/provider/User/SelectedRowDataProvider";
import { useTableDataContext } from "@/provider/User/UserTableDataProvider";
import DataGrid from "devextreme-react/data-grid";
import React from "react";
const UserTable = () => {
  const { userTableData } = useTableDataContext();
  const { setSelectedRowData } = useSelectedRowDataContext();

  return (
    <div>
      <DataGrid
        dataSource={userTableData}
        keyExpr="userId"
        showBorders={true}
        onRowClick={(e) => setSelectedRowData(e.data)}
        selection={{ mode: "single" }}
      />
    </div>
  );
};

export default UserTable;
