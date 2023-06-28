import React from 'react'

const ProjectTableHead = () => {
  return (
    <tr className="w-full">
      <th className="pl-[10px] w-[32px] border-[#CACFF6] border-r-[1px]">
        <input
          type="checkbox"
          // checked={allRowsChecked}
          // onChange={handleSelectAll}
          className="w-[16px] h-[16px] focus:ring-0 text-checkboxText mr-[10px] rounded-[4px]  border-[#B0B2C9]  "
        />
      </th>
      <th className="flex gap-[7px] items-center h-[40px]  w-full text-start  border-tableBorderColor border-r-[1px] pl-[10px] text-[14px] font-[500] text-[#515478]">
        <span className=" "> Name</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={14}
          height={14}
          fill="none"
        >
          <g clipPath="url(#a)">
            <path
              fill="#556DFF"
              d="m3 8 3.773 4.312a.8.8 0 0 0 1.204 0L11.75 8"
            />
            <path
              fill="#737373"
              d="M11.75 5 7.977.688a.8.8 0 0 0-1.204 0L3 5"
              opacity={0.3}
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h14v14H0z" />
            </clipPath>
          </defs>
        </svg>
      </th>
      <th
        scope="col"
        className="w-[372px] text-[14px] text-left font-[500] pl-[24px] border-tableBorderColor border-r-[1px]  text-[#515478]"
      >
        Description
      </th>
      <th
        scope="col"
        className="w-[248px] text-[14px] text-left pl-[24px] border-tableBorderColor border-r-[1px] font-[500] text-[#515478]"
      >
        Slug
      </th>
      <th
        scope="col"
        className="flex gap-[7px] items-center h-[40px] w-full text-[14px] pl-[24px] border-tableBorderColor border-r-[1px] font-[500] text-[#515478]"
      >
        <span>Date</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={14}
          height={14}
          fill="none"
        >
          <g clipPath="url(#a)">
            <path
              fill="#556DFF"
              d="m3 8 3.773 4.312a.8.8 0 0 0 1.204 0L11.75 8"
            />
            <path
              fill="#737373"
              d="M11.75 5 7.977.688a.8.8 0 0 0-1.204 0L3 5"
              opacity={0.3}
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h14v14H0z" />
            </clipPath>
          </defs>
        </svg>
      </th>
      <th
        scope="col"
        className=" w-[96px] text-[14px] text-end pr-[24px] border-solid border-tableBorderColor border-r-[1px] font-[500] text-[#515478]"
      >
        Actions
      </th>
    </tr>
  );
}

export default ProjectTableHead
