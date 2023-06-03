import React from 'react'

const RecordTableBody = () => {
  return (
    <tr className="border-[#E6E8F9] border h-[48px] bg-white">
      <td className="pl-[10px] border-tableBorderColor  border-r-[1px]">
        <input
          type="checkbox"
          // checked={allRowsChecked}
          // onChange={handleSelectAll}
          className="w-[16px] h-[16px] focus:ring-0 text-checkboxText mr-[10px] rounded-[4px]  border-[#B0B2C9] bg-checkboxBg "
        />
      </td>
      <td className="text-[14px] border-tableBorderColor  border-r-[1px] font-[600] text-[#24242E] tracking-[-0.015em] pl-[10px]">
        Sign-Ups
      </td>
      <td className="text-[14px]  font-[500] text-end border-tableBorderColor  border-r-[1px] text-[#24242E] tracking-[-0.015em] pr-[24px]">
        5.63 kb
      </td>
      <td className="text-[14px]  font-[500] text-end border-tableBorderColor  border-r-[1px] text-[#24242E] tracking-[-0.015em] pr-[24px]">
        3
      </td>
      <td className="text-[14px]  font-[500] text-end border-tableBorderColor  border-r-[1px] text-[#24242E] tracking-[-0.015em] pr-[24px]">
        102 B
      </td>
      <td className="text-[14px]  font-[500] text-end border-tableBorderColor  border-r-[1px] text-[#24242E] tracking-[-0.015em] pr-[24px]">
        1
      </td>
      <td className="text-[14px]  font-[500] text-end border-tableBorderColor  border-r-[1px] text-[#24242E] tracking-[-0.015em] pr-[24px]">
        35.1 kB
      </td>
      <td className="pl-[24px] ">
        <div className="flex items-center justify-center my-auto w-[63px] h-[24px] gap-[4px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={14}
            height={14}
            fill="none"
          >
            <path
              fill="#F04438"
              d="M3.666 1.667V.333h6.667v1.334h3.333V3h-1.333v10a.666.666 0 0 1-.667.667H2.333A.667.667 0 0 1 1.666 13V3H.333V1.667h3.333ZM3 3v9.333h8V3H3Zm2 2h1.333v5.333H5V5Zm2.666 0H9v5.333H7.666V5Z"
            />
          </svg>
          <span className="text-[14px]  font-[500] text-[#F04438]">Delete</span>
        </div>
      </td>
    </tr>
  );
}

export default RecordTableBody
