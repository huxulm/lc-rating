import useStorage from "@hooks/useStorage";
import React from "react";
import Form from "react-bootstrap/Form";

const host = `https://leetcode.cn`;

function openUrl(url: string) {
  window.open(url, "_blank");
}

interface ContestCellProps {
  title: string;
  titleSlug: string;
}

function ContestCell({ title, titleSlug }: ContestCellProps) {
  const [mark, setMark] = useStorage<string>("__mark", {
    defaultValue: "",
  });

  let link = `${host}/contest/${titleSlug}`;
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    openUrl(link);
  };
  const [ck, setCk] = React.useState<boolean>(mark === titleSlug);
  return (
    <div className={ck ? "col-contest row-selected" : "col-contest"}>
      <a href={link} onClick={onClick}>
        {title}
      </a>
      <Form.Group controlId={titleSlug}>
        <Form.Check
          type="checkbox"
          onChange={(e) => {
            setCk(e.target.checked);
            setMark(e.target.checked ? titleSlug : "");
          }}
          checked={ck}
        />
      </Form.Group>
    </div>
  );
}

export default ContestCell;
