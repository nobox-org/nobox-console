import * as React from "react";
import { cn } from "@/app/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, title, ...props }, ref) => {
    return (
      <div className="form-group">
        <label htmlFor="">{title}</label>
        <input type={type} className={cn("", className)} ref={ref} {...props} />
      </div>
    );
  }
);
Input.displayName = "Input";
export { Input };
