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
    <tr className="border-[#E6E8F9] border h-[48px] bg-white">
      {
        headings.map((heading, index) => {
          const { name } = heading;
          return (
            <td key={index} className="text-[14px] border-tableBorderColor  border-r-[1px] font-[600] text-[#24242E] tracking-[-0.015em] pl-[10px]">
              {record[name]}
            </td>
          )
        })
      }
    </tr>
  );
}

export default RecordTableBody
