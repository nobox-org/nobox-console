import React, { useEffect } from "react";
import Modal from "@/app/components/Modal";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type NewField = {
  onSubmit: (data: any) => void;
  open: boolean;
  setOpen: any;
  defaultValues?: {
    name: string;
    inputType: "TEXT" | "NUMBER" | "IMAGE" | "EDITOR";
    index: number;
  };
};
export default function AddNewField({
  onSubmit,
  open,
  setOpen,
  defaultValues,
}: NewField) {
  const NewFieldSchema = z.object({
    name: z.string(),
    inputType: z.enum(["TEXT", "NUMBER", "IMAGE", "EDITOR"]),
    index: z.number().optional(),
  });

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof NewFieldSchema>>({
    resolver: zodResolver(NewFieldSchema),
    defaultValues: {
      name: defaultValues?.name ?? "",
      inputType: defaultValues?.inputType ?? undefined,
    },
  });

  if (defaultValues) {
    setValue("name", defaultValues.name);
    setValue("inputType", defaultValues.inputType);
    setValue("index", defaultValues.index);
  }

  const submitForm: SubmitHandler<z.infer<typeof NewFieldSchema>> = async (
    data
  ) => {
    onSubmit(data);
    console.log(data);

    setOpen();
    reset({
      name: "",
      inputType: undefined,
    });
  };

  return (
    <Modal isOpen={open} setIsOpen={setOpen} buttonText="Open">
      <div className="p-8">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input type="text" {...register("name")} />
            {errors.name && (
              <small className="text-danger">Field name is required</small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="">Field type</label>
            <select {...register("inputType")}>
              <option value=""></option>
              <option value="TEXT">Text</option>
              <option value="NUMBER">Number</option>
              <option value="IMAGE">Image</option>
              <option value="EDITOR">Rich text</option>
              <option value="JSON">Json</option>
              <option value="CODE">Code</option>
            </select>
            {errors.inputType && (
              <small className="text-danger">Input type is required</small>
            )}
          </div>
          <div className="form-group">
            <button type="submit">Finish</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
