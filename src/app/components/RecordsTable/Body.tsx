"use client";

import { RecordsTableProps } from "./RecordsTable";

export const Body = ({ records, headings }: RecordsTableProps) => {
    return <>
        {
            records?.map((record, index) => {
                return (
                    <tr key={index} className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                        {
                            headings.map((heading, index) => {
                                const { name } = heading;
                                const keyValue = record[name];
                                const value = Array.isArray(keyValue) ? JSON.stringify(keyValue) : keyValue;
                                return (
                                    <td key={index} className="whitespace-nowrap px-6 py-4">
                                        {value}
                                    </td>
                                )
                            })
                        }
                    </tr>
                )
            })
        }</>
}

