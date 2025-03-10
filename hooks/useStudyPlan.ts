import type { StudyPlan } from "@/types";
import { fetchApi } from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

export function useStudyPlan(planName: string) {
  const {
    data: studyPlan,
    isPending,
    error,
  } = useQuery<StudyPlan>({
    queryKey: [`studyPlan/${planName}`],
    queryFn: () =>
      fetchApi(
        `/data/${planName}.json?t=${(new Date().getTime() / 100000).toFixed(0)}`
      ).then((res) => res.json()),
  });

  return { studyPlan, isPending, error };
}
