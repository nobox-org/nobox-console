"use client";
import { useEffect, useState } from "react";
import RecordsDisplay from "@/app/components/RecordsDisplay";
import useRecordsCall from "@/lib/hooks/useRecordsCall";

type ViewMode = "table" | "grid"

const Records = (
  { params }: { params: { project_id: string, record_space_slug: string } }
) => {

  const [viewMode, setViewMode] = useState<ViewMode>("table");
  const [headings, setHeadings] = useState<{ name: string }[]>([])
  const [pageIsReady, setPageIsReady] = useState(false);

  const { data: records, loading, recordSpaceStructure } = useRecordsCall({
    projectId: params.project_id,
    recordSpaceSlug: params.record_space_slug,
  })


  useEffect(() => {
    if (!loading) {
      const { structure } = recordSpaceStructure as any;
      const headings = Object.keys(structure).map((key) => {
        return { name: structure[key].name };
      });

      setHeadings(headings);
      setPageIsReady(true);
    }
  }, [records, loading, recordSpaceStructure])

  if (loading || !pageIsReady) {
    return (
      <main className="text-[#292D32] bg-[#ECEDF3] h-full p-[24px]">
        Loading
      </main>
    );
  }

  return (
    <div className="">
      <div className="w-full sm:pr-[30px] sm:mx-auto bg-[#FAFAFA] overflow-x-auto">
        <RecordsDisplay viewMode={viewMode} headings={headings} records={records} />
      </div>
    </div>
  );
};

export default Records;
