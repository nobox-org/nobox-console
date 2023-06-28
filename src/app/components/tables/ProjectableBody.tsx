import React from 'react'

const ProjectableBody = () => {
  return (
    <tr className="border-[#E6E8F9] border h-[48px] bg-white">
      <td className="pl-[10px] w-[32px] border-tableBorderColor  border-r-[1px]">
        <input
          type="checkbox"
          // checked={allRowsChecked}
          // onChange={handleSelectAll}
          className="w-[16px] h-[16px] focus:ring-0 text-checkboxText mr-[10px] rounded-[4px]  border-[#B0B2C9] bg-checkboxBg "
        />
      </td>
      <td className="text-[14px] pl-[14px] w-[319px] border-tableBorderColor  border-r-[1px] font-[500] text-[#24242E] tracking-[-0.015em] l-[10px]">
        NoBox Codebase
      </td>
      <td className="text-[14px] whitespace-nowrap max-w-[324px] text-ellipsis overflow-hidden px-[24px] font-[500] text-left border-tableBorderColor  border-r-[1px] text-[#24242E] tracking-[-0.015em] pr-[24px]">
        This where everything in the codebase happens. Until we decide a new
        method later{" "}
      </td>
      <td className="text-[14px] font-[500] pl-[24px] border-tableBorderColor  border-r-[1px] text-[#24242E] tracking-[-0.015em]">
        /noBox-repo-codebase
      </td>
      <td className="text-[14px] pl-[24px] w-[144px] font-[500]  border-tableBorderColor  border-r-[1px] text-[#24242E] tracking-[-0.015em] ">
        14th Feb. 2023
      </td>

      <td className="pl-[9.5px] ">
        <div className="flex items-center justify-center my-auto w-[63px] h-[24px] gap-[4px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="none"
          >
            <path
              stroke="#556DFF"
              strokeWidth={1.5}
              d="M10 3.333A1.886 1.886 0 1 1 12.667 6l-6.748 6.748a2 2 0 0 1-1.414.585H2.666v-1.838a2 2 0 0 1 .586-1.414L10 3.333Z"
              clipRule="evenodd"
            />
            <path stroke="#556DFF" strokeWidth={1.5} d="M9.333 4 12 6.667" />
          </svg>
          <span className="text-[14px]  font-[500] text-[#556DFF]">Edit</span>
        </div>
      </td>
    </tr>
  );
}

export default ProjectableBody
