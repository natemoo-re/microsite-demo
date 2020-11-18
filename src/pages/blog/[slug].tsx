import { FunctionalComponent } from "preact";
import { definePage } from "microsite/page";
import { Head, seo } from "microsite/head";

import Idle from "@/components/Idle";

import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const Post: FunctionalComponent<{ content: string; data: any }> = ({
  content,
  data,
}) => {
  return (
    <>
      <Head>
        <seo.title>Blog | {data.title}</seo.title>
      </Head>

      <main>
        <article dangerouslySetInnerHTML={{ __html: content }} />

        <Idle />
      </main>
    </>
  );
};

export default definePage(Post, {
  path: "/blog/[slug]",
  async getStaticProps({ params }) {
    const page = await getPage(params.slug);
    const content = await markdownToHtml(page.content || "");

    return {
      props: {
        data: page.data,
        content,
      },
    };
  },
  async getStaticPaths() {
    const files = await fetch(
      "https://api.github.com/repos/natemoo-re/microsite-datasource/contents/blog"
    ).then((res) => res.json());

    return {
      paths: files.map((file) => ({
        params: { slug: path.basename(file.name, ".md") },
      })),
    };
  },
});

async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

const getPage = async (slug) => {
  const fileContents = await fetch(
    `https://raw.githubusercontent.com/natemoo-re/microsite-datasource/main/blog/${slug}.md`
  ).then((res) => res.text());
  return matter(fileContents);
};
