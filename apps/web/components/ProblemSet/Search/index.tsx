import { Button } from "@/components/ui-customized/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { TableCol } from "../ProblemTable/types";
import { RatingFilter } from "./RatingFilter";
import { ProgressFilter } from "./ProgressFilter";
import { TagFilter } from "./TagFilter";
import { WordFilter } from "./WordFilter";

interface SearchProps {
  data: TableCol[];
  onSearch: (similarties: number[]) => void;
}

const Search = React.memo(({ data, onSearch }: SearchProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [similartiesMap, setSimilartiesMap] = useState<
    Record<string, number[]>
  >({});
  const [resets, setResets] = useState<Record<string, () => void>>({});
  const handleConfirmRef = useRef<(() => void) | null>(null);

  const updateIndices = useCallback(
    (name: string, newSimilarties: number[]) => {
      setSimilartiesMap((prev) => {
        const next = { ...prev };
        next[name] = newSimilarties;
        return next;
      });
    },
    []
  );

  const updateReset = useCallback((idx: string, newReset: () => void) => {
    setResets((prev) => {
      const next = { ...prev };
      next[idx] = newReset;
      return next;
    });
  }, []);

  const handleConfirm = useCallback(() => {
    const results = Object.values(similartiesMap).reduce(
      (total, arr) => {
        arr.forEach((val, idx) => {
          if (total[idx]) {
            total[idx] *= val;
          }
        });
        return total;
      },
      Array.from({ length: data.length }, () => 1)
    );

    onSearch(results);
  }, [similartiesMap, data.length, onSearch]);

  useEffect(() => {
    handleConfirmRef.current = handleConfirm;
  }, [handleConfirm]);

  const debouncedConfirm = useCallback(() => {
    if (handleConfirmRef.current) {
      handleConfirmRef.current();
    }
  }, []);

  const handleReset = useCallback(() => {
    Object.values(resets).forEach((fn) => fn?.());
    setSimilartiesMap({});
    onSearch(data.map((_, idx) => idx));
  }, [resets, onSearch, data]);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="space-y-2 m-auto"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-start">
        <div className="min-w-0 flex-1">
          <WordFilter
            name={"WordFilter"}
            data={data}
            registerReset={updateReset}
            onChange={updateIndices}
          />
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="text-muted-foreground">
              {isOpen ? (
                <ChevronsDownUp className="h-4 w-4" />
              ) : (
                <ChevronsUpDown className="h-4 w-4" />
              )}
              <span>{isOpen ? "收起筛选" : "更多筛选"}</span>
            </Button>
          </CollapsibleTrigger>
          <Button
            onClick={handleReset}
            variant="outline"
            className="cursor-pointer"
          >
            重置
          </Button>
          <Button
            onClick={handleConfirm}
            variant="default"
            className="cursor-pointer"
          >
            确认
          </Button>
        </div>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="flex flex-col items-start gap-4 pt-2">
          <Separator />
          <RatingFilter
            name={"RatingFilter"}
            data={data}
            registerReset={updateReset}
            onChange={updateIndices}
            onDebouncedConfirm={debouncedConfirm}
          />
          <Separator />
          <ProgressFilter
            name={"ProgressFilter"}
            data={data}
            registerReset={updateReset}
            onChange={updateIndices}
          />
          <Separator />
          <TagFilter
            name={"TagFilter"}
            data={data}
            registerReset={updateReset}
            onChange={updateIndices}
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
});

Search.displayName = "Search";
export { Search };
