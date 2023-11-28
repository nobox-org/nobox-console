import { FieldType } from '@/lib/types';
import React, { useState } from 'react';
import FormInput from './FormInput';
import { capitalizeFirstLetter } from '@/lib/gen';

interface DynamicInputProps {
    inputKeys: { name: string, type: FieldType, required: boolean; }[];
    handleSubmit: (values: Record<string, any>) => Promise<void>;
}

const DynamicInputComponent: React.FC<DynamicInputProps> = ({ inputKeys, handleSubmit }) => {
    const [inputValues, setInputValues] = useState<{ [key: string]: string | number | boolean | string[] }>({});

    const handleInputChange = (key: string, value: string | boolean, type: "number" | "string" | "boolean" | "array") => {

        const formattedValue = type === "number"
            ? Number(value)
            : type === "boolean" ? Boolean(value)
                : type === "array" ? (value as string).split(",") : value;

        setInputValues((prevValues) => ({ ...prevValues, [key]: formattedValue }));
    };

    const handleButtonClick = async () => {
        await handleSubmit(inputValues);
    };

    console.log({ inputKeys })

    return (
        <>
            {inputKeys.map(({ name, type, required }, i) => (
                <FormInput
                    key={i}
                    name={name}
                    className='w-full'
                    required={required}
                    title={capitalizeFirstLetter(name)}
                    type={
                        type === FieldType.Number
                            ? "number"
                            : type === FieldType.Boolean
                                ? "checkbox" :
                                "text"}
                    value={(inputValues[name] || "") as any}
                    onChange={(e) => handleInputChange(name, e.target.value, type)}
                />
            )
            )}
            <button
                onClick={handleButtonClick}
                disabled={Object.keys(inputValues).length === 0}
                className="text-white text-[14px] font-[500] bg-blue-500 active:bg-blue-300 hover:bg-blue-700 py-2 my-8 px-4 rounded transition duration-300 ease-in-out"
            >
                Submit
            </button>
        </>
    );
};

export default DynamicInputComponent;
