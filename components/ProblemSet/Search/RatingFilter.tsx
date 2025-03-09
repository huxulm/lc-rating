import { Button } from "@/components/ui/button";
import { JoinProblem } from "@/types";
import React, { useCallback, useEffect, useState } from "react";
import { FilterFn } from "./type";

const buttons = [
  { label: "未知", min: 0, max: 1000 },
  { label: "[1000, 1200)", min: 1000, max: 1200 },
  { label: "[1200, 1400)", min: 1200, max: 1400 },
  { label: "[1400, 1600)", min: 1400, max: 1600 },
  { label: "[1600, 1900)", min: 1600, max: 1900 },
  { label: "[1900, 2100)", min: 1900, max: 2100 },
  { label: "[2100, 2400)", min: 2100, max: 2400 },
  { label: "[2400, 3000)", min: 2400, max: 3000 },
  { label: ">=3000", min: 3000, max: Infinity },
];

interface RatingFilterProps {
  idx: number;
  registerReset: (idx: number, reset: () => void) => void;
  registerFilter: (idx: number, newFilter: FilterFn) => void;
}

const RatingFilter = React.memo(
  ({ idx, registerReset, registerFilter }: RatingFilterProps) => {
    const [range, setRange] = useState<{ min: number; max: number }>({
      min: 0,
      max: Infinity,
    });

    useEffect(() => {
      const onReset = () => {
        setRange({
          min: 0,
          max: Infinity,
        });
      };
      registerReset(idx, onReset);
    }, [registerReset]);

    useEffect(() => {
      registerFilter(idx, (prob: JoinProblem) => {
        return prob.rating >= range.min && prob.rating < range.max;
      });
    }, [registerFilter, range]);

    const handleButtonClick = useCallback(
      (nextMin: number, nextMax: number) => {
        setRange(({ min, max }) => {
          if (min != nextMin || max != nextMax) {
            return { min: nextMin, max: nextMax };
          } else {
            return { min: 0, max: Infinity };
          }
        });
      },
      []
    );

    return (
      <div className="flex flex-wrap gap-2">
        {buttons.map((button, i) => (
          <Button
            key={i}
            variant={
              range.min === button.min && range.max === button.max
                ? "default"
                : "outline"
            }
            onClick={() => {
              handleButtonClick(button.min, button.max);
            }}
          >
            {button.label}
          </Button>
        ))}
      </div>
    );
  }
);

RatingFilter.displayName = "RatingFilter";
export { RatingFilter };
