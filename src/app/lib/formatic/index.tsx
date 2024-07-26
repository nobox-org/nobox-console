import { InputField } from "./InputField";
import JSON5 from "json5";
import { useState } from "react";
import { button, transparentButton } from "@/lib/tailwind-classes";
import { isValidJsonObjectOrArray } from "../utils";
import ClipLoader from "react-spinners/ClipLoader";
import toast from "react-hot-toast";


export const Formatic = ({
  schema,
  onSubmit,
  recordSpace,
  submissionStatus
}: {
  schema: any[];
  onSubmit: (record: any) => void;
  recordSpace: any;
  submissionStatus: any;
}) => {

  const [formValues, setFormValues] = useState<any>({});

  const handleInputChange = (name: string, value: string | boolean) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const reFormatValues = (e: any) => {
    e.preventDefault();
    const values = formValues;
    for (let i = 0; i < schema.length; i++) {
      const field = schema[i];
      const { name, type, required } = field;
      const value = values[name];
      if (required && (value === undefined && value === null)) {
        toast.error(`${name} is required`);
        return;
      }

      if (value) {
        const schematypeIsObjectOrArray = ['object', 'array'].includes(type);

        if (schematypeIsObjectOrArray) {

          const { isValid } = isValidJsonObjectOrArray(value);

          if (!isValid) {
            toast.error(`${name} is not a valid ${type}`);
            return;
          }

          const parsedJson = JSON5.parse(value);
          values[field.name] = parsedJson;
        }

        const schematypeIsNumber = type === 'number';

        if (schematypeIsNumber) {
          values[field.name] = Number(value);
        }

        const schematypeIsBoolean = type === 'boolean';

        if (schematypeIsBoolean) {
          values[field.name] = Boolean(value);
        }
      }
    }
    onSubmit(values);
  }

  return (
    <form onSubmit={reFormatValues}>
      <h2 className="text-[#292D32] text-lg font-medium m-4 text-center">Add Record to {recordSpace.name}</h2>
      <div className="overflow-y-auto" style={{ height: "600px" }}>
        {schema.map((input, i) =>
          <div className="mx-2" key={i} >
            <InputField value={formValues[input.name]} {...input} setFormValues={setFormValues} onChange={handleInputChange} />
          </div>
        )}
      </div>
      <div className="form-group mt-1 mx-2">
        <button type="submit" className={transparentButton()}>
          {submissionStatus ? <ClipLoader
            color={"#fff"}
            loading={submissionStatus}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> : "Submit"}
        </button >
      </div>
    </form>

  );
};
