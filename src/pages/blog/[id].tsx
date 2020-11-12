import React, { FC } from "react";
import { definePage } from "microsite/page";
import { Head, seo } from "microsite/head";

import { Interaction } from "../../components";

const Post: FC<{ id: string }> = ({ id }) => {
  return (
    <>
      <Head>
        <seo.title>Blog | {id}</seo.title>
      </Head>

      <main>
        <section>
          <h1>Hello world!</h1>
          <p>This is blog post {id}</p>
        </section>

        <Interaction initialCount={10} />
      </main>
    </>
  );
};

export default definePage(Post, {
  path: "/blog/[id]",
  async getStaticPaths() {
    const ids = Array.from({ length: 10 }, (_, i) => `${i + 1}`);
    return {
      paths: ids.map((id) => `/blog/${id}`),
    };
  },
  async getStaticProps({ params }) {
    return {
      props: {
        id: params.id,
      },
    };
  },
});
