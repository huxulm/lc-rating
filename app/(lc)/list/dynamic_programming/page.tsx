"use client";
import { lazy } from "react";
import data from "@components/containers/List/data/dynamic_programming";

const List = lazy(() => import("@components/containers/List"));

export default function Page() {
  return <List data={data} />;
}
