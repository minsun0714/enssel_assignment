import { useSelectedRowDataContext } from "@/provider/Menu/SelectedRowDataProvider";
import { useTableDataContext } from "@/provider/Menu/MenuTableDataProvider";
import { TreeList } from "devextreme-react/tree-list";
import React from "react";
const MenuTable = () => {
  const { menuTableData } = useTableDataContext();
  const { setSelectedRowData } = useSelectedRowDataContext();

  return (
    <div>
      <TreeList
        dataSource={menuTableData}
        keyExpr="menuId"
        parentIdExpr="upperMenuId"
        showBorders={true}
        onRowClick={(e) => setSelectedRowData(e.data)}
        selection={{ mode: "single" }}
        autoExpandAll={true}
      />
    </div>
  );
};

export default MenuTable;
