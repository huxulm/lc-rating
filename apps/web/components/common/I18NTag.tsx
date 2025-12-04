import { Badge } from "@/components/ui/badge";
import { useGlobalSettingsStore } from "@/hooks/useGlobalSettings";
import { cn } from "@/lib/utils";
import React from "react";

interface I18NTagProps {
  label: {
    en: string;
    zh: string;
  };
  className?: string;
  style?: React.CSSProperties;
}

const I18NTag = React.memo(({ label, className, style }: I18NTagProps) => {
  const tagLanguage = useGlobalSettingsStore((s) => s.tagLanguage);
  const labelLocal = tagLanguage === "zh" ? label.zh : label.en;

  return (
    <Badge variant="outline" className={cn(className)} style={style}>
      {labelLocal}
    </Badge>
  );
});

I18NTag.displayName = "I18NTag";

export { I18NTag };
