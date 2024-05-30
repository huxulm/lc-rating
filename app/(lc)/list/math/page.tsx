"use client";
import dynamic from "next/dynamic";

const List = dynamic(() => import("@components/containers/List/Math"), {
  ssr: false,
});

export default function Page() {
  return <List />;
}
