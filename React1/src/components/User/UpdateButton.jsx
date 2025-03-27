import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useSelectedRowDataContext } from "@/provider/User/SelectedRowDataProvider";
import axios from "axios";
import { useTableDataContext } from "@/provider/User/UserTableDataProvider";

const updaUser = async (updatedUser, handleFetchData) => {
  try {
    await axios.post("http://localhost:12400/user/bi/user/update", updatedUser);
    alert("유저 정보를 수정하였습니다");
    await handleFetchData();
  } catch (error) {
    alert(error.message);
  }
};

// selectedRowData가 없을 때 수정 버튼 클릭 불가해야함.
const UpdateButton = () => {
  const { selectedRowData } = useSelectedRowDataContext();
  const { handleFetchData } = useTableDataContext();
  const [updatedUser, setUpdatedUser] = useState(selectedRowData);

  return (
    <Dialog.Root
      onOpenChange={(open) => {
        if (open) {
          setUpdatedUser(selectedRowData);
        }
      }}
    >
      <Dialog.Trigger asChild>
        <button
          onClick={(e) => {
            if (!selectedRowData) {
              alert("선택된 행이 없습니다.");
              e.preventDefault();
            }
          }}
        >
          수정
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className="DialogOverlay"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            position: "fixed",
            inset: 0,
            zIndex: 999,
          }}
        />
        <Dialog.Content
          className="DialogContent"
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "8px",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
          }}
        >
          <Dialog.Title>사용자 수정</Dialog.Title>
          <fieldset>
            <label htmlFor="username">이름</label>
            <input
              id="username"
              defaultValue={selectedRowData?.username}
              onChange={(e) =>
                setUpdatedUser({
                  ...updatedUser,
                  username: e.currentTarget.value,
                })
              }
            />
          </fieldset>
          <fieldset>
            <label htmlFor="userId">아이디</label>
            <input
              id="userId"
              defaultValue={selectedRowData?.userId}
              disabled
            />
          </fieldset>
          <fieldset>
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              defaultValue={selectedRowData?.password}
              onChange={(e) =>
                setUpdatedUser({
                  ...updatedUser,
                  password: e.currentTarget.value,
                })
              }
            />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button aria-label="Close">닫기</button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button onClick={() => updaUser(updatedUser, handleFetchData)}>
                확인
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default UpdateButton;
