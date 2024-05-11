"use client";
import RecordsTable from "@/app/components/RecordsTable/RecordsTable";
import RecordsGrid from "@/app/components/RecordsGrid";

type ViewMode = "table" | "grid"

interface RecordsDisplayProps {
    viewMode: ViewMode;
    headings: { name: string }[];
    records: any[];
    handleDeleteRecord: (recordId: string) => Promise<void>
}

const RecordsDisplay = ({
    viewMode,
    headings,
    records,
    handleDeleteRecord
}: RecordsDisplayProps) => {

    if (viewMode === "table") {
        return <RecordsTable
            headings={headings}
            records={records}
            handleDeleteRecord={(recordId: string) => handleDeleteRecord(recordId)}
        />;
    }

    return <RecordsGrid />;

};

export default RecordsDisplay;
