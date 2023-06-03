import React from 'react'

const SignUpsTableHead = () => {
  return (
    <tr className="">
      <th className="pl-[10px] w-[40px] border-[#CACFF6] border-r-[1px]">
        <input
          type="checkbox"
          // checked={allRowsChecked}
          // onChange={handleSelectAll}
          className="w-[20px] h-[20px]   focus:ring-0 text-checkboxText mr-[10px] rounded-[4px]  border-[#B0B2C9] bg-checkboxBg "
        />
      </th>
      <th className=" w-[144px] text-end  border-tableBorderColor border-r-[1px] pr-[10px] text-[14px] font-[500] text-[#515478]">
        _id Object
      </th>
      <th
        scope="col"
        className="w-[144px] text-[14px] font-[500] text-end pr-[24px] border-tableBorderColor border-r-[1px]  text-[#515478]"
      >
        _id Object
      </th>
      <th
        scope="col"
        className="w-[144px] text-[14px] text-end pr-[24px] border-tableBorderColor border-r-[1px] font-[500] text-[#515478]"
      >
        _id Object
      </th>
      <th
        scope="col"
        className="w-[144px] text-[14px] text-end pr-[24px] border-tableBorderColor border-r-[1px] font-[500] text-[#515478]"
      >
        _id Object
      </th>
      <th
        scope="col"
        className=" w-[144px] text-[14px] text-end pr-[24px] border-solid border-tableBorderColor border-r-[1px] font-[500] text-[#515478]"
      >
        _id Object
      </th>
      <th
        scope="col"
        className=" w-[144px] text-[14px] text-end pr-[24px] border-solid border-tableBorderColor border-r-[1px] font-[500] text-[#515478]"
      ></th>
      <th
        scope="col"
        className=" w-[89px] text-[14px] text-end pr-[22.5px] font-[500] text-[#515478]"
      >
        Actions
      </th>
    </tr>
  );
}

export default SignUpsTableHead
