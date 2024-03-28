import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex rounded-lg border border-zinc-300 bg-bg-primary text-[#818181] px-5 py-[14px] text-sm font-medium file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-placeholder focus-visible:border-main-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-shadow",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
