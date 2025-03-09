import { Skeleton } from "@/components/ui/skeleton";
import { LC_HOST_EN, LC_HOST_ZH } from "@/config/constants";
import { useGlobalSettingsStore } from "@/hooks/useGlobalSettings";
import { JoinProblem } from "@/types";
import { useMemo } from "react";
import { DataTable } from "./DataTable";
import { TableCol } from "./types";

interface ProblemsTableProps {
  problems: JoinProblem[];
  isPending: boolean;
}

export function ProblemsTable({ problems, isPending }: ProblemsTableProps) {
  const { language } = useGlobalSettingsStore();
  const isZh = language === "zh";

  const tableData: TableCol[] = useMemo(() => {
    const LC_HOST = isZh ? LC_HOST_ZH : LC_HOST_EN;
    return problems.map((problem) => {
      return {
        contest: {
          id: problem.contest?.id || "",
          title: problem.contest?.title || "",
          titleSlug: problem.contest
            ? `${LC_HOST}/contest/${problem.contest.titleSlug}`
            : "",
          time: problem.contest?.time || 0,
          company: problem.contest?.company || {},
        },
        problem: {
          id: problem.id,
          title: problem.title,
          titleSlug: `${LC_HOST}/problems/${problem.titleSlug}`,
          rating: problem.rating,
          premium: problem.premium,
          _hash: problem._hash,
        },
        rating: problem.rating,
        tags: problem.tags.map((tag) => (isZh ? tag.zh : tag.en)),
        progress: {
          problemId: problem.id,
        },
        solution: {
          id: problem.solution?.id || "",
          title: problem.solution?.title || "",
          titleSlug: problem.solution
            ? `${LC_HOST}/problems/${problem.titleSlug}/solution/${problem.solution.titleSlug}`
            : "",
          time: problem.solution?.time || 0,
        },
      };
    });
  }, [problems, isZh]);

  return (
    <div className="rounded-md border">
      {isPending ? (
        <div className="space-y-2 p-4">
          <Skeleton className="h-8 w-1/1" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-8 w-5/6" />
          <Skeleton className="h-8 w-4/5" />
          <Skeleton className="h-8 w-1/1" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-8 w-5/6" />
          <Skeleton className="h-8 w-4/5" />
        </div>
      ) : (
        <>
          <DataTable data={tableData} />
        </>
      )}
    </div>
  );
}
