import { cn } from "@/lib/utils";
import React, { isValidElement, useContext } from "react";
import { SelectContext } from "./context";

export interface SelectOptionProps {
  value: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const SelectOption = React.memo(
  ({ value, children, className, style }: SelectOptionProps) => {
    const {
      value: selectedValue,
      onSelect,
      setIsOpen,
    } = useContext(SelectContext);

    return (
      <div
        className={cn(
          "cursor-pointer rounded-sm px-2 py-1 text-sm hover:bg-accent min-h-6",
          {
            "": selectedValue === value,
          },
          className
        )}
        style={style}
        onClick={() => {
          onSelect(value);
          setIsOpen(false);
        }}
      >
        {children}
      </div>
    );
  }
);

export const isOption = (
  child: React.ReactNode
): child is React.ReactElement<SelectOptionProps> => {
  return isValidElement(child) && child.type === SelectOption;
};

SelectOption.displayName = "SelectOption";

export { SelectOption };
