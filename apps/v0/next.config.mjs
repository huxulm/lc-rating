import createMDX from "@next/mdx";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import remarkMath from "remark-math";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

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
  basePath: process.env.NODE_ENV === "development" ? "/v0" : "/lc-rating/v0",
  distDir: "../../build/apps/web/v0",
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
