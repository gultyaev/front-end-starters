import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { H1, P } from "../components/Primitives";

interface TipsPageProps {
  data: Queries.TipsQuery;
}

function TipsPage({ data }: TipsPageProps) {
  return (
    <Layout>
      <H1>Tips</H1>

      <div className="grid grid-cols-2 gap-6 items-stretch">
        {data.allMdx.nodes.map((n) => (
          <Link
            to={`/tip/${n.slug}`}
            key={n.slug}
            className="col-span-2 md:col-span-1 hover:scale-105 transition-all hover:shadow-2xl"
          >
            <article className="bg-slate-900 px-8 py-7 rounded-2xl">
              <h2 className="text-3xl text-amber-500 inline-block mb-2 font-semibold">
                {n.frontmatter?.title}
              </h2>

              <div className="italic mb-4">{n.frontmatter?.date}</div>

              <P>{n.excerpt}</P>
            </article>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default TipsPage;

export const query = graphql`
  query Tips {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "tip" } } }
    ) {
      nodes {
        slug
        frontmatter {
          title
          date(formatString: "MMMM DD YYYY")
        }
        excerpt
      }
    }
  }
`;
