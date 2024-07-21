"use client";
import Editor from "@/app/components/editor/Editor";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Input } from "@/app/components/form/input";
import { capitalizeFirstLetter } from "@/lib/gen";
import { BooleanField } from "@/app/components/form/BooleanInputField";

type InputDetails = {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  description?: string;
  value: string | boolean;
  onChange: (name: string, value: any) => void;
  formValues?: any;
};

export const InputField: any = (inputDetails: InputDetails) => {
  const { name, placeholder, label, type, value, onChange } = inputDetails;

  return (
    <>
      <div className="block mb-2 font-[400] text-[16px]">
        <span>{capitalizeFirstLetter(label)}{inputDetails.required && <>*</>}</span>
        {
          ["object", "array"].includes(type) && (
            <sup className="text-gray-500 text-[9px] sups">&nbsp;{type}</sup>
          )
        }

      </div>
      {type === "editor" && <Editor id={name} onChange={(e: any) => {
        const { name, value } = e.target;
        onChange(name, value)
      }} value={value} />}
      {["text", "email", "number"].includes(type) && (
        <Input
          type={type}
          className="w-full border border-[#DFE5EC] focus:ring-0 rounded-sm h-[48px] pl-[16px] placeholder:text-[16px] mt-[8px] inputBorder"
          name={name}
          placeholder={placeholder ?? ""}
          value={value ? String(value) : ""}
          onChange={(e) => {
            const { name, value } = e.target;
            onChange(name, value)
          }}
        />
      )}
      {["checkbox"].includes(type) && (
        <BooleanField
          value={value as boolean}
          onChange={(value: boolean) => {
            onChange(name, value)
          }} />
      )}
      {["object", "array"].includes(type) && (
        <div className="border border-[#DFE5EC] focus:ring-0 rounded-sm  pl-[16px] mt-[8px] inputBorder">
          <CodeMirror height="100px" extensions={[javascript({ jsx: true })]} onChange={(value) => {
            onChange(name, value);
          }} />
        </div>
      )}
    </>
  );
};
