"use client";

import { RecordsTableProps } from "./RecordsTable";

export const Headings = ({ headings }: Pick<RecordsTableProps, "headings">) => {
    return <>
        {headings.map((heading, index) => {
            const { name } = heading;
            return (
                <th
                    key={index}
                    scope="col" className="px-6 py-4"
                >
                    {name}
                </th>)
        })
        }
    </>
}