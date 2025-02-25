"use client";

import data from "@components/containers/List/data/greedy";
import { lazy } from "react";

const List = lazy(() => import("@components/containers/List"));

export default function Page() {
  return <List data={data} />;
}
