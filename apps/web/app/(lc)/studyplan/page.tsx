"use client";

import { STUDY_PLAN_META } from "@/components/common/studyPlanMeta";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// /studyplan/ 本身没有内容，跳转到推荐顺序中的第一个题单。
// 用 replace 而不是 push，避免「后退」又回到这个空页面。
export default function StudyPlanIndex() {
  const router = useRouter();
  useEffect(() => {
    router.replace(STUDY_PLAN_META[0]!.href);
  }, [router]);

  return null;
}
