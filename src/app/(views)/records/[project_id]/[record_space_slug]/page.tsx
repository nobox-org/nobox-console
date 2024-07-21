"use client";
import { useContext, useEffect, useState } from "react";
import RecordsDisplay from "@/app/components/RecordsDisplay";
import useRecordsCall from "@/lib/hooks/useRecordsCall";
import { FieldType } from "@/lib/types";
import { useRecordsBackgroundUpdate } from "@/lib/hooks/useRecordsBackgroundUpdate";
import { MainLoader } from "@/app/components/MainLoader";
import deleteRecords from "@/lib/calls/delete-record";
import Link from "next/link";
import { usePathname, } from "next/navigation";
import DataContext from "@/app/components/dataContext/DataContext";
import { convertStructureToHeadings } from "@/lib/utils";

const RecordsPage = ({
  params,
}: {
  params: { project_id: string; record_space_slug: string };
}) => {
  const [initiateFreshCall, setInitiateFreshCall] = useState(false);
  const [uniqueId, setUniqueId] = useState<string>("");

  const {
    allProjects,
  } = useContext(DataContext);



  const [headings, setHeadings] = useState<
    { name: string; type: FieldType; required: boolean }[]
  >([]);
  const [pageIsReady, setPageIsReady] = useState(false);

  const [records, setRecords] = useState<any[]>([]);

  useRecordsBackgroundUpdate({
    allProjects,
    projectId: params.project_id,
  });

  const {
    loading,
    recordSpaceStructure,
  } = useRecordsCall({
    projectId: params.project_id,
    recordSpaceSlug: params.record_space_slug,
    initiateFreshCall,
    uniqueId,
    setRecords
  });


  const { webhooks } = recordSpaceStructure as any;
  const path = usePathname();

  useEffect(() => {
    if (!loading) {
      const headings = convertStructureToHeadings((recordSpaceStructure as any).structure);
      setHeadings(headings);
      setPageIsReady(true);
    }
  }, [records, loading, recordSpaceStructure]);

  if (loading || !pageIsReady) {
    return <MainLoader />;
  }

  const handleDeleteRecord = async (recordId: string) => {
    try {
      await deleteRecords({
        recordSpaceSlug: params.record_space_slug,
        allProjects,
        projectId: params.project_id,
        recordId,
      });
      setInitiateFreshCall(true);
      setUniqueId(recordId);
    } catch (error) {
      console.log({ error });
    }
  };

  return allProjects.length > 0 ? (
    <>
      <div className="w-full sm:pr-[30px] sm:mx-auto bg-[#FAFAFA] overflow-x-auto h-full">
        <div className="my-3">
          <Link href={`${path}/new`} className="btn-primary small">
            New
          </Link>
        </div>
        <RecordsDisplay
          viewMode={"table"}
          headings={headings}
          records={records}
          handleDeleteRecord={handleDeleteRecord}
        />
        <div className="flex">
          <div className="py-[12px] sm:px-6 lg:px-8">
            {webhooks && (
              <ul>
                <h4>Available Webhooks</h4>
                {webhooks.onUpdateUrl && <li>{webhooks.onUpdateUrl}</li>}
                {webhooks.onInsertUrl && <li>{webhooks.onInsertUrl}</li>}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default RecordsPage;
