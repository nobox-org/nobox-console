"use client";
import { Formatic } from "@/app/lib/formatic";
import submitRecords from "@/lib/calls/submit-records";
import { getProjectData, useGetBulkData } from "@/lib/hooks/useBulkData";
import useRecordsCall from "@/lib/hooks/useRecordsCall";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RecordInputPage({
  params,
}: {
  params: { project_id: string; record_space_slug: string };
}) {
  const [headings, setHeadings] = useState<any>();
  const [projectDetails, setProjectDetails] = useState<any>();
  const [recordSpace, setRecordSpace] = useState<any>();
  const router = useRouter();
  const { data } = useGetBulkData();
  const {
    data: records,
    loading,
    recordSpaceStructure,
  } = useRecordsCall({
    projectId: params.project_id,
    recordSpaceSlug: params.record_space_slug,
    initiateFreshCall: true,
    uniqueId: "",
  });

  async function handleSubmitRecords(values: any) {
    try {
      const savedData = await submitRecords({
        recordSpaceSlug: params.record_space_slug,
        allProjects: data.getProjects,
        projectId: params.project_id,
        record: values,
      });
      toast.success('Saved');
      router.push(`/records/${params.project_id}/${params.record_space_slug}`); 
    } catch (error) {
      toast.error('An error ocurred.');
      console.log({ error });
    }
  }

  useEffect(() => {
    if (!loading && data) {
      const { project, recordSpace } = getProjectData(
        data.getProjects,
        params.project_id,
        params.record_space_slug
      );
      if (project) {
        setProjectDetails(project);
        setRecordSpace(recordSpace);
      }
      const { structure } = recordSpaceStructure as any;
      if (recordSpace.views && recordSpace.views.length) {
        const thisView = recordSpace.views[0].data;
        setHeadings(thisView);
      } else {
        const headings = Object.keys(structure).map((key) => {
          const eachStructure = structure[key];
          const { name, required } = eachStructure;
          const structureType = eachStructure.type.name;

          const type =
            structureType === "String"
              ? "text"
              : structureType === "Boolean"
              ? "checkbox"
              : structureType === "Array"
              ? "array"
              : structureType === "Object"
              ? "editor"
              : "number";
          return {
            name,
            type,
            required,
            label: name,
          };
        });
        setHeadings(headings);
      }
    }
  }, [
    records,
    loading,
    recordSpaceStructure,
    data,
    params.project_id,
    params.record_space_slug,
  ]);

  return (
    <div className="bg-red-200">
      {headings && (
        <Formatic schema={headings} onSubmit={handleSubmitRecords} />
      )}
    </div>
  );
}
