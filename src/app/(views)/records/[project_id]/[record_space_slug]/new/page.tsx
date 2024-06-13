"use client";
import { Formatic } from "@/app/lib/formatic";

export default function RecordInputPage({
  params,
}: {
  params: { project_id: string; record_space_slug: string };
}) {

  const headings = [
    {
      type: 'email',
      name: 'firstname',
      label: 'First name',
      required: true,
    },
    {
      type: 'editor',
      name: 'post',
      required: true,
    }
  ]
  function handleSubmitRecords(values:any) {
    console.log(values);
  }

  return (
    <div className="space-y-4">
      <Formatic schema={headings} onSubmit={handleSubmitRecords} />
    </div>
  );
}
