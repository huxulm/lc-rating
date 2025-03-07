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
  const sortedFormData = useMemo(() => {
    const [customEntries, defaultEntries] = partition(
      formData,
      (item) => item.key in defaultOptions
    );
    return [...defaultEntries, ...customEntries];
  }, [formData]);

  const errors = useMemo(() => {
    const existingKeys = new Set<string>();
    const errors: string[] = [];
    sortedFormData.forEach((item, i) => {
      if (item.key === "") {
        errors[i] = "Key不能为空";
      } else if (existingKeys.has(item.key)) {
        errors[i] = "Key不能重复";
      } else {
        existingKeys.add(item.key);
      }
    });
    return errors;
  }, [sortedFormData]);

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    idx: number,
    field: "key" | "label" | "color"
  ) => {
    const newData = [...sortedFormData];
    newData[idx] = { ...newData[idx], [field]: e.target.value.trim() };
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
    if (errors.length === 0) {
      onSubmit();
    }
  };

  return (
    <Form>
      <Stack gap={3}>
        {sortedFormData.map((item, i) => (
          <Row key={i} className="g-2">
            <Col>
              <Form.Group controlId={`key-${item.key}`}>
                <Form.Control
                  placeholder="主键 Key"
                  value={item.key}
                  onChange={(e) => handleFieldChange(e, i, "key")}
                  isInvalid={errors[i] !== undefined}
                  disabled={i < Object.keys(defaultOptions).length}
                />
                {errors[i] && (
                  <Form.Control.Feedback type="invalid">
                    {errors[i]}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>

            <Col>
              <Form.Control
                placeholder="标签 Label"
                value={item.label}
                onChange={(e) => handleFieldChange(e, i, "label")}
              />
            </Col>

            <Col>
              <Stack direction="horizontal" gap={2}>
                <Form.Control
                  type="color"
                  title="颜色 Color"
                  value={item.color}
                  className="w-50"
                  onChange={(e) => handleFieldChange(e, i, "color")}
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
