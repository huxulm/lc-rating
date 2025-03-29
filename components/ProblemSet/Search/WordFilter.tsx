import { Input } from "@/components/ui/input";
import Fuse from "fuse.js";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TableCol } from "../ProblemTable/types";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@radix-ui/react-label";

const preciseSearch = (data: TableCol[], keyword: string) => {
  return data.map((row) => {
    const str = `${row.contest?.title || ""} ${row.problem.id} ${
      row.problem.title
    } ${row.solution?.title || ""} ${row.rating || ""} ${row.tags
      .map((t) => `${t.label.en} ${t.label.zh}`)
      ?.join(" ")}`.toLowerCase();

    const kws = keyword
      .toLowerCase()
      .split(" ")
      .map((kw) => kw.trim());

    return Number(kws.every((kw) => str.includes(kw)));
  });
};

const options = {
  ignoreDiacritics: true,
  ignoreLocation: true,
  includeScore: true,
  keys: ["contest.title", "problem.title", "problem.id", "solution.title"],
  minMatchCharLength: 1,
  threshold: 1,
};

interface WordFilterProps {
  name: string;
  data: TableCol[];
  onChange: (idx: string, similarties: number[]) => void;
  registerReset: (idx: string, reset: () => void) => void;
}

const WordFilter = React.memo(
  ({ name, data, onChange, registerReset }: WordFilterProps) => {
    const [useFuse, setUseFuse] = useState(true);
    const [value, setValue] = useState("");
    const fuse = useMemo(() => new Fuse(data, options), [data]);

    useEffect(() => {
      const onReset = () => {
        setValue("");
      };
      registerReset(name, onReset);
    }, [registerReset, name]);

    useEffect(() => {
      if (value && useFuse) {
        const matches = fuse.search(value).map((r) => ({
          score: 1 - (r.score ? r.score : 1),
          idx: r.refIndex,
        }));
        const results = Array.from({ length: data.length }, () => 0);
        matches.forEach((m) => {
          results[m.idx] = m.score;
        });
        onChange(name, results);
      } else {
        const results = preciseSearch(data, value);
        onChange(name, results);
      }
    }, [useFuse, fuse, value, data, onChange, name]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
      },
      []
    );

    return (
      <div className="w-full flex flex-col justify-center items-left gap-1">
        <Input
          type="text"
          placeholder="竞赛、题目、题解搜索"
          value={value}
          onChange={handleChange}
        />
        <div className="flex items-center gap-1 p-1">
          <Checkbox
            checked={useFuse}
            onClick={() => {
              setUseFuse((v) => !v);
            }}
            className=""
          />
          <Label>模糊搜索</Label>
        </div>
      </div>
    );
  }
);

WordFilter.displayName = "WordFilter";
export { WordFilter };
