"use client";
import RecordsTable from "@/app/components/recordsTable/RecordsTable";
import RecordsGrid from "@/app/components/RecordsGrid";

type ViewMode = "table" | "grid"

interface RecordsDisplayProps {
    viewMode: ViewMode;
    headings: { name: string }[];
    records: any[];
}

const RecordsDisplay = ({
    viewMode,
    headings,
    records
}: RecordsDisplayProps) => {

    if (viewMode === "table") {
        return <RecordsTable headings={headings} records={records} />;
    }

    return <RecordsGrid />;

};

export default RecordsDisplay;
