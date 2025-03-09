"use client";

import { FilterFunction, Search } from "@/components/ProblemSet/Search";
import { useJoinProblems } from "@/hooks/useJoinProblems";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ProblemsTable } from "./ProblemTable";
import { isTruthy } from "@/types/common";

function ProblemSet() {
  const { joinProblem, isPending, errors } = useJoinProblems();

  useEffect(() => {
    if (Object.values(errors).filter(isTruthy).length > 0) {
      console.error("[ProblemSet] error: ", errors);
    }
  }, [errors]);

  const [filterFn, setFilterFn] = useState<FilterFunction>(() => () => true);

  const handleSearch = useCallback(
    (filter: FilterFunction) => {
      setFilterFn(() => filter);
    },
    []
  );

  const filtProblems = useMemo(() => {
    return joinProblem.filter((problem) => filterFn(problem));
  }, [joinProblem, filterFn]);

  return (
    <div className="p-8 flex flex-col select-none gap-4">
      <div className="w-1/2 m-auto">
        <Search onSearch={handleSearch}></Search>
      </div>
      <div className="w-full xl:w-3/4  m-auto">
        <ProblemsTable problems={filtProblems} isPending={isPending} />
      </div>
    </div>
  );
}

export default ProblemSet;
