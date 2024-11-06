"use client";
import { lazy } from "react";

const List = lazy(() => import("@components/containers/List/BinarySearch"));

export default function Page() {
  return <List />;
}
