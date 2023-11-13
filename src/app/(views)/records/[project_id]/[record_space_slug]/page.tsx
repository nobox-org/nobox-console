"use client";
import { useEffect, useState } from "react";
import RecordsDisplay from "@/app/components/RecordsDisplay";
import useRecordsCall from "@/lib/hooks/useRecordsCall";
import DynamicInputComponent from "@/app/components/SubmitRecord";
import { FieldType } from "@/lib/types";
import useNoboxData from "@/lib/hooks/useNoboxData";
import submitRecords from "@/lib/calls/submit-records";
import Modal from "@/app/components/Modal";
import { useRecordsBackgroundUpdate } from "@/lib/hooks/useRecordsBackgroundUpdate";

type ViewMode = "table" | "grid";

const Records = (
  { params }: { params: { project_id: string, record_space_slug: string } }
) => {

  const [initiateFreshCall, setInitiateFreshCall] = useState(false);

  const { allProjects } = useNoboxData();


  const [openModal, setOpenModal] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [viewMode, setViewMode] = useState<ViewMode>("table");
  const [headings, setHeadings] = useState<{ name: string, type: FieldType }[]>([])
  const [pageIsReady, setPageIsReady] = useState(false);

  useRecordsBackgroundUpdate({
    allProjects,
    projectId: params.project_id,
  });

  const { data: records, loading, recordSpaceStructure } = useRecordsCall({
    projectId: params.project_id,
    recordSpaceSlug: params.record_space_slug,
    initiateFreshCall
  });

  const { webhooks } = recordSpaceStructure as any;

  useEffect(() => {
    setInterval(() => setSubmitted(!setSubmitted), 2000)
  }, [submitted])


  useEffect(() => {
    if (!loading) {
      const { structure } = recordSpaceStructure as any;
      const headings = Object.keys(structure).map((key) => {
        const eachStructure = structure[key];
        const name = eachStructure.name;
        const structureType = eachStructure.type.name;
        const type = structureType === "String"
          ? FieldType.String
          : structureType === "Boolean"
            ? FieldType.Boolean
            : structureType === "Array"
              ? FieldType.Array
              : FieldType.Number
        return { name, type };
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

  const handleSubmitRecords = async (record: Record<string, any>) => {
    try {
      await submitRecords({
        recordSpaceSlug: params.record_space_slug,
        allProjects,
        projectId: params.project_id,
        record
      })
      setInitiateFreshCall(true);
      setSubmitted(true)
    } catch (error) {
      console.log({ error })
    }
  }

  if (allProjects.length > 0) {
    return (
      <div className="">
        <div className="w-full sm:pr-[30px] sm:mx-auto bg-[#FAFAFA] overflow-x-auto">
          <RecordsDisplay viewMode={viewMode} headings={headings} records={records} />
          <div className="flex">
            <div className="py-[12px] sm:px-6 lg:px-8">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
                setOpenModal(true)
              }}> Submit Record</button>
            </div>
            <div className="py-[12px] sm:px-6 lg:px-8">
              {webhooks &&
                <ul>
                  <h4>Available Webhooks</h4>
                  {webhooks.onUpdateUrl && <li>{webhooks.onUpdateUrl}</li>}
                  {webhooks.onInsertUrl && <li>{webhooks.onInsertUrl}</li>}
                </ul>}
            </div>
          </div>
        </div>
        <Modal
          isOpen={openModal}
          setIsOpen={setOpenModal}
          content={
            <div style={{ width: "600px", padding: "10px", margin: "30px", overflowY: "scroll", height: "700px" }} >
              {submitted && (<h4 style={{ textAlign: "center", fontWeight: "lighter", padding: "0px 0 20px" }}> Submitted ✅</h4>)}
              <h3 style={{ textAlign: "center", fontWeight: "lighter" }}> Submit Records to <b><u>{params.record_space_slug}</u></b> </h3>
              <DynamicInputComponent inputKeys={headings} handleSubmit={handleSubmitRecords} />
            </div>
          }
          buttonText={'Copy Text'}
        />
      </div >
    );
  }
};

export default Records;
