import React from "react";

export default function (props: any) {
  return (
    <>
      <div
        className={props.className}
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></div>
    </>
  );
}
