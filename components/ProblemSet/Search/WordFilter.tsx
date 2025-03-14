import { Input } from "@/components/ui/input";
import React, { useCallback, useEffect, useState } from "react";
import { TableCol } from "../ProblemTable/types";
import { FilterFn } from "./type";

const match = (row: TableCol, keyword: string) => {
  const str = `${row.contest?.title || ""} ${row.problem.id} ${
    row.problem.title
  } ${row.solution?.title || ""} ${row.rating || ""} ${row.tags
    .map((t) => `${t.label.en} ${t.label.zh}`)
    ?.join(" ")}`.toLowerCase();

  const kws = keyword
    .toLowerCase()
    .split("")
    .map((kw) => kw.trim());

  return kws.every((kw) => str.includes(kw));
};

interface WordFilterProps {
  idx: string;
  registerReset: (idx: string, reset: () => void) => void;
  registerFilter: (idx: string, newFilter: FilterFn) => void;
}

const WordFilter = React.memo(
  ({ idx, registerReset, registerFilter }: WordFilterProps) => {
    const [value, setValue] = useState("");

    useEffect(() => {
      const onReset = () => {
        setValue("");
      };
      registerReset(idx, onReset);
    }, [registerReset, idx]);

    useEffect(() => {
      registerFilter(idx, (prob: TableCol) => {
        return Number(value === "" || match(prob, value));
      });
    }, [registerFilter, idx, value]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
      },
      []
    );

    return (
      <Input
        type="text"
        placeholder="竞赛、题目、题解搜索"
        value={value}
        onChange={handleChange}
      />
    );
  }
);

WordFilter.displayName = "WordFilter";
export { WordFilter };
