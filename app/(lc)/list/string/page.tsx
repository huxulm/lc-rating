"use client";

import data from "@components/containers/List/data/string";
import { lazy } from "react";

const List = lazy(() => import("@components/containers/List"));

export default function Page() {
  return <List data={data} />;
}
