import React from "react";

interface RecordDataBoxProps {
  name: string;
  value: string;
}

const RecordDataBox: React.FC<RecordDataBoxProps> = ({ name, value }) => {
  return (
    <div className="pl-[16px]">
      <div className="flex gap-[4px]">
        <p className="text-[12px] font-[500] leading-[20px] text-[#24242E]">
          {name}
        </p>
        <p className="text-[12px] font-[400] leading-[20px] tracking-[-0.02em] text-[#667085]">
          {value}
        </p>
      </div>
    </div>
  );
};

export default RecordDataBox;
