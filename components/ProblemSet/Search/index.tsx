import { Button } from "@/components/ui-customized/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import React, { useCallback, useState } from "react";
import { TableCol } from "../ProblemTable/types";
import { RatingFilter } from "./RatingFilter";
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
      <div className="flex justify-between space-x-4 px-4">
        <WordFilter
          name={"WordFilter"}
          data={data}
          registerReset={updateReset}
          onChange={updateIndices}
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
            name={"RatingFilter"}
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
