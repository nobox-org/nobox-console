"use client";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../../../styles/custom-toast.css'
import useNoboxData from "@/lib/hooks/useNoboxData";
import { findProject } from "@/lib/gen";
import Modal from "@/app/components/Modal";
import { AddUserModal } from "@/app/components/modals/AddUserModal";
import { RecordSpaceCard } from "@/app/components/RecordSpaceCard";
import getRecords from "@/lib/get-records";

export default function RecordSpaces({ params }: { params: { project_id: string } }) {
  const { sharedDataLoadingStatus, dataLoadingStatus, data: projects, sharedData: sharedProjects, allProjects } = useNoboxData();

  const projectId = params.project_id as string;

  const [project, setProject] = React.useState<any>(null);


  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const [recordMap, setRecordMap] = React.useState<Record<any, any>>({})

  const loading = sharedDataLoadingStatus && dataLoadingStatus;

  const sharedProjectData = sharedProjects.find((project: any) => project._id === projectId);



  useEffect(() => {
    if (!loading) {


      const project = sharedProjectData || findProject({
        projects,
        projectId
      });

      setProject(project);

      if (project) {
        const { recordSpaces } = project;

        const temporaryRecordMap: Record<string, any> = {}

        Promise.all(
          recordSpaces.map(async (recordSpace: any) => {
            const { slug: recordSpaceSlug, _id } = recordSpace;
            const { records
            } = await getRecords({
              recordSpaceSlug,
              allProjects,
              projectId
            })
            temporaryRecordMap[_id] = records
          })
        ).then(() => {
          setRecordMap(temporaryRecordMap);
        });
      }
    }
  }, [loading]);


  if (!project || loading) {
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
              return <RecordSpaceCard key={recordSpace._id} recordSpace={recordSpace} projectId={projectId} records={recordMap[recordSpace._id]} />
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
