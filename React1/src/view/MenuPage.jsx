import { ButtonList } from "@/components/Menu/ButtonList";
import MenuTable from "@/components/Menu/MenuTable";
import { MenuTableDataProvider } from "@/provider/Menu/MenuTableDataProvider";
import { SelectedRowDataProvider } from "@/provider/Menu/SelectedRowDataProvider";

export const MenuPage = () => {
  return (
    <div>
      <section>
        <SelectedRowDataProvider>
          <MenuTableDataProvider>
            <ButtonList />
            <MenuTable />
          </MenuTableDataProvider>
        </SelectedRowDataProvider>
      </section>
    </div>
  );
};
