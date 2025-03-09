import { Input } from "@/components/ui/input";
import { JoinProblem } from "@/types";
import React, { useCallback, useEffect, useState } from "react";
import { FilterFn } from "./type";

const match = (prob: JoinProblem, keyword: string) => {
  const str = `${prob.contest?.title || ""} ${prob.id} ${prob.title} ${
    prob.solution?.title || ""
  }`;
  return str.toLowerCase().includes(keyword.toLowerCase());
};

interface WordFilterProps {
  idx: number;
  registerReset: (idx: number, reset: () => void) => void;
  registerFilter: (idx: number, newFilter: FilterFn) => void;
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
        return value === "" || match(prob, value);
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
