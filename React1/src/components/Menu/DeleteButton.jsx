import { useSelectedRowDataContext } from "@/provider/Menu/SelectedRowDataProvider";
import { useTableDataContext } from "@/provider/Menu/MenuTableDataProvider";
import React from "react";
import axios from "axios";

const deleteMenu = async (deletedMenuData, handleFetchData) => {
  if (!deletedMenuData) {
    alert("선택된 행이 없습니다.");
    return;
  }

  try {
    await axios.post("http://localhost:12400/menu/bi/menu/delete", null, {
      params: {
        menuId: deletedMenuData.menuId,
      },
    });
    alert("메뉴가 성공적으로 삭제되었습니다");
    await handleFetchData();
  } catch (error) {
    alert(error.message);
  }
};

export const DeleteButton = () => {
  const { selectedRowData } = useSelectedRowDataContext();
  const { handleFetchData } = useTableDataContext();
  return (
    <button onClick={() => deleteMenu(selectedRowData, handleFetchData)}>
      삭제
    </button>
  );
};

export default DeleteButton;
