"use client";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../../../styles/custom-toast.css'
import useNoboxData from "@/lib/hooks/useNoboxData";
import Box from "@/app/components/Box";
import { findProject } from "@/lib/gen";
import { Breadcrumb } from "@/app/components/BreadCrumb";

export default function RecordSpaces({ params }: { params: { project_slug: string } }) {
  const { loading, data: projects } = useNoboxData();

  const projectSlug = params.project_slug as string;

  const [project, setProject] = React.useState<any>(null);


  useEffect(() => {
    if (!loading) {
      const project = findProject({
        projects,
        projectSlug
      });
      setProject(project);

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
    <main className="text-[#292D32] bg-[#ECEDF3] h-full p-[24px]">
      <ToastContainer toastClassName="custom-toast" />
      <div>
        <h6 className="text-[20px] font-[700] text-[#292D32] mt-[24px]">
          <Breadcrumb path={[
            "Project",
            project.name,
            "Record Spaces"
          ]} />
        </h6>
        <div className="flex flex-wrap gap-[24px] mt-[8px] mb-[136px]">
          {
            project.recordSpaces?.length > 0 && project.recordSpaces.map((recordSpace: any) => {
              const { name, id, slug: recordSpaceSlug, description, createdAt } = recordSpace;

              const link = `/records/${projectSlug}/${recordSpaceSlug}`;

              return (<Box id={id} key={id} link={link} title={name} subTitle={description} />)
            })
          }
        </div>
      </div>
    </main>
  );
}
