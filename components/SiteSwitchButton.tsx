import React from "react";

export default function ({
    lang = "zh",
  ...props
}) {
  return <div className={props.className}> {lang}</div>
}
