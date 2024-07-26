import { useState } from "react";
import FormTitle from "./FormTitle";
import { ArrayInputComponent, DynamicInputComponent } from "./SubmitRecord";

export const RecordInputForm = ({ headings, handleSubmitRecords, params, submitted }: any) => {
    const [inputType, setInputType] = useState<"FIELDS" | "JSON">("FIELDS");

    return (
        
        <div className="space-y-4">
            <div style={{ textAlign: "center", color: "blue" }}>{submitted && "Submitted Successfully"}</div>
            <FormTitle title="Create Records" subTitle={`Submit Records to ${params.record_space_slug}`} />
            <div className="flex justify-center">
                {/* <div className="flex items-center justify-between w-40 bg-blue-500 rounded-full px-4 py-2  cursor-pointer">
            <span className={`${inputType === "FIELDS" ? activeClassNames : inActiveClassName}`} onClick={() => setInputType("FIELDS")}>Fields</span>
            <span className={`${inputType === "JSON" ? activeClassNames : inActiveClassName}`} onClick={() => setInputType("JSON")}>JSON</span>
        </div> */}
            </div>

            {inputType === "FIELDS"
                ? <DynamicInputComponent inputKeys={headings} handleSubmit={handleSubmitRecords} />
                : <ArrayInputComponent inputKeys={headings} handleSubmit={handleSubmitRecords} />
            }
        </div>
    )
}