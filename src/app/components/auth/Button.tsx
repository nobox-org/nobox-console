import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  text: string;
  route: string;
};

const Button = ({ text, route }: Props) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(route)}
      className="bg-transparent text-[#FFFFFF] w-[94px] h-[44px] rounded-[8px] text-sm md:text-base font-normal md:font-medium text-center"
    >
      {text}
    </button>
  );
};

export default Button;
