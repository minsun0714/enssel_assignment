import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import axios from "axios";
import { useTableDataContext } from "@/provider/User/UserTableDataProvider";

const regiUser = async (newUser, handleFetchData) => {
  try {
    await axios.post("http://localhost:12400/user/bi/user/regiUser", newUser);
    alert("새로운 유저 정보를 추가하였습니다");
    await handleFetchData();
  } catch (error) {
    alert(error.message);
  }
};

export const RegisterButton = () => {
  const [newUser, setNewUser] = useState();
  const { handleFetchData } = useTableDataContext();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>등록</button>
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
          <Dialog.Title className="DialogTitle">사용자 등록</Dialog.Title>
          <fieldset>
            <label htmlFor="username">등록 유저</label>
            <input
              id="username"
              onChange={(e) =>
                setNewUser({ ...newUser, username: e.currentTarget.value })
              }
            />
          </fieldset>
          <fieldset>
            <label htmlFor="userId">아이디</label>
            <input
              id="userId"
              onChange={(e) =>
                setNewUser({ ...newUser, userId: e.currentTarget.value })
              }
            />
          </fieldset>
          <fieldset>
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.currentTarget.value })
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
              <button onClick={() => regiUser(newUser, handleFetchData)}>
                확인
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default RegisterButton;
