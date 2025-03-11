import { lazy } from "react";

const ProblemSet = lazy(() => import("@/components/ProblemSet"));

export default function Page() {
  return <ProblemSet />;
}
