import { isValidEmail } from "@/lib/gen";
import { button, inputBox } from "@/lib/tailwind-classes";
import { serverCall } from "@/servercall/init";
import { serverCalls } from "@/servercall/store";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getProjectUsers } from "@/lib/calls/get-project-users";

export const AddUserModal = ({ projectId }: {
    projectId: string
}) => {
    const [projectUsers, setProjectUsers] = useState<string[]>([]);
    const [email, setEmail] = useState<string>();
    const [emailIsValid, setEmailIsValid] = useState<boolean>(false);

    useEffect(() => {
        getAndSetProjectUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getAndSetProjectUsers = () => getProjectUsers({ projectId }).then((data: any) => {
        setProjectUsers(data.dataReturned);
    })


    const addProjectUser = async () => {
        const response = await serverCall({
            serverCallProps: {
                call: serverCalls.postGatewayProjectsAddUser,
                data: {
                    email,
                    projectId
                }
            },
            authorized: true,
            onSuccess: () => {
                getAndSetProjectUsers();
                toast.success(`User: ${email} Added Successfully`);
            }
        });
        const { success, error, dataReturned } = response;

        if (!success) {
            const errorResponse = error.data.error.join(",");
            toast.error(errorResponse);
            return;
        }
    }


    const removeProjectUser = async ({ emailToDelete }: any) => {
        const response = await serverCall({
            serverCallProps: {
                call: serverCalls.postGatewayProjectsRemoveUser,
                data: {
                    email: emailToDelete,
                    projectId
                }
            },
            authorized: true,
            onSuccess: () => {
                getAndSetProjectUsers();
                toast.success(`User: ${emailToDelete} Removed Successfully`);
            }
        });
        const { success, error, dataReturned } = response;

        if (!success) {
            const errorResponse = error.data.error.join(",");
            toast.success(errorResponse);
            return;
        }
    }


    const onEmailInputChange = (e: any) => {
        const value = e.target.value;

        if (value) {

            const emailIsValid = isValidEmail(value);

            if (!emailIsValid) {
                setEmailIsValid(false);
                return;
            }

            setEmailIsValid(true);
            setEmail(value)
        }
    }

    return (
        <>
            <div className="py-[20px] px-[40px]">
                <div style={{ textAlign: "center" }}>
                    <h3> Add User </h3>
                </div>
                <div className='flex my-7'>
                    <input
                        placeholder="user's email"
                        className={inputBox()}
                        onChange={onEmailInputChange}
                    />
                    <div>
                        <button
                            onClick={addProjectUser}
                            style={{ marginLeft: 10 }}
                            className={button()}
                            disabled={!emailIsValid}
                        >Add User
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t-2 border-blue-900 px-[10px] text-center py-[10px]">
                {
                    projectUsers?.length ? projectUsers.map((projectUser: any, i) => {
                        const { email } = projectUser;
                        return (
                            <div key={i} className="flex justify-between bg-blue-200 px-[20px] my-[5px]">
                                <div className="text-[16px] py-[2px]">
                                    {email}
                                </div>
                                <span onClick={() => removeProjectUser({ emailToDelete: email })} className="px-[2px] text-right cursor-pointer bg-[#fff] my-[4px] px-[5px] active:bg-blue-500"> x </span>
                            </div>)
                    }) : <span className="" >No User Added</span>
                }
            </div>
        </>

    );
}