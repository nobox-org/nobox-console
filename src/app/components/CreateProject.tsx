import { CreateProjectInput } from '@/lib/hooks/utils';
import React, { useState } from 'react';
import FormInput from './FormInput';
import FormTitle from './FormTitle';
import { capitalizeFirstLetter } from '@/lib/gen';

interface CreateProjectProps {
    inputKeys: string[];
    handleSubmit: (values: CreateProjectInput) => Promise<any>;
}

const CreateProject: React.FC<CreateProjectProps> = ({
    inputKeys,
    handleSubmit
}) => {

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

    const handleButtonClick = async (e: any) => {
        e.preventDefault()
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
            <FormTitle title="Create Project" subTitle="Fill In the Form Below" />
            <div style={{ color: "red", textAlign: "center" }}>{error}</div>
            <div style={{ textAlign: "center", color: "blue" }}>{success && "Submitted Successfully"}</div>
            <form>
                {inputKeys.map((name, i) => (
                    <FormInput className="w-full" key={i} name={name} title={capitalizeFirstLetter(name)} type="text" onChange={(e) => handleInputChange(name, e.target.value)} />
                ))}
                <button
                    onClick={handleButtonClick}
                    disabled={Object.keys(inputValues).length === 0}
                    className="mt-8 text-white text-[14px] font-[500] bg-blue-500 active:bg-blue-300 hover:bg-blue-700 py-2 px-4 rounded transition duration-300 ease-in-out w-full"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateProject;
