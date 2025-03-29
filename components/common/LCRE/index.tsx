"use client";

import React from "react";
import { useProgressUpdater } from "./services/useProgressUpdater";

const LCRE = React.memo(() => {
  useProgressUpdater();
  return <></>;
});

LCRE.displayName = "LCRE";

export { LCRE };
