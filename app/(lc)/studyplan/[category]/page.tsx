import { lazy } from "react";

const StudyPlan = lazy(() => import("@/components/StudyPlan"));

export default function Page() {
  return <StudyPlan />;
}

export async function generateStaticParams() {
  const categories = [
    "binary-search",
    "bitwise-operations",
    "data_structure",
    "dynamic_programming",
    "graph",
    "greedy",
    "grid",
    "math",
    "monotonic_stack",
    "slide_window",
    "string",
    "trees",
  ];
  return categories.map((category) => ({
    category,
  }));
}
