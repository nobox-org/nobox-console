"use client";
import { moveKeysToEnd } from "@/lib/gen";
import { Body } from "./Body";
import { Headings } from "./Headings";


export interface RecordsTableProps {
    headings: { name: string }[];
    records?: any[];
};



const RecordsTable = (
    { headings, records }: RecordsTableProps
) => {

    // Check if 'records' exists and has at least one entry
    const extractedHeadings = records?.[0]
        ?
        // If 'records' exists, proceed with the following steps:
        moveKeysToEnd(
            Object.keys(records?.[0]), // Extract keys from the first record
            ["createdAt", "updatedAt"] // Move these keys to the end of the list
        ).map(key => ({ name: key })) // Create an array of objects with each key as the 'name' property
        :
        // If 'records' doesn't exist or is an empty array, use the 'headings' array as is
        headings;


    return (
        <div className="flex flex-col overflow-x-auto">
            <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <Headings headings={extractedHeadings} />
                                </tr>
                            </thead>
                            <tbody>
                                <Body headings={extractedHeadings} records={records} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RecordsTable;
