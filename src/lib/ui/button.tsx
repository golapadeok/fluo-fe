import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-main-600 text-sub-white focus-visible:bg-main-800 border hover:bg-main-800 active:bg-main-800",
        secondary: "bg-main-100 text-main-600 focus-visible:bg-main-200 hover:bg-main-200 active:bg-main-200",
        outline:
          "bg-white shadow-[0_0_0_1px_var(--main-600)] text-main-600 border focus-visible:bg-bg-secondary hover:bg-bg-secondary active:bg-bg-secondary active:shadow-[0_0_0_1.5px_var(--main-600)]",
        ghost: "bg-transparent text-zinc-400 hover:bg-zinc-200 hover:text-black focus-visible:bg-zinc-200 active:bg-zinc-200 active:text-black",
        destructive: "bg-error-base text-sub-white hover:bg-error-hover focus-visible:bg-error-hover active:bg-error-active",
        destructive_outline:
          "bg-bg-primary shadow-[0_0_0_1px_var(--sub-red)] text-sub-red hover:bg-error-muted active:bg-error-muted active:shadow-[0_0_0_1.5px_var(--sub-red)] focus-visible:bg-error-muted focus-visible:shadow-[0_0_0_1.5px_var(--sub-red)]",
      },
      text: {
        default: "text-sm font-semibold",
        md: "text-md font-bold",
      },
      size: {
        default: "py-3 px-4",
        sm: "py-2 px-3",
        lg: "py-3 px-6",
        xl: "py-[14px] px-[88px] rounded-[26px] shadow-4",
      },
    },
    defaultVariants: {
      variant: "ghost",
      text: "default",
      size: "default",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, text, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, text, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
