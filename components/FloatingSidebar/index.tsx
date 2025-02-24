import React from "react";
import Stack from "react-bootstrap/Stack";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export interface FloatingItem {
  id: string;
  content: React.ReactNode;
  tooltip?: string;
  position?: "sticky" | "fixed";
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
  console.log(children);

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

interface FloatingSidebarProps {
  items: FloatingItem[];
  position?: "top" | "center" | "bottom";
  initialOffset?: { x: string; y: string };
  gap?: number;
  hoverEffect?: boolean;
}

const FloatingSidebar: React.FC<FloatingSidebarProps> = ({
  items,
  position = "center",
  initialOffset = { x: "1rem", y: "0" },
  gap = 2,
  hoverEffect = true,
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
    <Stack gap={gap} className="position-fixed" style={containerPosition()}>
      {items.map((item) => (
        <div
          key={item.id}
          className={`${hoverEffect ? "hover-scale" : ""}`}
          style={{
            position: item.position || "relative",
            right: item.offset?.x,
            top: item.offset?.y,
            transition: "transform 0.2s ease",
            cursor: "pointer",
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

export default FloatingSidebar;
