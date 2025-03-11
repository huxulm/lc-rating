import { Button } from "@/components/ui-customized/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useOptions } from "@/hooks/useOptions";
import { useProgress } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import React, { useCallback, useMemo, useState } from "react";

interface ProgressSelectorProps {
  problemId: string;
}

const ProgressSelector = React.memo(({ problemId }: ProgressSelectorProps) => {
  const [open, setOpen] = useState(false);
  const { optionKeys, getOption } = useOptions();
  const { progress, setProgress } = useProgress(problemId);
  const optValue = getOption(progress);

  const handleSelect = useCallback((key: string) => {
    setProgress(key);
    setOpen(false);
  }, []);

  const selectGroup = useMemo(() => {
    return optionKeys.map((key) => {
      const option = getOption(key);
      return (
        <CommandItem
          key={key}
          value={key}
          style={{ color: option.color }}
          onSelect={handleSelect}
        >
          {option.label}
          <Check
            className={cn("ml-auto", {
              "opacity-0": optValue.key !== key,
            })}
          />
        </CommandItem>
      );
    });
  }, [optionKeys, getOption, handleSelect, optValue.key]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="rounded-full flex justify-center cursor-pointer shadow-none px-0"
          style={{ color: optValue.color }}
        >
          <span className="hidden">{optValue.label}</span>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[10em] p-0">
        <Command className="w-[10em]">
          <CommandList>
            <CommandGroup>
              {selectGroup}
              {!optionKeys.includes(optValue.key) && (
                <CommandItem
                  value={optValue.key}
                  style={{ color: optValue.color }}
                  onSelect={handleSelect}
                >
                  {optValue.label}
                  <Check className={cn("ml-auto", "opacity-100")} />
                </CommandItem>
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
});

ProgressSelector.displayName = "ProgressSelector";
export { ProgressSelector };

