import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

export interface FixedItem {
  id: string;
  content: React.ReactNode;
  tooltip?: string;
  offset?: { x?: string; y?: string };
}

interface TooltipWrapperProps {
  id: string;
  children: React.ReactNode;
  tooltip?: string;
}

const TooltipWrapper: React.FC<TooltipWrapperProps> = ({
  id,
  children,
  tooltip,
}) => {
  return tooltip ? (
    children && (
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip id={`tooltip-${id}`}>{tooltip}</Tooltip>}
      >
        <div>{children}</div>
      </OverlayTrigger>
    )
  ) : (
    <>{children}</>
  );
};

interface FixedSidebarProps {
  items: FixedItem[];
  position?: "top" | "center" | "bottom";
  direction?: "vertical" | "horizontal";
  initialOffset?: { x: string; y: string };
  gap?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FixedSidebar: React.FC<FixedSidebarProps> = ({
  items,
  position = "center",
  direction = "vertical",
  initialOffset = { x: "1rem", y: "0" },
  gap = 2,
  className,
  style,
}) => {
  const containerPosition = () => {
    const baseStyle = {
      right: initialOffset.x,
      zIndex: 1050,
    };

    switch (position) {
      case "top":
        return { ...baseStyle, top: initialOffset.y };
      case "bottom":
        return { ...baseStyle, bottom: initialOffset.y };
      default: // center
        return {
          ...baseStyle,
          top: "50%",
          transform: `translateY(${initialOffset.y})`,
        };
    }
  };

  return (
    <Stack
      gap={gap}
      direction={direction}
      className={`position-fixed ${className}`}
      style={{ ...containerPosition(), ...style }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            right: item.offset?.x,
            top: item.offset?.y,
            transition: "transform 0.2s ease",
          }}
        >
          <TooltipWrapper id={item.id} tooltip={item.tooltip}>
            {item.content}
          </TooltipWrapper>
        </div>
      ))}
    </Stack>
  );
};

export default FixedSidebar;
