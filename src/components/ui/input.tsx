import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  icon,
  wrapperClassName,
  ...props
}: React.ComponentProps<"input"> & { icon?: React.ReactNode, wrapperClassName?: string }) {
  return (
    <div className={cn("shadow-xl shadow-[#919EAB29] rounded-lg bg-white p-2 px-4 flex", wrapperClassName)}>
      <input
        type={type}
        data-slot="input"
        className={cn("w-full outline-none", className)}
        {...props}
      />
      {icon && icon}
    </div>
  );
}

export { Input };
