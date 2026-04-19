import { cn } from "@/lib/utils";
import * as Popover from "@radix-ui/react-popover";
import {
  cloneElement,
  useCallback,
  useMemo,
  useState,
} from "react";
import { SelectContext } from "./context";
import { SelectOptionProps, isOption } from "./SelectOption";
import { isTrigger } from "./SelectTrigger";
import React from "react";

interface SelectProps {
  placeholder?: string;
  children: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

const Select = ({
  placeholder,
  children,
  value,
  onChange,
  className,
  style,
}: SelectProps) => {
  const [internalValue, setInternalValue] = useState(value || "");
  const [isOpen, setIsOpen] = useState(false);

  const actualValue = value !== undefined ? value : internalValue;

  const { trigger, optionsChildren } = useMemo(() => {
    let trigger: React.ReactElement | null = null;
    const optionsChildren: React.ReactElement<SelectOptionProps>[] = [];
    React.Children.forEach(children, (child) => {
      if (isTrigger(child)) {
        trigger = child;
      } else if (isOption(child)) {
        optionsChildren.push(child);
      }
    });
    return { trigger, optionsChildren };
  }, [children]);

  const options = useMemo(
    () =>
      optionsChildren.map((child) => ({
        value: child.props.value,
        label: child.props.children ?? "",
        element: child,
      })),
    [optionsChildren]
  );

  const displayLabel = useMemo(
    () =>
      options.find((opt) => opt.value === actualValue)?.label ?? placeholder,
    [actualValue, options, placeholder]
  );

  const handleSelect = useCallback(
    (value: string) => {
      onChange?.(value);
      setInternalValue(value);
    },
    [onChange]
  );

  const contextValue = useMemo(
    () => ({
      value: actualValue,
      onSelect: handleSelect,
      isOpen,
      setIsOpen,
      displayLabel,
    }),
    [actualValue, handleSelect, isOpen, displayLabel]
  );

  return (
    <SelectContext.Provider value={contextValue}>
      <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
        <Popover.Trigger asChild>
          <div
            className={cn("relative w-fit", className)}
            style={style}
          >
            {trigger}
          </div>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            sideOffset={4}
            className={cn(
              "z-50 min-w",
              "bg-white dark:bg-black border rounded-sm shadow-md p-1",
            )}
          >
            {optionsChildren.map((child) =>
              cloneElement(child, {
                key: child.props.value,
              })
            )}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </SelectContext.Provider>
  );
};

Select.displayName = "Select";

export { Select };
