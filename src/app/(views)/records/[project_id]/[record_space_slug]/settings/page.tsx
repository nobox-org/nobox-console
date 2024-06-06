"use client";
import React, { useState } from "react";
import "./style.scss";
import { ContentTypeIcon } from "@/app/components/ContentType";
import AddNewField from "./components/AddNewField";

export default function Dashboard() {
  const defaultViews = [
    {
      name: "Title",
      type: "TEXT",
      required: true,
      placeHolder: "Enter a title",
    },
    {
      name: "Body",
      type: "NUMBER",
      required: true,
      placeHolder: "Enter a number",
    },
  ];
  const [views, setViews] = useState<any[]>(defaultViews);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [defaultValues, setDefaultValues] = useState<any>(null);
  const toggleModal = () => setOpenModal(!openModal);
  const handleSubmit = (data: any) => {
    console.log(data, "ANOTHER ONE");
    if (data.index || data?.index?.toString() === '0') {
        updateField(data)
    } else {
        addNewField(data);
    }
    setDefaultValues(null);
  };
  const addNewField = (data: any) => {
    const tmp = views;
    tmp.push({
      name: data.name,
      type: data.inputType.toUpperCase(),
    });
    setViews(tmp);
    toggleModal();
  }
  const updateField = (data: any) => {
    const { index , name, inputType } = data;
    const tmp = [...views];
    tmp[index].name = name;
    tmp[index].type = inputType;
    setViews(tmp);
  }
  const removeField = (index: number) => {
    const tmp = [...views];
    tmp.splice(index, 1);
    setViews(tmp);
  };

  const openModalForEdit = (data: any) => {
    const { name, inputType, index } = data;
    setDefaultValues({
        name, inputType, index
    });
    toggleModal()
  }
  return (
    <main className="text-[#292D32] h-full p-[24px]">
      <div>
        <ul className="views">
          <li>
            <div className="flex items-center">
              <div>Name</div>
              <div>Type</div>
            </div>
          </li>
          {views.map((view: any, index: number) => (
            <li key={index}>
              <div className="flex flex-row items-center">
                <div className="flex items-center">
                  <span className=" w-14">{ContentTypeIcon(view.type)}</span>
                  {view.name}
                </div>
                <div className="lowercase">{view.type}</div>
              </div>
              <div className="flex self-end">
                <button onClick={() => openModalForEdit({
                    name: view.name,
                    inputType: view.type,
                    index,
                })}>
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.125"
                      y="0.5"
                      width="31"
                      height="31"
                      rx="3.5"
                      fill="white"
                    />
                    <rect
                      x="1.125"
                      y="0.5"
                      width="31"
                      height="31"
                      rx="3.5"
                      stroke="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.4271 11.757C22.691 12.0209 22.691 12.4367 22.4271 12.7005L21.1158 14.0038L18.6212 11.5092L19.9245 10.1979C20.1883 9.93404 20.6041 9.93404 20.868 10.1979L22.4271 11.757ZM10.625 22V19.5054L17.7251 12.4052L20.2198 14.8999L13.1196 22H10.625Z"
                      fill="#8E8EA9"
                    />
                  </svg>
                </button>
                <button onClick={() => removeField(index)}>
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.33594"
                      y="0.5"
                      width="31"
                      height="31"
                      rx="3.5"
                      fill="white"
                    />
                    <rect
                      x="1.33594"
                      y="0.5"
                      width="31"
                      height="31"
                      rx="3.5"
                      stroke="white"
                    />
                    <path
                      d="M12.5724 13.0744C12.4487 13.0744 12.3546 13.1855 12.3751 13.3075L13.8359 22H19.8359L21.2968 13.3075C21.3173 13.1855 21.2232 13.0744 21.0995 13.0744H12.5724ZM21.6359 10.9917C21.7464 10.9917 21.8359 11.0813 21.8359 11.1917V11.7835C21.8359 11.8939 21.7464 11.9835 21.6359 11.9835H12.0359C11.9255 11.9835 11.8359 11.8939 11.8359 11.7835V11.1917C11.8359 11.0813 11.9255 10.9917 12.0359 10.9917H14.6914C15.1414 10.9917 15.5069 10.4468 15.5069 10H18.1649C18.1649 10.4468 18.5299 10.9917 18.9804 10.9917H21.6359Z"
                      fill="#8E8EA9"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
          <li
            onClick={toggleModal}
            className="flex items-center bg-[#F0F0FF] rounded-bl-md rounded-br-md cursor-pointer"
          >
            <div className="flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#D9D8FF" />
                <path
                  d="M17 12.5685C17 12.6928 16.8993 12.7935 16.775 12.7935H12.7935V16.775C12.7935 16.8993 12.6928 17 12.5685 17H11.4315C11.3072 17 11.2065 16.8993 11.2065 16.775V12.7935H7.225C7.10074 12.7935 7 12.6928 7 12.5685V11.4315C7 11.3072 7.10074 11.2065 7.225 11.2065H11.2065V7.225C11.2065 7.10074 11.3072 7 11.4315 7H12.5685C12.6928 7 12.7935 7.10074 12.7935 7.225V11.2065H16.775C16.8993 11.2065 17 11.3072 17 11.4315V12.5685Z"
                  fill="#4945FF"
                />
              </svg>
              <p className="pl-3">Add another field</p>
            </div>
          </li>
        </ul>
      </div>
      <AddNewField
        open={openModal}
        setOpen={toggleModal}
        onSubmit={handleSubmit}
        defaultValues={defaultValues}
      />
    </main>
  );
}
