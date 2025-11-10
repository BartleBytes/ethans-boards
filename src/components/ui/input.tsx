import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-full border border-[#1f2b24]/60 bg-transparent px-4 py-2 text-sm text-[#1f2b24] ring-offset-background placeholder:text-[#1f2b24]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f2b24] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
