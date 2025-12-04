import { useGlobalSettingsStore } from "@/hooks/useGlobalSettings";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface I18NLinkProps {
  link: {
    en: string;
    zh: string;
  };
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

const I18NLink = React.memo(
  ({ link, title, className, style }: I18NLinkProps) => {
    const linkLanguage = useGlobalSettingsStore((s) => s.linkLanguage);
    const linkLocal = linkLanguage === "zh" ? link.zh : link.en;

    return (
      <Link
        href={linkLocal}
        target="_blank"
        className={cn("text-left hover:underline", className)}
        style={style}
      >
        {title}
      </Link>
    );
  }
);

I18NLink.displayName = "I18NLink";

export { I18NLink };
