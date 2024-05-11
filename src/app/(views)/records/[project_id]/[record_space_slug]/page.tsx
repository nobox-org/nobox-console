"use client";
import { useEffect, useState } from "react";
import RecordsDisplay from "@/app/components/RecordsDisplay";
import useRecordsCall from "@/lib/hooks/useRecordsCall";
import { ArrayInputComponent, DynamicInputComponent } from "@/app/components/SubmitRecord";
import { FieldType } from "@/lib/types";
import useNoboxData from "@/lib/hooks/useNoboxData";
import submitRecords from "@/lib/calls/submit-records";
import Modal from "@/app/components/Modal";
import { useRecordsBackgroundUpdate } from "@/lib/hooks/useRecordsBackgroundUpdate";
import FormTitle from "@/app/components/FormTitle";
import createUIIndication from "@/lib/createUIIndication";
import { MainLoader } from "@/app/components/MainLoader";
import deleteRecords from "@/lib/calls/delete-record";

type ViewMode = "table" | "grid";

const Records = (
  { params }: { params: { project_id: string, record_space_slug: string } }
) => {

  const [initiateFreshCall, setInitiateFreshCall] = useState(false);
  const [uniqueId, setUniqueId] = useState<string>("");

  const { allProjects } = useNoboxData();


  const [openModal, setOpenModal] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const submissionIndication = createUIIndication(setSubmitted);

  const [viewMode, setViewMode] = useState<ViewMode>("table");
  const [headings, setHeadings] = useState<{ name: string, type: FieldType, required: boolean }[]>([])
  const [pageIsReady, setPageIsReady] = useState(false);

  useRecordsBackgroundUpdate({
    allProjects,
    projectId: params.project_id,
  });

  const { data: records, loading, recordSpaceStructure } = useRecordsCall({
    projectId: params.project_id,
    recordSpaceSlug: params.record_space_slug,
    initiateFreshCall,
    uniqueId
  });

  const { webhooks } = recordSpaceStructure as any;

  useEffect(() => {
    if (!loading) {
      const { structure } = recordSpaceStructure as any;
      const headings = Object.keys(structure).map((key) => {
        const eachStructure = structure[key];
        const { name, required } = eachStructure;
        const structureType = eachStructure.type.name;
        const type = structureType === "String"
          ? FieldType.String
          : structureType === "Boolean"
            ? FieldType.Boolean
            : structureType === "Array"
              ? FieldType.Array
              : FieldType.Number
        return { name, type, required };
      });

      setHeadings(headings);
      setPageIsReady(true);
    }
  }, [records, loading, recordSpaceStructure])

  if (loading || !pageIsReady) {
    return (
      <MainLoader />
    );
  }

  const handleDeleteRecord = async (recordId: string) => {
    try {
      await deleteRecords({
        recordSpaceSlug: params.record_space_slug,
        allProjects,
        projectId: params.project_id,
        recordId
      })
      setInitiateFreshCall(true);
      setSubmitted(true);
      setUniqueId(recordId);
      submissionIndication.startEnd({ delay: 2000 })

    } catch (error) {
      console.log({ error })
    }
  }


  const handleSubmitRecords = async (record: Record<string, any>) => {
    try {
      const responseRecord = await submitRecords({
        recordSpaceSlug: params.record_space_slug,
        allProjects,
        projectId: params.project_id,
        record
      })
      setInitiateFreshCall(true);
      setSubmitted(true)
      setUniqueId(responseRecord.records[0].id);
      submissionIndication.startEnd({ delay: 2000 })

    } catch (error) {
      console.log({ error })
    }
  }

  return allProjects.length > 0
    ? (
      <>
        <div className="w-full sm:pr-[30px] sm:mx-auto bg-[#FAFAFA] overflow-x-auto h-full">
          <RecordsDisplay viewMode={viewMode} headings={headings} records={records} handleDeleteRecord={handleDeleteRecord} />
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
          content={<RecordInputForm headings={headings} handleSubmitRecords={handleSubmitRecords} params={params} submitted={submitted} />}
          buttonText={'Copy Text'}
        /></>)
    : <></>

};

export const RecordInputForm = ({ headings, handleSubmitRecords, params, submitted }: any) => {

  const activeClassNames = "bg-white text-blue-500 rounded-full px-2 py-0.5";
  const inActiveClassName = "text-white";


  const [inputType, setInputType] = useState<"FIELDS" | "JSON">("FIELDS");

  return (
    <div className="space-y-4">
      <div style={{ width: "600px", padding: "10px", margin: "30px" }} >
        <div style={{ textAlign: "center", color: "blue" }}>{submitted && "Submitted Successfully"}</div>
        <FormTitle title="Create Records" subTitle={`Submit Records to ${params.record_space_slug}`} />
        <div className="flex justify-center">
          {/* <div className="flex items-center justify-between w-40 bg-blue-500 rounded-full px-4 py-2  cursor-pointer">
            <span className={`${inputType === "FIELDS" ? activeClassNames : inActiveClassName}`} onClick={() => setInputType("FIELDS")}>Fields</span>
            <span className={`${inputType === "JSON" ? activeClassNames : inActiveClassName}`} onClick={() => setInputType("JSON")}>JSON</span>
          </div> */}
        </div>

        {inputType === "FIELDS"
          ? <DynamicInputComponent inputKeys={headings} handleSubmit={handleSubmitRecords} />
          : <ArrayInputComponent inputKeys={headings} handleSubmit={handleSubmitRecords} />
        }
      </div>
    </div>
  )
}

export default Records;
