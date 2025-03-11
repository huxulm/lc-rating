import type { StudyPlanData } from "@/types";
import { fetchApi } from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

export function useStudyPlan(plan: string) {
  const {
    data: studyPlan,
    isPending,
    error,
  } = useQuery<StudyPlanData.Root>({
    queryKey: [`studyPlan/${plan}`],
    queryFn: () =>
      fetchApi(
        `/studyplan/${plan}.json?t=${(new Date().getTime() / 100000).toFixed(
          0
        )}`
      ).then((res) => res.json()),
    staleTime: 3600 * 1000, // 1 hour
  });

  return { studyPlan, isPending, error };
}
