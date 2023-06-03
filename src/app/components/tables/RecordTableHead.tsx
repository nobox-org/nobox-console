import React from "react";

const RecordTableHead: any = () => {
  return (
    <tr className="">
      <th className="pl-[10px] border-[#CACFF6] border-r-[1px]">
        <input
          type="checkbox"
          // checked={allRowsChecked}
          // onChange={handleSelectAll}
          className="w-[20px] h-[20px]   focus:ring-0 text-checkboxText mr-[10px] rounded-[4px]  border-[#B0B2C9] bg-checkboxBg "
        />
      </th>
      <th className=" w-[312px] text-start  border-tableBorderColor border-r-[1px] pl-[10px] text-[14px] font-[500] text-[#515478]">
        Record space
      </th>
      <th
        scope="col"
        className="w-[144px] text-[14px] font-[500] text-end pr-[24px] border-tableBorderColor border-r-[1px]  text-[#515478]"
      >
        Size
      </th>
      <th
        scope="col"
        className="w-[144px] text-[14px] text-end pr-[24px] border-tableBorderColor border-r-[1px] font-[500] text-[#515478]"
      >
        Documents
      </th>
      <th
        scope="col"
        className="w-[144px] text-[14px] text-end pr-[24px] border-tableBorderColor border-r-[1px] font-[500] text-[#515478]"
      >
        Avg. Size
      </th>
      <th
        scope="col"
        className=" w-[144px] text-[14px] text-end pr-[24px] border-solid border-tableBorderColor border-r-[1px] font-[500] text-[#515478]"
      >
        Indexes
      </th>
      <th
        scope="col"
        className=" w-[144px] text-[14px] text-end pr-[24px] border-solid border-tableBorderColor border-r-[1px] font-[500] text-[#515478]"
      >
        Index Size
      </th>
      <th
        scope="col"
        className=" w-[144px] text-[14px] text-start pl-[24px] font-[500] text-[#515478]"
      >
        Actions
      </th>
    </tr>
  );
};

export default RecordTableHead;
