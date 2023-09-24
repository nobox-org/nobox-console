import { FieldType } from '@/lib/types';
import React, { useState } from 'react';

interface DynamicInputProps {
    inputKeys: { name: string, type: FieldType }[];
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

    return (
        <div className="space-y-4">
            {inputKeys.map(({ name, type }, i) => (
                <div key={i}>
                    <label htmlFor={name} className="block font-medium">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>{name}</span>
                            <code style={{ fontSize: "10px" }}>{type}</code>
                        </div>
                    </label>{
                        type === FieldType.Boolean ? (
                            <input
                                type="checkbox"
                                id={name}
                                className="border rounded px-3 py-2 w-full"
                                checked={Boolean(inputValues[name])}
                                onChange={(e) => handleInputChange(name, e.target.checked, type)}
                            />) : (
                            <input
                                type={
                                    type === FieldType.Number
                                        ? "number"
                                        : "text"}
                                id={name}
                                className="border rounded px-3 py-2 w-full"
                                value={(inputValues[name] || "") as string | number}
                                onChange={(e) => handleInputChange(name, e.target.value, type)}
                            />)

                    }

                </div>
            ))}
            <button
                onClick={handleButtonClick}
                disabled={Object.keys(inputValues).length === 0}
                className="bg-secondary text-white px-[24px] rounded-lg py-[12px] text-[14px] font-[500] bg-blue-500 active:bg-blue-300 hover:bg-blue-700 py-2 px-4 rounded transition duration-300 ease-in-out"
            >
                Submit
            </button>
        </div>
    );
};

export default DynamicInputComponent;
