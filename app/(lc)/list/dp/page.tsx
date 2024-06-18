"use client";
import { lazy } from "react";

// const List = dynamic(() => import("@components/containers/List/DynamicPrograming"), {
//   ssr: false,
// });

const List = lazy(() => import("@components/containers/List/DynamicPrograming"))

export default function Page() {
  return <List />;
}
