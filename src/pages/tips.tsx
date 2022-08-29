import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { Seo } from "../components/Layout/Seo";
import { H1, P } from "../components/Primitives";

interface TipsPageProps {
  data: Queries.TipsQuery;
}

function TipsPage({ data }: TipsPageProps) {
  return (
    <Layout>
      <H1>Tips</H1>

      <ul className="grid grid-cols-2 gap-6 items-stretch">
        {data.allMdx.nodes.map((n) => (
          <li key={n.slug} className="col-span-2 md:col-span-1">
            <Link
              to={`/tip/${n.slug}/`}
              className="hover:scale-105 transition-all [@media(any-hover:hover)]:hover:shadow-2xl block"
            >
              <article className="bg-slate-900 px-8 py-7 rounded-2xl">
                <h2 className="text-3xl text-orange-500 inline-block mb-2 font-semibold">
                  {n.frontmatter?.title}
                </h2>

                <div className="italic mb-4">{n.frontmatter?.date}</div>

                <P>{n.excerpt}</P>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default TipsPage;

export const Head = () => (
  <Seo
    title="Tips"
    description="Tips to help beginner developers become more efficient"
  ></Seo>
);

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
