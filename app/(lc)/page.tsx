"use client";
import dynamic from "next/dynamic";

const ContestList = dynamic(
  () => import("@components/containers/ContestList"),
  {
    ssr: false,
  }
);

export default function Page() {
  return <ContestList />;
}
