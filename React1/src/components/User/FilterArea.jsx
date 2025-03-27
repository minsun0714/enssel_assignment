import { useFilterContext } from "@/provider/User/FilterProvider";
import React from "react";

export const FilterArea = () => {
  const { filterCondition, setFilterCondition } = useFilterContext();

  return (
    <section>
      <label>이름</label>
      <input
        type="text"
        onChange={(e) =>
          setFilterCondition({
            ...filterCondition,
            username: e.currentTarget.value,
          })
        }
      />
      <label>아이디</label>
      <input
        type="text"
        onChange={(e) =>
          setFilterCondition({
            ...filterCondition,
            userId: e.currentTarget.value,
          })
        }
      />
      <label>등록아이디</label>
      <input
        type="text"
        onChange={(e) =>
          setFilterCondition({
            ...filterCondition,
            regiUser: e.currentTarget.value,
          })
        }
      />
      <label>수정아이디</label>
      <input
        type="text"
        onChange={(e) =>
          setFilterCondition({
            ...filterCondition,
            updaUser: e.currentTarget.value,
          })
        }
      />
      <div>
        <label>등록일자</label>
        <input
          type="date"
          onChange={(e) =>
            setFilterCondition({
              ...filterCondition,
              regiDtFrom: e.currentTarget.value,
            })
          }
        />
        ~
        <input
          type="date"
          onChange={(e) =>
            setFilterCondition({
              ...filterCondition,
              regiDtTo: e.currentTarget.value,
            })
          }
        />
      </div>
      <div>
        <label>수정일자</label>
        <input
          type="date"
          onChange={(e) =>
            setFilterCondition({
              ...filterCondition,
              updaDtFrom: e.currentTarget.value,
            })
          }
        />
        ~
        <input
          type="date"
          onChange={(e) =>
            setFilterCondition({
              ...filterCondition,
              updaDtTo: e.currentTarget.value,
            })
          }
        />
      </div>
    </section>
  );
};

export default FilterArea;
