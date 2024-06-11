"use client";
import { Formatic } from "@/app/lib/formatic";

const sample = [
  {
    name: "firstname",
    type: "input",
    title: "First name",
    required: true,
  },
  {
    name: "lastname",
    type: "input",
    title: "First name",
    required: true,
  },
];

export default function FormPage() {
  return <Formatic schema={sample} onSubmit={() => console.log("nothing")} />;
}
