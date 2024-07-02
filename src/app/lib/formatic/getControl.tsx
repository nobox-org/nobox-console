"use client";
import Editor from "@/app/components/editor/Editor";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/app/components/form/form";
import { Input } from "@/app/components/form/input";

type ControlType = {
  label?: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  description?: string;
  value?: string;
};

export const getControl: any = (props: ControlType, formControl: any) => {
  const { name, placeholder, label } = props;

  return (
    <FormField
      key={name}
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem key={name}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <>
              {props.type === "editor" && <Editor id={props.name} {...field} />}
              {["text", "email", "number", "checkbox"].includes(props.type) && (
                <Input
                  type={props.type}
                  placeholder={placeholder ?? ""}
                  {...field}
                />
              )}
              {["object", "array"].includes(props.type) && (
                <div className="form-group">
                  <CodeMirror height="100px" extensions={[javascript({ jsx: true })]} {...field} />
                </div>
              )}
            </>
          </FormControl>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
};
