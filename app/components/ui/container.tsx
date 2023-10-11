import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("px-6 mx-auto container max-w-7xl", className)}>
      {children}
    </div>
  );
}
