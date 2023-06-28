"use client";
import RecordTableBody from "@/app/components/tables/RecordTableBody";
import RecordTableHead from "@/app/components/tables/RecordTableHead";

interface RecordsTableProps {
    headings: { name: string }[];
    records?: any[];
};

const RecordsTable = (
    { headings, records }: RecordsTableProps
) => {
    return (
        <table className="table-auto">
            <thead className="h-[40px] border bg-tableHeadBgColor">
                <RecordTableHead headings={headings} />
            </thead>
            <tbody className="">
                {
                    records?.map((record, index) => {
                        return (
                            <RecordTableBody key={index} headings={headings} record={record} />
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default RecordsTable;
