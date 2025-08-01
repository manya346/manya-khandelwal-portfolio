import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cn } from "@/lib/utils";

export function ToastViewportCustom({ className, ...props }) {
  return (
    <ToastPrimitives.Viewport
      className={cn(
        "fixed top-20 right-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:right-5 md:max-w-[420px]",
        className
      )}
      {...props}
    />
  );
}
