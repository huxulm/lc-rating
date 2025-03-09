import { lazy } from "react";

const Contest = lazy(() => import("@/components/Contest"));

export default function Page() {
  return <Contest />;
}
