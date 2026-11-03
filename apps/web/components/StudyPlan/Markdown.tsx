"use client";

import { cn } from "@/lib/utils";
import hljs from "highlight.js";
import "katex/dist/katex.min.css";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import markedKatex from "marked-katex-extension";
import React, { useMemo } from "react";

const marked = new Marked(
  markedHighlight({
    emptyLangClass: "hljs",
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  }),
  // 0x3F 的题单里公式写作 $n+1$，紧贴中文时两侧没有空格，需要 nonStandard
  markedKatex({ throwOnError: false, nonStandard: true }),
  {
    renderer: {
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens);
        const t = title ? ` title="${title}"` : "";
        return `<a href="${href}"${t} target="_blank" rel="noreferrer">${text}</a>`;
      },
    },
  }
);

const render = (md: string, inline: boolean) => {
  try {
    return (inline ? marked.parseInline(md) : marked.parse(md)) as string;
  } catch {
    return md;
  }
};

interface MarkdownProps {
  content: string;
  inline?: boolean;
  className?: string;
}

export const Markdown = React.memo(
  ({ content, inline = false, className }: MarkdownProps) => {
    const html = useMemo(() => render(content, inline), [content, inline]);
    const Tag = inline ? "span" : "div";
    return (
      <Tag
        className={cn(inline ? "md-inline" : "md-content", className)}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
);

Markdown.displayName = "Markdown";
