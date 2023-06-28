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
    <tr className="items-center justify-center text-center">
      {headings.map((heading, index) => {
        const { name } = heading;
        return (
          <th
            key={index}
            scope="col"
            className="min-w-[200px] text-[14px] px-2 flex-nowrap text-center font-[500] pr-[24px] border-tableBorderColor border-r-[1px]  text-[#515478]"
          >
            {name}
          </th>)
      })
      }
    </tr >
  );
};

export default RecordTableHead;
