import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import axios from "axios";
import { useTableDataContext } from "@/provider/Menu/MenuTableDataProvider";

const regiMenu = async (newMenu, handleFetchData) => {
  console.log(newMenu);
  try {
    await axios.post("http://localhost:12400/menu/bi/menu/regi", newMenu);
    alert("새로운 메뉴를 추가하였습니다");
    await handleFetchData();
  } catch (error) {
    alert(error.message);
  }
};

export const RegisterButton = () => {
  const [newMenu, setNewMenu] = useState();
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
            <label htmlFor="registeredUser">유저 아이디</label>
            <input
              id="registeredUser"
              onChange={(e) =>
                setNewMenu({
                  ...newMenu,
                  registeredUser: e.currentTarget.value,
                })
              }
            />
          </fieldset>
          <fieldset>
            <label htmlFor="menuname">메뉴 이름</label>
            <input
              id="menuname"
              onChange={(e) =>
                setNewMenu({ ...newMenu, menuname: e.currentTarget.value })
              }
            />
          </fieldset>
          <fieldset>
            <label htmlFor="upperMenuId">상위 메뉴 아이디</label>
            <input
              id="upperMenuId"
              onChange={(e) =>
                setNewMenu({ ...newMenu, upperMenuId: e.currentTarget.value })
              }
            />
          </fieldset>
          <fieldset>
            <label htmlFor="url">URL</label>
            <input
              id="url"
              onChange={(e) =>
                setNewMenu({ ...newMenu, url: e.currentTarget.value })
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
              <button onClick={() => regiMenu(newMenu, handleFetchData)}>
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
