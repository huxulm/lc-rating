import { STUDYPLANS } from "@/config/constants";
import { lazy } from "react";

const StudyPlan = lazy(() => import("@/components/StudyPlan"));

export async function generateStaticParams() {
  const categories = Object.keys(STUDYPLANS);
  return categories.map((category) => ({
    category,
  }));
}

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function Page({ params }: PageProps) {
  const { category } = await params;
  return <StudyPlan plan={category} />;
}
