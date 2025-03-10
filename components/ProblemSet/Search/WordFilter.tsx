import { Input } from "@/components/ui/input";
import { JoinProblem } from "@/types";
import React, { useCallback, useEffect, useState } from "react";
import { FilterFn } from "./type";

const match = (prob: JoinProblem, keyword: string) => {
  const str = `${prob.contest?.title || ""} ${prob.id} ${prob.title} ${
    prob.solution?.title || ""
  } ${prob.rating || ""} ${prob.tags
    .map((t) => `${t.en} ${t.zh}`)
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
    }, [registerReset]);

    useEffect(() => {
      registerFilter(idx, (prob: JoinProblem) => {
        return Number(value === "" || match(prob, value));
      });
    }, [registerFilter, value]);

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
