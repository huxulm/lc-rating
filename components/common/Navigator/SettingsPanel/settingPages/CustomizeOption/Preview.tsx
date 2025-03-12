import { OptionEntry } from "@hooks/useProgress";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/FormLabel";

interface PreviewProps {
  options: OptionEntry[];
}

function Preview({ options }: PreviewProps) {
  return (
    <div className="p-3 border rounded">
      <FormLabel className="fw-bold">预览</FormLabel>
      {options.map((option, i) => (
        <Form.Select
          key={i}
          defaultValue={option.key}
          style={{ color: option.color }}
          className="my-1"
        >
          <option defaultValue={option.key} style={{ color: option.color }}>
            {option.label}
          </option>
        </Form.Select>
      ))}
    </div>
  );
}

export default Preview;
