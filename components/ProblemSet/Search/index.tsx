import { Button } from "@/components/ui-customized/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { isTruthy } from "@/types/common";
import { parallelReduceFn } from "@/utils/function";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import React, { useCallback, useState } from "react";
import { RatingFilter } from "./RatingFilter";
import { TagFilter } from "./TagFilter";
import type { FilterFn, ResetFn } from "./type";
import { WordFilter } from "./WordFilter";

export { FilterFn };

interface SearchProps {
  onSearch: (filterFn: FilterFn) => void;
}

const Search = React.memo(({ onSearch }: SearchProps) => {
  const [filters, setFilters] = useState<Record<string, FilterFn | undefined>>(
    {}
  );
  const [resets, setResets] = useState<Record<string, () => void | undefined>>(
    {}
  );

  const [isOpen, setIsOpen] = React.useState(false);

  const updateFilter = useCallback((idx: string, newFilter: FilterFn) => {
    setFilters((prev) => {
      const next = { ...prev };
      next[idx] = newFilter;
      return next;
    });
  }, []);

  const updateReset = useCallback((idx: string, newReset: ResetFn) => {
    setResets((prev) => {
      const next = { ...prev };
      next[idx] = newReset;
      return next;
    });
  }, []);

  const handleConfirm = useCallback(() => {
    onSearch((item) =>
      parallelReduceFn(
        Object.values(filters).filter(isTruthy),
        (x, y) => x * y,
        1
      )(item)
    );
  }, [onSearch, filters]);

  const handleReset = useCallback(() => {
    setFilters({});
    onSearch(() => 1);
    Object.values(resets).forEach((fn) => fn?.());
  }, [onSearch, resets]);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="space-y-2 m-auto"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <WordFilter
          idx={"WordFilter"}
          registerReset={updateReset}
          registerFilter={updateFilter}
        />
        <CollapsibleTrigger asChild>
          {isOpen ? (
            <Button variant="outline" size="sm">
              <ChevronsDownUp className="h-4 w-4" />
              <span>收起</span>
            </Button>
          ) : (
            <Button variant="outline" size="sm">
              <ChevronsUpDown className="h-4 w-4" />
              <span>展开</span>
            </Button>
          )}
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="flex flex-col items-start gap-4 p-4">
          <Separator />
          <RatingFilter
            idx={"RatingFilter"}
            registerReset={updateReset}
            registerFilter={updateFilter}
          />
          <Separator />
          <TagFilter
            idx={"TagFilter"}
            registerReset={updateReset}
            registerFilter={updateFilter}
          />
        </div>
      </CollapsibleContent>
      <div className="flex justify-center gap-4">
        <Button
          onClick={handleConfirm}
          variant="default"
          className="cursor-pointer"
        >
          确认
        </Button>
        <Button
          onClick={handleReset}
          variant="destructive"
          className="cursor-pointer"
        >
          重置
        </Button>
      </div>
    </Collapsible>
  );
});

Search.displayName = "Search";
export { Search };
