import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router";

export const Layout = () => {
  const [menuTableData, setMenuTableData] = useState();

  useEffect(() => {
    const getMenuTableData = async () => {
      const response = await axios.get(
        "http://localhost:12400/menu/bi/menu/table"
      );
      setMenuTableData(response.data);
    };
    getMenuTableData();
  }, []);

  return (
    <div id="layout">
      <nav>
        <ul>
          {menuTableData?.map((menu) => {
            return (
              <li key={menu.menuId}>
                <NavLink to={menu.url}>{menu.menuname}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
