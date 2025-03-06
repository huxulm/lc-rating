import { defaultOptions, OptionEntry } from "@hooks/useProgress";
import { useMemo, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";

function partition<T>(array: T[], filter: (item: T) => boolean): [T[], T[]] {
  return array.reduce(
    (acc, item) => {
      acc[Number(filter(item))].push(item);
      return acc;
    },
    [[], []] as [T[], T[]]
  );
}

interface OptionsFormProps {
  formData: OptionEntry[];
  onChange: (formData: OptionEntry[]) => void;
  onSubmit: () => void;
}

function OptionsForm({ formData, onChange, onSubmit }: OptionsFormProps) {
  const [submitErrors, setSubmitErrors] = useState<string[]>([]);

  const sortedFormData = useMemo(() => {
    const [customEntries, defaultEntries] = partition(
      formData,
      (item) => item.key in defaultOptions
    );
    return [...defaultEntries, ...customEntries];
  }, [formData]);

  const handleKeyChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    idx: number
  ) => {
    const newData = [...sortedFormData];
    newData[idx] = { ...newData[idx], key: e.target.value.trim() };
    onChange(newData);
    setSubmitErrors([]);
  };

  const handleLabelChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    idx: number
  ) => {
    const newData = [...sortedFormData];
    newData[idx] = { ...newData[idx], label: e.target.value.trim() };
    onChange(newData);
  };

  const handleColorChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    idx: number
  ) => {
    const newData = [...sortedFormData];
    newData[idx] = { ...newData[idx], color: e.target.value };
    onChange(newData);
  };

  const handleRemove = (idx: number) => {
    const newData = sortedFormData.filter((item, i) => i !== idx);
    onChange(newData);
  };

  const addFormRow = () => {
    const newEntry: OptionEntry = {
      key: "",
      label: "",
      color: "#000000",
    };
    onChange([...sortedFormData, newEntry]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const keys = sortedFormData.map((item) => item.key);
    const keyCounts: { [key: string]: number } = {};

    keys.forEach((key) => {
      keyCounts[key] = (keyCounts[key] || 0) + 1;
    });

    const duplicates = Object.keys(keyCounts).filter(
      (key) => keyCounts[key] > 1
    );

    if (duplicates.length > 0) {
      setSubmitErrors(duplicates);
    } else {
      setSubmitErrors([]);
      onSubmit();
    }
  };

  return (
    <Form>
      <Stack gap={3}>
        {sortedFormData.map((item, i) => (
          <Row key={i} className="g-2 align-items-center">
            <Col>
              <Form.Group controlId={`key-${item.key}`}>
                <Form.Control
                  placeholder="主键 Key"
                  value={item.key}
                  onChange={(e) => handleKeyChange(e, i)}
                  isInvalid={submitErrors.includes(item.key)}
                  disabled={i < Object.keys(defaultOptions).length}
                />
                {submitErrors.includes(item.key) && (
                  <Form.Control.Feedback type="invalid">
                    Key不能重复
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>

            <Col>
              <Form.Control
                placeholder="标签 Label"
                value={item.label}
                onChange={(e) => handleLabelChange(e, i)}
              />
            </Col>

            <Col>
              <Stack direction="horizontal" gap={2}>
                <Form.Control
                  type="color"
                  title="颜色 Color"
                  value={item.color}
                  className="w-50"
                  onChange={(e) => handleColorChange(e, i)}
                />
                <Button
                  variant="outline-danger"
                  onClick={() => handleRemove(i)}
                  hidden={i < Object.keys(defaultOptions).length}
                  disabled={i < Object.keys(defaultOptions).length}
                >
                  删除
                </Button>
              </Stack>
            </Col>
          </Row>
        ))}

        <Stack direction="horizontal" gap={2} className="mt-3">
          <Button variant="success" onClick={addFormRow}>
            添加新行
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            保存
          </Button>
        </Stack>
      </Stack>
    </Form>
  );
}

export default OptionsForm;
