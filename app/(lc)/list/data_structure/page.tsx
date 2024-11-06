"use client";
import dynamic from "next/dynamic";
import { lazy } from "react";

const List = lazy(() => import("@components/containers/List/DataStructure"));

export default function Page() {
  return <List />;
}
