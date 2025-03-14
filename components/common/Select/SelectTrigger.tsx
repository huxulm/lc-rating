import { cn } from "@/lib/utils";
import React, {
  cloneElement,
  isValidElement,
  useCallback,
  useContext,
} from "react";
import { SelectContext } from "./context";

interface SelectTriggerAsChildProps {
  asChild: true;
  children: React.ReactElement<{
    onClick?: React.MouseEventHandler;
    className?: string;
    style?: React.CSSProperties;
  }>;
}

interface SelectTriggerDefaultProps {
  asChild?: false;
  children?: React.ReactNode;
}

export type TriggerProps = {
  className?: string;
  style?: React.CSSProperties;
} & (SelectTriggerAsChildProps | SelectTriggerDefaultProps);

const SelectTrigger = React.memo((props: TriggerProps) => {
  const { displayLabel, setIsOpen, isOpen } = useContext(SelectContext);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (props.asChild) {
        props.children.props.onClick?.(e);
      }

      if (!e.defaultPrevented) {
        setIsOpen(!isOpen);
      }
    },
    [isOpen, setIsOpen, props.asChild, props.children]
  );

  if (props.asChild) {
    if (!isValidElement(props.children)) {
      throw new Error("Trigger的asChild为true时，必须传递一个有效的React元素");
    }

    return cloneElement(props.children, {
      onClick: handleClick,
      className: cn(props.children.props.className, props.className),
      style: { ...props.children.props.style, ...props.style },
    });
  } else {
    return (
      <button
        type="button"
        className={cn(
          "border px-2 py-1 rounded-sm",
          "w-fit min-w-18 min-h-8",
          "text-sm",
          props.className
        )}
        style={props.style}
        onClick={() => setIsOpen(!isOpen)}
      >
        {(props.children as React.ReactNode) ?? displayLabel}
      </button>
    );
  }
});

export const isTrigger = (
  child: React.ReactNode
): child is React.ReactElement<TriggerProps> => {
  return isValidElement(child) && child.type === SelectTrigger;
};

SelectTrigger.displayName = "SelectTrigger";

export { SelectTrigger };
