import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypePrettyCode from "rehype-pretty-code";
import createMDX from "@next/mdx";

/** @type {import('rehype-pretty-code').Options} */
const options = {
  keepBackground: true,
  // See Options section below.
  theme: "one-dark-pro",
};

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  basePath: "/lc-rating",
  distDir: "build",
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    jsx: true,
    rehypePlugins: [rehypeKatex, [rehypePrettyCode, options]],
    remarkPlugins: [
      [remarkMdxFrontmatter, { name: "matter" }],
      remarkMdxFrontmatter,
      remarkMath,
    ],
  },
});

export default withMDX(nextConfig);
