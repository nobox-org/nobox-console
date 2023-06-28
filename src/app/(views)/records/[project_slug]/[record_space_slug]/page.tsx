"use client";
import { useEffect, useState } from "react";
import RecordsDisplay from "@/app/components/RecordsDisplay";
import useRecordsCall from "@/lib/hooks/useRecordsCall";
import { Breadcrumb } from "@/app/components/BreadCrumb";

type ViewMode = "table" | "grid"

const Records = (
  { params }: { params: { project_slug: string, record_space_slug: string } }
) => {

  const [viewMode, setViewMode] = useState<ViewMode>("table");
  const [headings, setHeadings] = useState<{ name: string }[]>([])
  const [pageIsReady, setPageIsReady] = useState(false);

  const { data: records, loading, recordSpaceStructure } = useRecordsCall({
    projectSlug: params.project_slug,
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
      <div className="px-[24px] py-[16px] flex justify-between items-center border-[#E6E8F9] border-t-[1px] border-b-[1px] border-r-[0px] border-l-[0px]">
        <div className="flex h-[48px] pl-[17.25px] items-center space-x-2 ">
          <Breadcrumb path={[
            "Project",
            { name: params.project_slug, link: `/record-spaces/${params.project_slug}` },
            params.record_space_slug,
            "Records"
          ]} />
        </div>
      </div>
      <div className="w-full sm:p-[30px] sm:pr-[30px] sm:mx-auto bg-[#FAFAFA] overflow-x-auto">
        <RecordsDisplay viewMode={viewMode} headings={headings} records={records} />
      </div>
    </div>
  );
};

export default Records;
