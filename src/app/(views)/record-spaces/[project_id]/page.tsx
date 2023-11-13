"use client";

import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../../../styles/custom-toast.css'
import Modal from "@/app/components/Modal";
import { AddUserModal } from "@/app/components/modals/AddUserModal";
import { RecordSpaceCard } from "@/app/components/RecordSpaceCard";
import { getRecordMap } from "@/lib/calls/get-record-map";
import DataContext from "@/app/components/dataContext/DataContext";

export default function RecordSpaces({ params }: { params: { project_id: string } }) {
  const { loading, sharedProjects, allProjects } = useContext(DataContext);

  const projectId = String(params.project_id).trim();

  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const sharedProjectData = sharedProjects.find((project: any) => project._id === projectId);

  const [projectRecordMap, setProjectRecordMap] = useState();

  const [project, setProject] = useState<any>();


  useEffect(() => {
    if (allProjects.length > 0 && !projectRecordMap) {
      getRecordMap({
        projectId: params.project_id,
        allProjects,
        freshCall: true
      }).then(({ projectRecordMap, project }) => {
        setProjectRecordMap(projectRecordMap);
        setProject(project)
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allProjects])

  if (loading) {
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
            project?.recordSpaces?.length > 0 && projectRecordMap
              ? project.recordSpaces.map((recordSpace: any) => {
                return <RecordSpaceCard key={recordSpace._id} recordSpace={recordSpace} projectId={projectId} records={projectRecordMap[recordSpace.slug]} />
              }) :
              (<div className="text-center">No RecordSpaces at the moment</div>)
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
