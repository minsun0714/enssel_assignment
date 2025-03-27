import { ButtonList } from "@/components/User/ButtonList";
import { FilterArea } from "@/components/User/FilterArea";
import GroupByTable from "@/components/User/GroupByTable";
import UserTable from "@/components/User/UserTable";
import { FilterProvider } from "@/provider/User/FilterProvider";
import { SelectedRowDataProvider } from "@/provider/User/SelectedRowDataProvider";
import { UserTableDataProvider } from "@/provider/User/UserTableDataProvider";

export const UserPage = () => {
  return (
    <div>
      <section>
        <FilterProvider>
          <UserTableDataProvider>
            <SelectedRowDataProvider>
              <ButtonList />
              <FilterArea />
              <GroupByTable />
              <UserTable />
            </SelectedRowDataProvider>
          </UserTableDataProvider>
        </FilterProvider>
      </section>
    </div>
  );
};
