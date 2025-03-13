import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OptionValue } from "@/hooks/useOptions";
import React from "react";

interface PreviewProps {
  options: OptionValue[];
}

const Preview = React.memo(({ options }: PreviewProps) => {
  return (
    <div className="p-3 space-y-2 border rounded-md">
      <Label className="text-sm font-medium leading-none">预览</Label>
      {options.map((option, i) => (
        <Select key={i} value={option.key || " "}>
          <SelectTrigger className="w-full" style={{ color: option.color }}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              value={option.key || " "}
              style={{ color: option.color }}
            >
              {option.label}
            </SelectItem>
          </SelectContent>
        </Select>
      ))}
    </div>
  );
});

Preview.displayName = "Preview";

export { Preview };
