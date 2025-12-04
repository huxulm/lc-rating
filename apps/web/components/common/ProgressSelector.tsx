import {
  Select,
  SelectOption,
  SelectTrigger,
} from "@/components/common/Select";
import { OptionKey, useOptions } from "@/hooks/useOptions";
import { useProgress } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import React, { useCallback, useMemo } from "react";

interface ProgressSelectorProps {
  problemId: string;
}

const ProgressSelector = React.memo(({ problemId }: ProgressSelectorProps) => {
  const { optionKeys, getOption } = useOptions();
  const { progress, setProgress, delProgress } = useProgress();
  const todoOption = getOption();
  const optValue = getOption(progress[problemId]);

  const handleSelect = useCallback(
    (key: OptionKey) => {
      if (key === todoOption.key) {
        delProgress(problemId);
      } else {
        setProgress(problemId, key);
      }
    },
    [problemId, todoOption, delProgress, setProgress]
  );

  const selectGroup = useMemo(() => {
    return optionKeys.map((key) => {
      const option = getOption(key);
      return (
        <SelectOption
          key={key}
          value={key}
          className="flex flex-row justify-between items-center gap-2"
          style={{ color: option.color }}
        >
          {option.label}
          <Check
            size={16}
            className={cn("ml-auto", {
              "opacity-0": optValue.key !== key,
            })}
          />
        </SelectOption>
      );
    });
  }, [optionKeys, getOption, optValue.key]);

  return (
    <Select value={optValue.key} onChange={handleSelect}>
      <SelectTrigger
        className={cn(
          "flex flex-row justify-between items-center gap-2",
          "rounded-md w-24",
          "relative"
        )}
        style={{ color: optValue.color }}
      >
        <span className="truncate">{optValue.label}</span>
        <ChevronsUpDown size={16} className="opacity-50 absolute right-1" />
      </SelectTrigger>
      {selectGroup}
      {!optionKeys.includes(optValue.key) && (
        <SelectOption
          value={optValue.key}
          className="flex flex-row"
          style={{ color: optValue.color }}
        >
          <span>{optValue.label}</span>
          <Check />
        </SelectOption>
      )}
    </Select>
  );
});

ProgressSelector.displayName = "ProgressSelector";
export { ProgressSelector };
