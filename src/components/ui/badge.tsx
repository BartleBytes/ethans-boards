import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = {
  default:
    "inline-flex items-center rounded-full border border-transparent bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground",
  outline:
    "inline-flex items-center rounded-full border border-dashed px-3 py-1 text-xs font-medium",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants[variant], className)} {...props} />
  );
}
