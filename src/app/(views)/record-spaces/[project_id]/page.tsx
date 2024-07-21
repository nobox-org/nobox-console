"use client";

import React, { useContext, useEffect, useState } from "react";
import Modal from "@/app/components/Modal";
import { AddUserModal } from "@/app/components/modals/AddUserModal";
import { RecordSpaceCard } from "@/app/components/RecordSpaceCard";
import { getRecordMap } from "@/lib/calls/get-record-map";
import DataContext from "@/app/components/dataContext/DataContext";
import { MainLoader } from "@/app/components/MainLoader";
import Link from "next/link";

export default function RecordSpaces({
  params,
}: {
  params: { project_id: string };
}) {
  const {
    loading: noboxDataLoading,
    sharedProjects,
    allProjects,
  } = useContext(DataContext);

  const [loading, setLoading] = useState(true);

  const projectId = String(params.project_id).trim();

  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const sharedProjectData = sharedProjects.find(
    (project: any) => project._id === projectId
  );

  const [projectRecordMap, setProjectRecordMap] = useState();

  const [project, setProject] = useState<any>();

  useEffect(() => {
    if (allProjects.length > 0 && !projectRecordMap) {
      getRecordMap({
        projectId: params.project_id,
        allProjects,
        freshCall: true,
      }).then(({ projectRecordMap, project }) => {
        setProjectRecordMap(projectRecordMap);
        setProject(project);
        setLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allProjects]);

  if (loading) {
    return MainLoader;
  }

  return (
    <main className="text-[#292D32] px-[16px] h-full">
      {project?.recordSpaces?.length > 0 && projectRecordMap ? (
        <div className="p-[24px]">
          <div className="mb-8">
            {!sharedProjectData && (
              <div>
                <button
                  className="btn-primary small"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  {" "}
                  Add User To Project
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-[24px]">
            {project.recordSpaces.map((recordSpace: any) => {
              return (
                <RecordSpaceCard
                  key={recordSpace._id}
                  recordSpace={recordSpace}
                  projectId={projectId}
                  records={projectRecordMap[recordSpace.slug]}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center h-screen">
            <div className="bg-[#ffffff] p-16 rounded-md shadow-md">
              <div className="text-center mx-10">
                <p className="my-2">You have No RecordSpaces at the moment</p>
                <Link
                  href="https://docs.nobox.cloud/integrate-nobox"
                  target="_blank"
                  className="my-2 n_link"
                >
                  Integrate Your App/Website to Add recordSpaces
                </Link>
              </div>

              <div className="mt-[30px]">
                {!sharedProjectData && (
                  <div className="py-[12px] text-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-medium text-xs py-2 px-4 rounded"
                      onClick={() => {
                        setOpenModal(true);
                      }}
                    >
                      {" "}
                      Add User To Project
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      <Modal
        isOpen={openModal}
        setIsOpen={setOpenModal}
        buttonText={"Copy Text"}
      >
        <AddUserModal projectId={projectId} />
      </Modal>
    </main>
  );
}
