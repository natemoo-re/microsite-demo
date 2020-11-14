import { h, Fragment, FunctionalComponent } from "preact";
import { definePage } from "microsite/page";
import { Head, seo } from "microsite/head";

import fs from "fs";
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
      </main>
    </>
  );
};

export default definePage(Post, {
  path: "/blog/[slug]",
  async getStaticProps({ params }) {
    const page = getPage(params.slug);
    const content = await markdownToHtml(page.content || "");

    return {
      props: {
        data: page.data,
        content,
      },
    };
  },
  async getStaticPaths() {
    return {
      paths: fs.readdirSync(pagesDirectory).map((filename) => {
        return {
          params: {
            slug: path.basename(filename, path.extname(filename)),
          },
        };
      }),
    };
  },
});

async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

const pagesDirectory = path.join(process.cwd(), "content");

const getPage = (slug) => {
  const fullPath = path.join(pagesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return matter(fileContents);
};
