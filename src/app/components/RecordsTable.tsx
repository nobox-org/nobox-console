"use client";


interface RecordsTableProps {
    headings: { name: string }[];
    records?: any[];
};

const Headings = ({ headings }: Pick<RecordsTableProps, "headings">) => {
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

const Body = ({ records, headings }: RecordsTableProps) => {

    return <>
        {
            records?.map((record, index) => {
                return (
                    <tr key={index} className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                        {
                            headings.map((heading, index) => {
                                const { name } = heading;
                                return (
                                    <td key={index} className="whitespace-nowrap px-6 py-4">
                                        {record[name]}
                                    </td>
                                )
                            })
                        }
                    </tr>
                )
            })
        }</>
}


const RecordsTable = (
    { headings, records }: RecordsTableProps
) => {
    return (
        <div className="flex flex-col overflow-x-auto">
            <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <Headings headings={headings} />
                                </tr>
                            </thead>
                            <tbody>
                                <Body headings={headings} records={records} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RecordsTable;
