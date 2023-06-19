import React from "react";

interface Heading {
  name: string;
}

interface RecordTableHeadProps {
  headings: Heading[];
}

const RecordTableHead = (args: RecordTableHeadProps) => {
  const { headings } = args;

  return (
    <tr>
      {headings.map((heading, index) => {
        const { name } = heading;
        return (
          <th
            key={index}
            scope="col"
            className="w-[144px] text-[14px] font-[500] text-end pr-[24px] border-tableBorderColor border-r-[1px]  text-[#515478]"
          >
            {name}
          </th>)
      })
      }
    </tr >
  );
};

export default RecordTableHead;
