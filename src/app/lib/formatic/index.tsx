import { Form } from "@/app/components/form/form";
import { getControl } from "./getControl";
import { useForm } from "react-hook-form";
import JSON5 from "json5";

export const Formatic = ({
  schema,
  onSubmit,
}: {
  schema: any[];
  onSubmit: (record: any) => void;
}) => {
  const reFormatValues = (values: any) => {
    schema.map((field) => {
      if (['object', 'array'].includes(field.type)) {
        const fixed = JSON5.parse(values[field.name]);
        values[field.name] = fixed;        
      }
    });
    onSubmit(values);
  }
  const form = useForm();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(reFormatValues)}>
        {schema.map((input) => getControl(input, form.control))}
        <div className="form-group mt-5">
          <button type="submit">Submit</button >
        </div>
      </form>
    </Form>
  );
};
