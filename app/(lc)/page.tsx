"use client";

import { lazy } from "react";

const ContestList = lazy(() => delay(import("@components/containers/ContestList"), 30))

function delay(fn: Promise<any>, timeout: number) {
  return new Promise<any>(resolve => {
    setTimeout(async () => {
      resolve(await fn)
    }, timeout)
  })
}

export default function Page() {
  return <ContestList />;
}
