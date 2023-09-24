"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../../../styles/custom-toast.css'
import useNoboxData from "@/lib/hooks/useNoboxData";
import Modal from "@/app/components/Modal";
import { AddUserModal } from "@/app/components/modals/AddUserModal";
import { RecordSpaceCard } from "@/app/components/RecordSpaceCard";
import { getRecordMap } from "@/lib/get-record-map";
import { useRecordsBackgroundUpdate } from "@/lib/hooks/useRecordsBackgroundUpdate";

export default function RecordSpaces({ params }: { params: { project_id: string } }) {
  const { sharedDataLoadingStatus, dataLoadingStatus, data: projects, sharedData: sharedProjects, allProjects } = useNoboxData({
    backgroundOpts: {
      runInBackground: true,
      timeIntervalInSeconds: 10
    }
  });

  const projectId = params.project_id as string;

  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const loading = sharedDataLoadingStatus && dataLoadingStatus;

  const sharedProjectData = sharedProjects.find((project: any) => project._id === projectId);

  const [projectRecordMap, setProjectRecordMap] = useState();

  const [project, setProject] = useState<any>();

  // useRecordsBackgroundUpdate({
  //   allProjects,
  //   projectId
  // });

  useEffect(() => {
    if (allProjects.length > 0 && !(projectRecordMap && project)) {
      getRecordMap({
        projectId: params.project_id,
        allProjects,
      }).then(({ projectRecordMap, project }) => {
        setProjectRecordMap(projectRecordMap);
        setProject(project)
      });
    }
  }, [allProjects])


  if (!projectRecordMap || loading) {
    return (
      <main className="text-[#292D32] bg-[#ECEDF3] h-full p-[24px]">
        Loading
      </main>
    );
  }

  return (
    <main className="text-[#292D32] bg-[#ECEDF3] overflow-hidden px-[16px]">
      <ToastContainer toastClassName="custom-toast" />
      <div className="mt-[30px] mb-[136px]">
        {
          !sharedProjectData &&
          <div className="py-[12px]">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
              setOpenModal(true)
            }}> Add User</button>
          </div>
        }
        <div className="flex flex-wrap gap-[24px]">
          {
            project.recordSpaces?.length > 0 && project.recordSpaces.map((recordSpace: any) => {
              return <RecordSpaceCard key={recordSpace._id} recordSpace={recordSpace} projectId={projectId} records={projectRecordMap[recordSpace.slug]} />
            })
          }
        </div>
      </div>
      <Modal
        isOpen={openModal}
        setIsOpen={setOpenModal}
        content={
          <AddUserModal projectId={projectId} />
        } buttonText={'Copy Text'}
      />
    </main >
  );
}
