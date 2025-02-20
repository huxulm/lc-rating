"use client";
import { lazy } from "react";
import data from "@components/containers/List/data/binary_search";

const List = lazy(() => import("@components/containers/List"));

export default function Page() {
  return <List data={data} />;
}
