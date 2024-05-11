"use client";
import { Body } from "./Body";
import { Headings } from "./Headings";


export interface RecordsTableProps {
    headings: { name: string }[];
    records?: any[];
    handleDeleteRecord: (recordId: string) => Promise<void>;
};

const RecordsTable = (
    { headings, records, handleDeleteRecord }: RecordsTableProps
) => {

    const updatedHeadings = [
        { name: "Actions" },
        { name: "id" },
        ...headings,
        { name: "createdAt" },
        { name: "updatedAt" }
    ];

    return (
        <div className="flex flex-col overflow-x-auto">
            <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-x-auto overflow-y-auto" style={{ height: "700px" }}>
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr className="fixed-header">
                                    <Headings headings={updatedHeadings} />
                                </tr>
                            </thead>
                            <tbody>
                                <Body headings={updatedHeadings} records={records} handleDeleteRecord={handleDeleteRecord} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RecordsTable;
