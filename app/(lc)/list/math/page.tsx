"use client";
import { lazy } from "react";

const List = lazy(() => import("@components/containers/List/Math"));

export default function Page() {
  return <List />;
}
