import SyntaxHighlighter from "react-syntax-highlighter";
import type { MDXComponents } from "mdx/types";

function code({
  className = "",
  children,
  ...properties
}: {
  className?: string;
  [key: string]: any;
}) {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <div className="code-frame">
      <SyntaxHighlighter
        language={match[1]}
        PreTag="div"
        children={children}
        {...properties}
      />
    </div>
  ) : (
    <code className={className} {...properties} />
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    code,
  };
}
