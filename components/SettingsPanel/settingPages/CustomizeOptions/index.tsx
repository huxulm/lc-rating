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

  const options = useMemo(
    () => optionKeys.map(getOption),
    [optionKeys, getOption]
  );

  const [formData, setFormData] = useState<OptionEntry[]>(() => {
    return options.map((option) => ({
      key: option.key,
      label: option.label,
      color: option.color,
    }));
  });

  const newOptions = useMemo(() => {
    return formData.reduce((acc: CustomOptionsType, item) => {
      acc[item.key] = { key: item.key, label: item.label, color: item.color };
      return acc;
    }, {});
  }, [formData]);

  const onChange = (formData: OptionEntry[]) => {
    setFormData(formData);
  };

  const onSubmit = () => {
    updateOptions(newOptions);
  };

  return (
    <Container fluid className="mt-3">
      <Row>
        <Col md={8}>
          <OptionsFrom
            formData={formData}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </Col>

        <Col md={4} className="preview-section">
          <Preview options={options} />
        </Col>
      </Row>
    </Container>
  );
}

export default CustomizeOptions;
