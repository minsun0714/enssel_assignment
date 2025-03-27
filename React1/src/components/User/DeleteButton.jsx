import { useSelectedRowDataContext } from "@/provider/User/SelectedRowDataProvider";
import { useTableDataContext } from "@/provider/User/UserTableDataProvider";
import React from "react";
import axios from "axios";

const deleteUser = async (deletedUserData, handleFetchData) => {
  if (!deletedUserData) {
    alert("선택된 행이 없습니다.");
    return;
  }
  try {
    await axios.post(
      "http://localhost:12400/user/bi/user/delete",
      deletedUserData
    );
    alert("유저가 성공적으로 삭제되었습니다");
    await handleFetchData();
  } catch (error) {
    alert(error.message);
  }
};

export const DeleteButton = () => {
  const { selectedRowData } = useSelectedRowDataContext();
  const { handleFetchData } = useTableDataContext();
  return (
    <button onClick={() => deleteUser(selectedRowData, handleFetchData)}>
      삭제
    </button>
  );
};

export default DeleteButton;
