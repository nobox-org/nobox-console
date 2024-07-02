"use client";
import { Formatic } from "@/app/lib/formatic";
import submitRecords from "@/lib/calls/submit-records";
import { useGetBulkData } from "@/lib/hooks/useBulkData";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RecordInputPage({
  params,
}: {
  params: { project_id: string; record_space_slug: string };
}) {
  const router = useRouter();

  const { data } = useGetBulkData(params.project_id, params.record_space_slug);
  
  async function handleSubmitRecords(values: any) {
    try {
      await submitRecords({
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

  }, [
    data
  ]);

  return (
    <div className="w-full lg:w-7/12">
      {data && data.thisView && (
        <Formatic schema={data.thisView?.data} onSubmit={handleSubmitRecords} />
      )}
    </div>
  );
}
