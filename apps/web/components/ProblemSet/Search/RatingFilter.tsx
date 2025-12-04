import { Button } from "@/components/ui-customized/button";
import { Slider } from "@/components/ui/slider";
import React, { useCallback, useEffect, useState } from "react";
import { TableCol } from "../ProblemTable/types";

const buttons = [
  { label: "未知", min: 0, max: 1000 },
  { label: "[1000, 1200)", min: 1000, max: 1200 },
  { label: "[1200, 1400)", min: 1200, max: 1400 },
  { label: "[1400, 1600)", min: 1400, max: 1600 },
  { label: "[1600, 1900)", min: 1600, max: 1900 },
  { label: "[1900, 2100)", min: 1900, max: 2100 },
  { label: "[2100, 2400)", min: 2100, max: 2400 },
  { label: "[2400, 3000)", min: 2400, max: 3000 },
  { label: ">=3000", min: 3000, max: 4000 },
];

interface RatingFilterProps {
  name: string;
  data: TableCol[];
  onChange: (idx: string, similarties: number[]) => void;
  registerReset: (idx: string, reset: () => void) => void;
}

const RatingFilter = React.memo(
  ({ name, data, onChange, registerReset }: RatingFilterProps) => {
    const [range, setRange] = useState<{ min: number; max: number }>({
      min: 0,
      max: 4000,
    });

    useEffect(() => {
      const onReset = () => {
        setRange({
          min: 0,
          max: 4000,
        });
      };
      registerReset(name, onReset);
    }, [registerReset, name]);

    useEffect(() => {
      const results = data.map((row) =>
        Number(row.rating >= range.min && row.rating < range.max)
      );
      onChange(name, results);
    }, [data, range, onChange, name]);

    const handleButtonClick = useCallback(
      (nextMin: number, nextMax: number) => {
        setRange(({ min, max }) => {
          if (min != nextMin || max != nextMax) {
            return { min: nextMin, max: nextMax };
          } else {
            return { min: 0, max: 4000 };
          }
        });
      },
      []
    );

    const handleRangeChange = useCallback((newRange: [number, number]) => {
      setRange({
        min: newRange[0],
        max: newRange[1],
      });
    }, []);

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
        <Slider
          value={[range.min, range.max]}
          onValueChange={handleRangeChange}
          min={1000}
          max={4000}
          step={1}
          minStepsBetweenThumbs={1}
        />
      </div>
    );
  }
);

RatingFilter.displayName = "RatingFilter";
export { RatingFilter };
