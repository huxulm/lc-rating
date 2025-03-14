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
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import React, { useCallback } from "react";

interface PageResizerProps {
  options: number[];
  onValueChange: (value: number) => void;
}

const PageResizer = React.memo(
  ({ options, onValueChange }: PageResizerProps) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(options[0]);

    const handleSelect = useCallback(
      (newValue: string) => {
        setValue(parseInt(newValue));
        onValueChange(parseInt(newValue));
        setOpen(false);
      },
      [onValueChange]
    );

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[6em] justify-between"
          >
            {value}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[6em] p-0">
          <Command>
            <CommandList>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option}
                    value={option.toString()}
                    onSelect={handleSelect}
                  >
                    {option}
                    <Check
                      className={cn("ml-auto", {
                        "opacity-0": value !== option,
                      })}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
);

PageResizer.displayName = "PageResizer";
export { PageResizer };
