"use client";

import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../Modal";
import { RecordsTableProps } from "./RecordsTable";
import loadable from '@loadable/component';
import { ToastContainer, toast } from "react-toastify";


function convertDateFormat(isoDate: string) {
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    return formattedDate;
}

const ReactJson = loadable(() => import('react-json-view') as any) as any;

export const Body = ({ records, headings, handleDeleteRecord }: RecordsTableProps) => {
    return <>
        <ToastContainer toastClassName="custom-toast" />
        {records?.map((record, index) => (<DisplayTR handleDelete={handleDeleteRecord} headings={headings} record={record} key={index} />))}
    </>
}

const DisplayTR = ({ headings, record, handleDelete }: {
    headings: Record<string, any>[];
    record: Record<string, any>;
    handleDelete: (recordId: string) => Promise<void>
}) => {

    const [openJSONModal, setOpenJSONModal] = React.useState<boolean>(false);
    return (
        <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            {
                headings.map((heading, index) => {
                    const { name } = heading;
                    const keyValue = record[name] || "";
                    const value = Array.isArray(keyValue) ? JSON.stringify(keyValue) : String(keyValue);

                    const limit = 50;
                    const tooLong = value.length > limit;
                    let displayedValue = name === "createdAt" || name === "updatedAt" ? convertDateFormat(value) : value;

                    if (tooLong) {
                        displayedValue = `${value.substring(0, limit)}...`
                    }

                    if (name === "Actions") {
                        return (
                            <td key={index} className="whitespace-nowrap px-6 py-4 " style={{ maxWidth: "600px" }}>
                                <a
                                    style={{ cursor: "pointer", color: "blue" }}
                                    onClick={() => {
                                        handleDelete(record.id).then(() => {
                                            toast.info("Record with id: " + record.id + " successfully Deleted", {
                                                className: "toast-message",
                                                autoClose: 2000,
                                            });
                                        })
                                    }}>Delete</a>
                            </td>
                        )
                    }

                    return (
                        <td key={index} className="whitespace-nowrap px-6 py-4 " style={{ maxWidth: "600px" }}>
                            {displayedValue}{
                                value.length > limit &&
                                <a
                                    style={{ cursor: "pointer", color: "blue" }}
                                    onClick={() => {
                                        setOpenJSONModal(true)
                                    }}> see more</a>
                            }
                        </td>
                    )
                })
            }
            <Modal
                isOpen={openJSONModal}
                setIsOpen={setOpenJSONModal}
                content={
                    <div className="overflow-x-auto overflow-y-auto" style={{ width: "100%", height: "500px", padding: "10%" }}>
                        <ReactJson src={record} />
                    </div>
                } buttonText={'View Data'}
            />
        </tr>
    )
}

