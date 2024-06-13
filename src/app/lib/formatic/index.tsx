import { Form } from "@/app/components/form/form";
import { getControl } from "./getControl";
import { useForm } from "react-hook-form";

export const Formatic = ({
  schema,
  onSubmit,
}: {
  schema: any[];
  onSubmit: (record: any) => void;
}) => {
  const form = useForm();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {schema.map((input) => getControl(input, form.control))}
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </Form>
  );
};
