import React from 'react'

const SignUpsTableBody = () => {
  return (
    <tr className="border-[#E6E8F9] border h-[48px] bg-white">
      <td className="pl-[14px] border-tableBorderColor  border-r-[1px]">
        <input
          type="checkbox"
          // checked={allRowsChecked}
          // onChange={handleSelectAll}
          className="w-[16px] h-[16px] focus:ring-0 text-checkboxText mr-[10px] rounded-[4px]  border-[#B0B2C9] bg-checkboxBg "
        />
      </td>
      <td className="text-[14px] border-tableBorderColor  border-r-[1px] font-[600] text-[#24242E] tracking-[-0.015em] text-end pr-[10px]">
        2 fields
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
      <td className="text-[14px]  font-[500] text-end border-tableBorderColor  border-r-[1px] text-[#24242E] tracking-[-0.015em] pr-[24px]"></td>
      <td className=" ">
        <div className="flex items-center justify-center my-auto  h-[24px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={13}
            height={4}
            fill="none"
          >
            <path
              fill="#515478"
              d="M1.833.667C1.1.667.5 1.267.5 2s.6 1.333 1.333 1.333c.734 0 1.334-.6 1.334-1.333S2.567.667 1.833.667Zm9.334 0c-.734 0-1.334.6-1.334 1.333s.6 1.333 1.334 1.333c.733 0 1.333-.6 1.333-1.333S11.9.667 11.167.667ZM6.5.667c-.733 0-1.333.6-1.333 1.333s.6 1.333 1.333 1.333S7.833 2.733 7.833 2 7.233.667 6.5.667Z"
            />
          </svg>
        </div>
      </td>
    </tr>
  );
}

export default SignUpsTableBody
