import {
  CustomOptionsType,
  OptionEntry,
  useProgressOptions,
} from "@hooks/useProgress";
import { useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import OptionsFrom from "./OptionsForm";
import Preview from "./Preview";

function CustomizeOptions() {
  const { optionKeys, getOption, updateOptions } = useProgressOptions();

  const savedFormData = useMemo(
    () => optionKeys.map(getOption),
    [optionKeys, getOption]
  );

  const [newFormData, setNewFormData] = useState<OptionEntry[]>(() => {
    return savedFormData.map((option) => ({
      key: option.key,
      label: option.label,
      color: option.color,
    }));
  });

  const onSubmit = () => {
    const newOptions = newFormData.reduce((acc: CustomOptionsType, item) => {
      acc[item.key] = { key: item.key, label: item.label, color: item.color };
      return acc;
    }, {});
    updateOptions(newOptions);
  };

  return (
    <Container fluid className="mt-3">
      <Row>
        <Col md={8}>
          <OptionsFrom
            formData={newFormData}
            onChange={setNewFormData}
            onSubmit={onSubmit}
          />
        </Col>

        <Col md={4} className="preview-section">
          <Preview options={newFormData} />
        </Col>
      </Row>
    </Container>
  );
}

export default CustomizeOptions;
