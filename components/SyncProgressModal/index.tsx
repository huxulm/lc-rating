import AllProgress from "@components/AllProgress";
import React, { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";

interface SyncProgressModalProps {
  show: boolean;
  onHide: (update: boolean) => void;
}

export default function SyncProgressModal({
  show,
  onHide,
}: SyncProgressModalProps) {
  const [syncStatus, setSyncStatus] = useState<
    "idle" | "fetched" | "set" | "error"
  >("idle");
  const [fetchedData, setFetchedData] = useState("");
  const [inputData, setInputData] = useState("");

  const handleFetch = () => {
    const allProgress = new AllProgress();
    const result = allProgress.getAllProgress();
    setFetchedData(JSON.stringify(result, null, 2));
    setInputData(JSON.stringify(result, null, 2));
    setSyncStatus("fetched");
  };

  const handleSet = () => {
    try {
      const allProgress = new AllProgress();
      const parsedData = JSON.parse(inputData);
      allProgress.setAllProgress(parsedData);
      setSyncStatus("set");
    } catch (error) {
      setSyncStatus("error");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(fetchedData);
  };

  return (
    <Modal
      show={show}
      onHide={() => {
        onHide(syncStatus === "set");
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Sync Progress</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button onClick={handleFetch}>Fetch Progress</Button>
        {syncStatus === "fetched" && (
          <div className="mt-3 position-relative">
            <pre className="bg-light p-3 rounded">
              <code>{fetchedData}</code>
            </pre>
            <Button
              variant="link"
              className="position-absolute top-0 end-0 p-2"
              onClick={handleCopy}
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
            rows={5}
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </Form.Group>
        <Button onClick={handleSet} className="mt-2">
          Set Progress
        </Button>
        {syncStatus === "set" && (
          <Alert variant="success" className="mt-2">
            Progress set successfully!
          </Alert>
        )}
        {syncStatus === "error" && (
          <Alert variant="danger" className="mt-2">
            Error setting progress. Please check the input.
          </Alert>
        )}
      </Modal.Body>
    </Modal>
  );
}
