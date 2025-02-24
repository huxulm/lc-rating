"use client";

import { lazy } from "react";

const Search = lazy(() => import("@components/containers/Search"));

export default function Page() {
  return <Search />;
}
