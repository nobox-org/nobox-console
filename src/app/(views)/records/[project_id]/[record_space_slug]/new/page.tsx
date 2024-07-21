"use client";
import { Formatic } from "@/app/lib/formatic";
import submitRecords from "@/lib/calls/submit-records";
import { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { converthydratedRecordFieldsToInputMetaData, fetchAndStoreRecords, getRecordSpace } from "@/lib/utils";
import useNoboxData from "@/lib/hooks/useNoboxData";
import createUIIndication from "@/lib/createUIIndication";
import React from "react";


export default function RecordInputPage({
  params,
}: {
  params: { project_id: string; record_space_slug: string };
}) {
  const router = useRouter();

  const [submitted, setSubmitted] = useState<boolean>(false);

  const submissionIndication = createUIIndication(setSubmitted);

  const { allProjects, data: project, loading } = useNoboxData({ source: "RecordInputPage" });

  const [inputMetaData, setInputMetaData] = useState([]);

  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const loadingIndicator = createUIIndication(setPageLoading);

  const [recordSpace, setRecordSpace] = useState<any>();

  loadingIndicator.delayed({ delay: 500 });

  async function handleSubmitRecords(values: any) {
    try {
      const { project_id: projectId } = params;
      await submitRecords({
        recordSpaceSlug: params.record_space_slug,
        allProjects,
        projectId,
        record: values,
      });

      fetchAndStoreRecords({
        allProjects,
        projectId
      })

      submissionIndication.startEnd({ delay: 1000 });
      toast.success('Saved');
      router.push(`/records/${params.project_id}/${params.record_space_slug}`);
    } catch (error) {
      toast.error('An error ocurred.');
      console.log({ error });
    }
  }

  useEffect(() => {
    if (!loading && project?.length) {
      const { recordSpace } = getRecordSpace({
        projectId: params.project_id,
        recordSpaceSlug: params.record_space_slug,
        project
      });
      setRecordSpace(recordSpace);
      setInputMetaData(converthydratedRecordFieldsToInputMetaData(recordSpace.hydratedRecordFields));
      setPageLoading(false);
    }
  }, [loading]);

  return (
    <div className="mx-auto w-full lg:w-8/12 bg-white p-6">
      <div className="px-4">
        <Suspense fallback={<>Loading**</>}>
          {
            pageLoading ?
              <>loading........</>
              : <>
                <Formatic schema={inputMetaData} recordSpace={recordSpace} onSubmit={handleSubmitRecords} submissionStatus={submitted} />
              </>
          }
        </Suspense>
      </div>

    </div>
  );
}
