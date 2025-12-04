import { cn } from "@/lib/utils";
import { Trigger } from "@radix-ui/react-navigation-menu";
import {
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
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
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        e.target instanceof Node &&
        !wrapperRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <SelectContext.Provider value={contextValue}>
      <div
        ref={wrapperRef}
        className={cn("relative w-fit", className)}
        style={style}
      >
        {trigger ?? <Trigger />}

        <div
          className={cn(
            "absolute z-10 top-full left-1/2 -translate-x-1/2 translate-y-1",
            "bg-white border rounded-sm shadow-sm p-1",
            {
              "transition-all duration-200 ease-in-out": true,
              "-translate-y-1/2 scale-y-0 opacity-0": !isOpen,
            }
          )}
        >
          {optionsChildren.map((child) =>
            cloneElement(child, {
              key: child.props.value,
            })
          )}
        </div>
      </div>
    </SelectContext.Provider>
  );
};

Select.displayName = "Select";

export { Select };
