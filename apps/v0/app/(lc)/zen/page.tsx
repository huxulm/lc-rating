"use client";

import { lazy } from "react";

const Zen = lazy(() => import("@components/containers/Zen"));

export default function Page() {
  return <Zen />;
}
