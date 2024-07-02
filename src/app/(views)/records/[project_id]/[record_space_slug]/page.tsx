"use client";
import { useEffect, useState } from "react";
import RecordsDisplay from "@/app/components/RecordsDisplay";
import useRecordsCall from "@/lib/hooks/useRecordsCall";
import { FieldType } from "@/lib/types";
import useNoboxData from "@/lib/hooks/useNoboxData";
import submitRecords from "@/lib/calls/submit-records";
import Modal from "@/app/components/Modal";
import { useRecordsBackgroundUpdate } from "@/lib/hooks/useRecordsBackgroundUpdate";
import createUIIndication from "@/lib/createUIIndication";
import { MainLoader } from "@/app/components/MainLoader";
import deleteRecords from "@/lib/calls/delete-record";
import { RecordInputForm } from "@/app/components/RecordInputForm";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type ViewMode = "table" | "grid";

const Records = ({
  params,
}: {
  params: { project_id: string; record_space_slug: string };
}) => {
  const [initiateFreshCall, setInitiateFreshCall] = useState(false);
  const [uniqueId, setUniqueId] = useState<string>("");

  const { allProjects } = useNoboxData();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const submissionIndication = createUIIndication(setSubmitted);

  const [viewMode, setViewMode] = useState<ViewMode>("table");
  const [headings, setHeadings] = useState<
    { name: string; type: FieldType; required: boolean }[]
  >([]);
  const [pageIsReady, setPageIsReady] = useState(false);

  useRecordsBackgroundUpdate({
    allProjects,
    projectId: params.project_id,
  });

  const {
    data: records,
    loading,
    recordSpaceStructure,
  } = useRecordsCall({
    projectId: params.project_id,
    recordSpaceSlug: params.record_space_slug,
    initiateFreshCall,
    uniqueId,
  });

  const { webhooks } = recordSpaceStructure as any;
  const path = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (!loading) {
      const { structure } = recordSpaceStructure as any;

      const headings = Object.keys(structure).map((key) => {
        const eachStructure = structure[key];
        const { name, required } = eachStructure;
        const structureType = eachStructure.type.name;
        const type =
          structureType === "String"
            ? FieldType.String
            : structureType === "Boolean"
            ? FieldType.Boolean
            : structureType === "Array"
            ? FieldType.Array
            : FieldType.Number;
        return { name, type, required };
      });

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
      setSubmitted(true);
      setUniqueId(recordId);
      submissionIndication.startEnd({ delay: 2000 });
    } catch (error) {
      console.log({ error });
    }
  };

  const handleSubmitRecords = async (record: Record<string, any>) => {
    try {
      const responseRecord = await submitRecords({
        recordSpaceSlug: params.record_space_slug,
        allProjects,
        projectId: params.project_id,
        record,
      });
      setInitiateFreshCall(true);
      setSubmitted(true);
      setUniqueId(responseRecord.records[0].id);
      submissionIndication.startEnd({ delay: 2000 });
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
          {" "}
          <Link href={`${path}/settings/views`} className="btn-primary small">
            View settings
          </Link>
        </div>
        <RecordsDisplay
          viewMode={viewMode}
          headings={headings}
          records={records}
          handleDeleteRecord={handleDeleteRecord}
        />
        <div className="flex">
          {/* <div className="py-[12px] sm:px-6 lg:px-8">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
                setOpenModal(true)
              }}> Submit Record</button>
            </div> */}
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
      {/* <Modal
          isOpen={openModal}
          setIsOpen={setOpenModal}
          buttonText={'Copy Text'}
        >
          <RecordInputForm
            headings={headings}
            handleSubmitRecords={handleSubmitRecords}
            params={params}
            submitted={submitted} />
        </Modal> */}
    </>
  ) : (
    <></>
  );
};

export default Records;
