"use client";

import React from "react";
import Modal from "../Modal";
import ReactJson from 'react-json-view';
import { RecordsTableProps } from "./RecordsTable";

export const Body = ({ records, headings }: RecordsTableProps) => {
    return <>{records?.map((record, index) => (<DisplayTR headings={headings} record={record} key={index} />))}</>
}

const DisplayTR = ({ headings, record }: {
    headings: Record<string, any>[];
    record: Record<string, any>;
}) => {

    const [openModal, setOpenModal] = React.useState<boolean>(false);

    return (
        <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            {
                headings.map((heading, index) => {
                    const { name } = heading;
                    const keyValue = record[name];
                    const value = Array.isArray(keyValue) ? JSON.stringify(keyValue) : String(keyValue);

                    const limit = 50;
                    const tooLong = value.length > limit;
                    let displayedValue = value;

                    if (tooLong) {
                        displayedValue = `${value.substring(0, limit)}...`
                    }

                    return (
                        <td key={index} className="whitespace-nowrap px-6 py-4 " style={{ maxWidth: "600px" }}>
                            {displayedValue}{
                                value.length > limit &&
                                <a
                                    style={{ cursor: "pointer", color: "blue" }}
                                    onClick={() => {
                                        setOpenModal(true)
                                    }}> see more</a>
                            }
                        </td>
                    )
                })
            }
            <Modal
                isOpen={openModal}
                setIsOpen={setOpenModal}
                content={
                    <div className="overflow-x-auto overflow-y-auto" style={{ width: "100%", height: "500px", padding: "10%" }}>
                        <ReactJson src={record} />
                    </div>
                } buttonText={'View Data'}
            />
        </tr>
    )
}

