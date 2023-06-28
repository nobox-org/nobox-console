import React from 'react';
interface RecordsTableBodyProps {
  headings: { name: string }[];
  record: any;
};


const RecordTableBody = ({
  headings,
  record
}: RecordsTableBodyProps) => {

  return (
    <tr className="max-w-[1000px] border-[#E6E8F9] border px-5 flex-nowrap bg-white">
      {
        headings.map((heading, index) => {
          const { name } = heading;
          return (
            <td key={index} className="max-w-[1000px] px-5 text-center flex-nowrap text-[14px] border-tableBorderColor  border-r-[1px] font-[600] text-[#24242E]">
              {record[name]}
            </td>
          )
        })
      }
    </tr>
  );
}

export default RecordTableBody
