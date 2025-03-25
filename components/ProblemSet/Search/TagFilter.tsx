import { Badge } from "@/components/ui/badge";
import { useGlobalSettingsStore } from "@/hooks/useGlobalSettings";
import { useTags } from "@/hooks/useTags";
import React, { useCallback, useEffect, useState } from "react";
import { TableCol } from "../ProblemTable/types";

interface TagFilterProps {
  name: string;
  data: TableCol[];
  onChange: (idx: string, similarties: number[]) => void;
  registerReset: (idx: string, reset: () => void) => void;
}

const TagFilter = React.memo(
  ({ name, data, onChange, registerReset }: TagFilterProps) => {
    const [select, setSelect] = useState<Set<string>>(new Set());
    const tagLanguage = useGlobalSettingsStore((state) => state.tagLanguage);
    const isZh = tagLanguage === "zh";

    useEffect(() => {
      const onReset = () => {
        setSelect(new Set());
      };
      registerReset(name, onReset);
    }, [registerReset, name]);

    useEffect(() => {
      const results = data.map((row) =>
        Number(select.size === 0 || row.tags.some((tag) => select.has(tag.id)))
      );
      onChange(name, results);
    }, [data, select, onChange, name]);

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
