"use client";
import { Formatic } from "@/app/lib/formatic";
import submitRecords from "@/lib/calls/submit-records";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getHeadings, getRecordSpace } from "@/lib/utils";
import useNoboxData from "@/lib/hooks/useNoboxData";

export default function RecordInputPage({
  params,
}: {
  params: { project_id: string; record_space_slug: string };
}) {
  const router = useRouter();

  const { allProjects, data: project } = useNoboxData();

  const [headings, setHeadings] = useState([]);

  async function handleSubmitRecords(values: any) {
    try {
      console.log({ values })
      await submitRecords({
        recordSpaceSlug: params.record_space_slug,
        allProjects,
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
    if (project.length) {
      const { recordSpace } = getRecordSpace({
        projectId: params.project_id,
        recordSpaceSlug: params.record_space_slug,
        project
      });
      const headings = getHeadings(recordSpace.hydratedRecordFields);
      setHeadings(headings);
    }
  }, [project]);


  return (
    <div className="w-full lg:w-7/12">
      <Formatic schema={headings} onSubmit={handleSubmitRecords} />
    </div>
  );
}
