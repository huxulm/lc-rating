import { Badge } from "@/components/ui/badge";
import { useGlobalSettingsStore } from "@/hooks/useGlobalSettings";
import { useTags } from "@/hooks/useTags";
import { JoinProblem } from "@/types";
import React, { useCallback, useEffect, useState } from "react";
import { FilterFn } from "./type";

interface TagFilterProps {
  idx: string;
  registerReset: (idx: string, reset: () => void) => void;
  registerFilter: (idx: string, newFilter: FilterFn) => void;
}

const TagFilter = React.memo(
  ({ idx, registerReset, registerFilter }: TagFilterProps) => {
    const [select, setSelect] = useState<Set<string>>(new Set());
    const { language } = useGlobalSettingsStore();
    const isZh = language === "zh";

    useEffect(() => {
      const onReset = () => {
        setSelect(new Set());
      };
      registerReset(idx, onReset);
    }, [registerReset, idx]);

    useEffect(() => {
      registerFilter(idx, (prob: JoinProblem) => {
        return Number(
          select.size === 0 || prob.tags.some((tag) => select.has(tag.id))
        );
      });
    }, [registerFilter, idx, select]);

    const handleChange = useCallback(
      (id: string) => {
        const newSelect = new Set(select);
        if (newSelect.has(id)) {
          newSelect.delete(id);
        } else {
          newSelect.add(id);
        }
        setSelect(newSelect);
      },
      [select]
    );

    const { tagMap = {} } = useTags();

    return (
      <div className="flex flex-wrap justify-center gap-1">
        {Object.values(tagMap).map((tag) => (
          <Badge
            key={tag.id}
            variant={select.has(tag.id) ? "default" : "outline"}
            onClick={() => {
              handleChange(tag.id);
            }}
            className="text-sm"
          >
            {isZh ? tag.zh : tag.en}
          </Badge>
        ))}
      </div>
    );
  }
);

TagFilter.displayName = "TagFilter";
export { TagFilter };
