import { Input } from "@/components/ui/input";
import React, { useCallback, useEffect, useState } from "react";
import { TableCol } from "../ProblemTable/types";

const match = (row: TableCol, keyword: string) => {
  const str = `${row.contest?.title || ""} ${row.problem.id} ${
    row.problem.title
  } ${row.solution?.title || ""} ${row.rating || ""} ${row.tags
    .map((t) => `${t.label.en} ${t.label.zh}`)
    ?.join(" ")}`.toLowerCase();

  const kws = keyword
    .toLowerCase()
    .split(" ")
    .map((kw) => kw.trim());

  return kws.every((kw) => str.includes(kw));
};

interface WordFilterProps {
  name: string;
  data: TableCol[];
  onChange: (idx: string, similarties: number[]) => void;
  registerReset: (idx: string, reset: () => void) => void;
}

const WordFilter = React.memo(
  ({ name, data, onChange, registerReset }: WordFilterProps) => {
    const [value, setValue] = useState("");

    useEffect(() => {
      const onReset = () => {
        setValue("");
      };
      registerReset(name, onReset);
    }, [registerReset, name]);

    useEffect(() => {
      const results = data.map((row) => (match(row, value) ? 1 : 0));
      onChange(name, results);
    }, [value, data, onChange, name]);
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
