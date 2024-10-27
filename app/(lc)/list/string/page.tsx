"use client";
import { lazy } from "react";

const List = lazy(() => import("@components/containers/List/String"));

export default function Page() {
  return <List />;
}
