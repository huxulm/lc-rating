"use client";
import { lazy } from "react";

const List = lazy(() => import("@components/containers/List/Trees"));

export default function Page() {
  return <List />;
}
