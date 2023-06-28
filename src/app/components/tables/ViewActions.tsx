"use client";

type ViewMode = "table" | "grid"


const ViewAction = (
    { toggleViewMode }: {
        toggleViewMode: (viewMode: ViewMode) => void;
    }
) => {
    return (
        <div className="flex space-x-6 items-center">
            <div className="flex space-x-5">
                <div className="flex space-x-2 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="none"
                    >
                        <path
                            stroke="#667085"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit={10}
                            d="M3.6 1.4h8.8c.733 0 1.333.6 1.333 1.333V4.2c0 .533-.333 1.2-.666 1.533L10.2 8.267c-.4.333-.667 1-.667 1.533v2.867c0 .4-.266.933-.6 1.133L8 14.4c-.867.533-2.067-.067-2.067-1.133V9.733c0-.466-.266-1.066-.533-1.4L2.867 5.667c-.334-.334-.6-.934-.6-1.334V2.8c0-.8.6-1.4 1.333-1.4ZM7.287 1.4 4 6.667"
                        />
                    </svg>
                    <p className="text-[14px] text-[#667085] font-[500]">Filter</p>
                </div>
                <div className="flex space-x-2 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="none"
                    >
                        <path
                            stroke="#667085"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.667}
                            d="M5 10h10M2.5 5h15m-10 10h5"
                        />
                    </svg>
                    <p className="text-[14px] text-[#667085] font-[500]">Sort</p>
                </div>
            </div>
            <div className="flex space-x-3 items-center">
                <div
                    className="cursor-pointer"
                    onClick={() => toggleViewMode("grid")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="none"
                    >
                        <path
                            stroke="#98A2B3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.667 5.68V2.653c0-.94-.427-1.32-1.487-1.32h-2.693c-1.06 0-1.487.38-1.487 1.32v3.02c0 .947.427 1.32 1.487 1.32h2.693c1.06.007 1.487-.373 1.487-1.313ZM14.667 13.18v-2.693C14.667 9.427 14.24 9 13.18 9h-2.693C9.427 9 9 9.427 9 10.487v2.693c0 1.06.427 1.487 1.487 1.487h2.693c1.06 0 1.487-.427 1.487-1.487ZM7 5.68V2.653c0-.94-.427-1.32-1.487-1.32H2.82c-1.06 0-1.487.38-1.487 1.32v3.02c0 .947.427 1.32 1.487 1.32h2.693C6.573 7 7 6.62 7 5.68ZM7 13.18v-2.693C7 9.427 6.573 9 5.513 9H2.82c-1.06 0-1.487.427-1.487 1.487v2.693c0 1.06.427 1.487 1.487 1.487h2.693C6.573 14.667 7 14.24 7 13.18Z"
                        />
                    </svg>
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() => toggleViewMode("table")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="none"
                    >
                        <path
                            stroke="#556DFF"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.667}
                            d="M6.667 5H17.5M6.667 10H17.5M6.667 15H17.5M2.5 5h.008M2.5 10h.008M2.5 15h.008"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ViewAction;
