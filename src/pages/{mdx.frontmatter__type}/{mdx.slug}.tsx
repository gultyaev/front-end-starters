import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../../components/Layout";
import { Seo } from "../../components/Layout/Seo";
import { layoutPrimitives } from "../../components/Primitives";

interface StarterProjectPageProps {
  data: Queries.StarterProjectPageQuery;
}

function StarterProjectPage({ data }: StarterProjectPageProps) {
  return (
    <Layout title={data.mdx?.frontmatter?.title}>
      <article>
        <MDXProvider components={layoutPrimitives}>
          <MDXRenderer>{data.mdx?.body || ""}</MDXRenderer>
        </MDXProvider>
      </article>
    </Layout>
  );
}

export default StarterProjectPage;

export const Head = ({ data }: StarterProjectPageProps) => (
  <Seo
    title={data.mdx?.frontmatter?.title}
    description={data.mdx?.frontmatter?.description}
  ></Seo>
);

export const query = graphql`
  query StarterProjectPage($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
      body
    }
  }
`;
