import type { NextConfig } from "next";
import nextMdx from "@next/mdx";
import remarkGfm from "remark-gfm";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
};

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkGfm
    ]
  }
})

export default withMdx(nextConfig);
