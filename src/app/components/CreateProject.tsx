import { CreateProjectInput } from '@/lib/hooks/utils';
import React, { useContext, useState } from 'react';
import DataContext from './dataContext/DataContext';

interface CreateProjectProps {
    inputKeys: string[];
    handleSubmit: (values: CreateProjectInput) => Promise<any>;
}

const CreateProject: React.FC<CreateProjectProps> = ({ inputKeys, handleSubmit }) => {

    const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

    const [error, setError] = useState("");
    const [success, setSuccess] = useState<boolean>(false);

    const handleInputChange = (key: string, value: string) => {
        setInputValues((prevValues) => ({ ...prevValues, [key]: value }));
    };

    const initErrorAndSuccess = () => {
        setError("");
        setSuccess(false);
    }

    const handleButtonClick = async () => {
        initErrorAndSuccess()
        const { error } = await handleSubmit(inputValues as any);

        if (error) {
            setError(error);
            return;
        }

        setSuccess(true);

    };

    return (
        <div className="space-y-4">
            <div style={{ color: "red", textAlign: "center" }}>{error}</div>
            <div style={{ textAlign: "center", color: "blue" }}>{success && "Submitted Successfully"}</div>
            {inputKeys.map((name, i) => (
                <div key={i}>
                    <label htmlFor={name} className="block font-medium">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>{name}</span>
                        </div>
                    </label>
                    <input
                        type="text"
                        id={name}
                        className="border rounded px-3 py-2 w-full"
                        value={inputValues[name]}
                        onChange={(e) => handleInputChange(name, e.target.value)}
                    />
                </div>
            ))}
            <button
                onClick={handleButtonClick}
                disabled={Object.keys(inputValues).length === 0}
                className="bg-secondary text-white px-[24px] rounded-lg py-[12px] text-[14px] font-[500] bg-blue-500 active:bg-blue-300 hover:bg-blue-700 py-2 px-4 rounded transition duration-300 ease-in-out w-full"
            >
                Submit
            </button>
        </div>
    );
};

export default CreateProject;
