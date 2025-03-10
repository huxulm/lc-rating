"use client";

import { useJoinProblems } from "@/hooks/useJoinProblems";
import { isTruthy } from "@/types/common";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ProblemsTable } from "./ProblemTable";
import { FilterFn, Search } from "./Search";
import { JoinProblem } from "@/types";

function ProblemSet() {
  const { joinProblem, isPending, errors } = useJoinProblems();

  useEffect(() => {
    if (Object.values(errors).filter(isTruthy).length > 0) {
      console.error("[ProblemSet] error: ", errors);
    }
  }, [errors]);

  const [filterFn, setFilterFn] = useState<FilterFn>(() => () => 1);

  const handleSearch = useCallback((filter: FilterFn) => {
    setFilterFn(() => filter);
  }, []);

  const sortProblems = useMemo(() => {
    const filtProblems = joinProblem.reduce(
      (acc: [number, JoinProblem][], problem: JoinProblem) => {
        const sort = filterFn(problem);
        if (sort > 0) {
          acc.push([sort, problem]);
        }
        return acc;
      },
      []
    );
    const sortProblems = filtProblems
      .sort((a, b) => b[0] - a[0])
      .map(([_, problem]) => problem);
    return sortProblems;
  }, [joinProblem, filterFn]);

  return (
    <div className="p-8 flex flex-col gap-4">
      <div className="w-4/5 xl:w-3/4 2xl:w-2/3 m-auto">
        <Search onSearch={handleSearch}></Search>
      </div>
      <div className="w-full 2xl:w-2/3  m-auto">
        <ProblemsTable problems={sortProblems} isPending={isPending} />
      </div>
    </div>
  );
}

export default ProblemSet;
