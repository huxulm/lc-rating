"use client";
import { lazy } from "react";

const List = lazy(() => import("@components/containers/List/Graph"));

export default function Page() {
  return <List />;
}
