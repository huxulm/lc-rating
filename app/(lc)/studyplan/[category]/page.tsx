import { STUDYPLANS } from "@/config/constants";
import { lazy } from "react";

const StudyPlan = lazy(() => import("@/components/StudyPlan"));

export async function generateStaticParams() {
  const categories = Object.keys(STUDYPLANS);
  return categories.map((category) => ({
    category,
  }));
}

export default function Page() {
  return <StudyPlan />;
}
