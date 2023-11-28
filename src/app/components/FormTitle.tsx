"use client";
interface FormTitleProps {
    title: string;
    subTitle: string;
}

const FormTitle = ({ title, subTitle }: FormTitleProps) => {
    return (
        <div className="flex flex-col">
            <h3 className="text-[24px] h-[36px] w-[210px] font-[700] text-[#1C1B1B] tracking-[-0.02em]">
                {title}
            </h3>
            <p className="text-[#496080] text-[14px] font-[400] w-[298px] h-[24px]">
                {subTitle}
            </p>
        </div>
    );
};

export default FormTitle;
