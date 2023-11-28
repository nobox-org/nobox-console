import { useState } from "react";

interface FormInputProps {
  title: string;
  type: "email" | "password" | "text" | "number" | "checkbox";
  name: string;
  value?: string | boolean;
  className?: string;
  required?: boolean;
  onChange: (e: any) => void
}
const FormInput = ({ title, type, name, onChange, className, value, required }: FormInputProps) => {
  return (
    <div className={`mt-[18px] ${className}`}>
      <label htmlFor={type} className="font-[400] text-[16px]">
        {title}
        {
          required ?
            <span className="text-[red]">
              *
            </span> : <></>
        }
      </label>
      {
        type === "password"
          ? <PasswordInput name={name} onChange={onChange} className={className} />
          : type === "checkbox"
            ? <CheckBox name={name} onChange={onChange} className={className} value={value as boolean} />
            : <Input type={type} name={name} onChange={onChange} className={className} />
      }
    </div>
  );
};


type InputProps = Omit<FormInputProps, "title" | "value">;

const Input = ({ type, name, onChange, className }: InputProps) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className={`${className} border border-[#DFE5EC] focus:ring-0 rounded-sm h-[48px] pl-[16px] placeholder:text-[16px] mt-[8px] inputBorder`}
      />
    </div>
  )
}

type CheckBoxProps = Omit<FormInputProps, "type" | "title"> & { value: boolean };

const CheckBox = ({ name, onChange, className, value }: CheckBoxProps) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        className={`${className} border border-[#DFE5EC] focus:ring-0 rounded-sm h-[48px] w-[48px] pl-[16px] placeholder:text-[16px] mt-[8px] inputBorder`}
      />
    </div>
  )
}

type PasswordInputProps = Omit<FormInputProps, "title" | "type" | "value">;


const PasswordInput = ({ name, onChange, className }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        onChange={onChange}
        className={`${className} border border-[#DFE5EC] focus:ring-0 rounded-sm h-[48px] pl-[16px] placeholder:text-[16px] mt-[8px] inputBorder`}
      />
      <p
        className="text-sm absolute right-3 top-5 text-[14px] text-[#404040] font-[450] cursor-pointer"
        onClick={handleTogglePassword}
      >
        {showPassword ? "Hide" : "Show"}
      </p>
    </div>)
}

export default FormInput;
