"use client";
import dynamic from "next/dynamic";

const List = dynamic(() => import("@components/containers/List/DynamicPrograming"), {
  ssr: false,
});

export default function Page() {
  return <List />;
}
