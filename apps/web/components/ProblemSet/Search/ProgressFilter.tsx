import { Badge } from "@/components/ui/badge";
import { useOptions, OptionKey } from "@/hooks/useOptions";
import { useProgress } from "@/hooks/useProgress";
import React, { useCallback, useEffect, useState } from "react";
import { TableCol } from "../ProblemTable/types";

interface ProgressFilterProps {
  name: string;
  data: TableCol[];
  onChange: (idx: string, similarties: number[]) => void;
  registerReset: (idx: string, reset: () => void) => void;
}

const ProgressFilter = React.memo(
  ({ name, data, onChange, registerReset }: ProgressFilterProps) => {
    const [selectedKeys, setSelectedKeys] = useState<Set<OptionKey>>(new Set());
    const { optionKeys, getOption } = useOptions();
    const { progress } = useProgress();
    const todoKey = getOption().key;

    useEffect(() => {
      const onReset = () => {
        setSelectedKeys(new Set());
      };
      registerReset(name, onReset);
    }, [registerReset, name]);

    useEffect(() => {
      const results = data.map((row) => {
        if (selectedKeys.size === 0) return 1;
        const problemId = row.progress.problemId;
        const currentProgress = progress[problemId] || todoKey;
        return Number(selectedKeys.has(currentProgress));
      });
      onChange(name, results);
    }, [data, selectedKeys, onChange, name, progress, todoKey]);

    const handleToggle = useCallback(
      (key: OptionKey) => {
        setSelectedKeys((prev) => {
          const next = new Set(prev);
          if (next.has(key)) {
            next.delete(key);
          } else {
            next.add(key);
          }
          return next;
        });
      },
      []
    );

    return (
      <div className="flex flex-wrap justify-center gap-2">
        {optionKeys.map((key) => {
          const option = getOption(key);
          return (
            <Badge
              key={key}
              variant={selectedKeys.has(key) ? "default" : "outline"}
              onClick={() => handleToggle(key)}
              className="cursor-pointer text-sm"
              style={{
                backgroundColor: selectedKeys.has(key) ? option.color : "transparent",
                color: selectedKeys.has(key) ? "white" : option.color,
                borderColor: option.color,
              }}
            >
              {option.label}
            </Badge>
          );
        })}
      </div>
    );
  }
);

ProgressFilter.displayName = "ProgressFilter";
export { ProgressFilter };
