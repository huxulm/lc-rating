import { ProgressKeyType, useQuestProgress } from "@hooks/useProgress";
import debounce from "@utils/debounce";
import React, { useEffect, useMemo, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

export default function SyncProgress() {
  const [syncStatus, setSyncStatus] = useState<
    "idle" | "fetched" | "set" | "error"
  >("idle");
  const [inputData, setInputData] = useState("");
  const { allProgress, setAllProgress } = useQuestProgress();

  const allProgressStr = useMemo(
    () => JSON.stringify(allProgress, null, 2),
    [allProgress]
  );

  const onFetchClick = () => {
    setInputData(allProgressStr);
    setSyncStatus("fetched");
  };

  const onSaveClick = () => {
    try {
      const parsedData = JSON.parse(inputData) as Record<
        string,
        ProgressKeyType
      >;
      setAllProgress(parsedData);
      setSyncStatus("set");
    } catch (error) {
      console.error(
        `Error handling Set AllProgress: ` +
          (error instanceof Error ? error.message : error)
      );
      setSyncStatus("error");
    }
  };

  const onCopyClick = () => {
    navigator.clipboard.writeText(allProgressStr);
  };

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const onResize = debounce(() => {
      setWindowHeight(window.innerHeight);
    }, 100);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div>
      <Button onClick={onFetchClick}>下载题目进度</Button>
      {syncStatus === "fetched" && (
        <div className="mt-3 position-relative">
          <Form.Control
            as="textarea"
            rows={windowHeight / 100}
            value={allProgressStr}
            readOnly
            disabled
          />
          <Button
            variant="link"
            className="position-absolute top-0 end-0 p-2"
            onClick={onCopyClick}
            title="Copy to clipboard"
          >
            📋
          </Button>
        </div>
      )}
      <Form.Group className="mt-3">
        <Form.Label>Input Progress Data:</Form.Label>
        <Form.Control
          as="textarea"
          rows={windowHeight / 100}
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
      </Form.Group>
      <Button onClick={onSaveClick} className="mt-2">
        上传题目进度
      </Button>
      {syncStatus === "set" && (
        <Alert variant="success" className="mt-2">
          题目进度上传成功
        </Alert>
      )}
      {syncStatus === "error" && (
        <Alert variant="danger" className="mt-2">
          题目进度上传失败
        </Alert>
      )}
    </div>
  );
}
