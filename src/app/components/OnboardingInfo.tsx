import { copyToClipboard } from "@/lib/copyToClipboard";
import Link from "next/link";

interface OnboardingInfoProps {
    handleSkip: (e: any) => void;
    token: string;
}

export const OnboardingInfo = ({ handleSkip, token }: OnboardingInfoProps) => {

    const handleButtonClick = () => {
        copyToClipboard(token);
    };

    return (
        <div className="lg:flex h-[348px] mb-10">

            <div className="bg-[#FAFAFA]  overflow-y-hidden">
                <div className=" p-[24px] ">
                    <h4 className="text-lg font-[700 ]  text">Welcome to NoBox </h4>
                    <p className="text-[#496080] text-[16px] w-[300px]">
                        Set up your IDE with your Forever token in 3 easy steps...
                    </p>
                </div>
                <div className="welcome-bg w-full opacity-40"></div>
            </div>

            <div className="bg-white p-4 flex-1">

                <ul className="md:flex md:flex-col divide-[#DFE5EC]">
                    <li className="pb-5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex gap-3 items-center">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    fill="none"
                                >
                                    <path
                                        fill="#D4D4D4"
                                        d="M9 .667A8.336 8.336 0 0 0 .667 9c0 4.6 3.733 8.333 8.333 8.333S17.334 13.6 17.334 9 13.6.667 9 .667Zm-1.666 12.5L3.167 9l1.175-1.175 2.992 2.983 6.325-6.325 1.175 1.184-7.5 7.5Z"
                                    />
                                </svg>
                            </div>

                            <div className="">
                                <h6 className="font-[700] text-[18px] tracking-[-0.01em] text-[#24242E]">
                                    Install Nobox
                                </h6>
                                <p className="text-[#515478] tracking-[-0.01em] text-[14px]">
                                    Use the code to install NoBox on your IDE
                                </p>
                            </div>
                        </div>
                        <code className="border border-secondary  text-[14px] text-secondary  px-4 py-2">
                            <code className="font-[700]"> npm</code> install nobox-client
                            --save
                        </code>
                    </li>

                    <div className="border-b-[0.5px] border-[#DFE5EC] w-full "></div>

                    <li className="py-5  flex flex-col md:flex-row  justify-between items-center gap-6">
                        <div className="flex gap-3 items-center">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    fill="none"
                                >
                                    <path
                                        fill="#D4D4D4"
                                        d="M9 .667A8.336 8.336 0 0 0 .667 9c0 4.6 3.733 8.333 8.333 8.333S17.334 13.6 17.334 9 13.6.667 9 .667Zm-1.666 12.5L3.167 9l1.175-1.175 2.992 2.983 6.325-6.325 1.175 1.184-7.5 7.5Z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h6 className="font-[700] text-[18px] tracking-[-0.01em] text-[#24242E]">
                                    Read the docs
                                </h6>
                                <p className="text-[#515478] tracking-[-0.01em] text-[14px]">
                                    Learn how to install NoBox instantly.{" "}
                                </p>
                            </div>
                        </div>
                        <Link
                            href="https://docs.nobox.cloud"
                            className="border border-secondary text-secondary text-[14px] font-[500] px-[32px] py-[12px]"
                            target="_blank"
                        >
                            Read the docs
                        </Link>
                    </li>

                    <div className="border-b-[0.5px] border-[#DFE5EC] w-full "></div>

                    <li className="py-5  flex flex-col md:flex-row  justify-between items-center gap-6">
                        <div className="flex gap-3 items-center">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    fill="none"
                                >
                                    <path
                                        fill="#D4D4D4"
                                        d="M9 .667A8.336 8.336 0 0 0 .667 9c0 4.6 3.733 8.333 8.333 8.333S17.334 13.6 17.334 9 13.6.667 9 .667Zm-1.666 12.5L3.167 9l1.175-1.175 2.992 2.983 6.325-6.325 1.175 1.184-7.5 7.5Z"
                                    />
                                </svg>
                            </div>
                            <div className="">
                                <h6 className="font-[700] text-[18px] tracking-[-0.01em] text-[#24242E]">
                                    Copy Forever Token
                                </h6>
                                <p className="text-[#515478] tracking-[-0.01em] text-[14px]">
                                    You need this code to use NoBox
                                </p>
                            </div>
                        </div>
                        <button onClick={handleButtonClick} className="border border-secondary text-secondary text-[14px] px-[32px] py-[12px] font-[500]">
                            Copy token
                        </button>
                    </li>
                </ul>

                <div className="flex justify-end text-sm font-medium">
                    <button
                        onClick={handleSkip}
                        className="text-secondary text-[14px] font-[700]"
                    >
                        Skip for later
                    </button>
                </div>
            </div>
        </div>
    )
}