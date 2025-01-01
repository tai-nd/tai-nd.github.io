import fs from "fs";
import path from "path"
import style from "@/src/css/markdown.module.css"

export function generateStaticParams(): { slug: string }[] {
  const blogs = fs.readdirSync("contents/blogs")
  return blogs
    .filter(file => file.endsWith(".mdx"))
    .map(file => ({ slug: path.parse(file).name }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { default: Blog } = await import(`@/contents/blogs/${slug}.mdx`)
  return (
    <div className={style.markdown}>
      <Blog />
    </div>
  )
}

export const dynamicParams = false;
