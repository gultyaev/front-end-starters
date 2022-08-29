import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import { Seo } from "../components/Layout/Seo";
import { H1, P } from "../components/Primitives";
import StarterProjectListItem from "../components/StarterProjectListItem";

interface IndexPageProps {
  data: Queries.StarterProjectsQuery;
}

const IndexPage = ({ data }: IndexPageProps) => {
  return (
    <Layout>
      <H1>Projects</H1>

      <P>
        This page contains projects that are API services aimed to help beginner
        front-end developers to learn by practice. Also, projects target real
        life-like scenarios, so the experience earned by implementing the
        front-end part and connecting with an API will be viable.
      </P>

      <P>
        Projects on this page can provide you with the idea for pet projects to
        show off your skills. They can challenge you to learn new technologies,
        which you might have never touched if you were building a pet project
        with no back-end.
      </P>

      <P>
        You can approach front-end creation using any technology stack you
        prefer as these projects are pure API with no front-end attached. You
        could make even a web site on pure HTML/CSS/JS!
      </P>

      <ul className="flex flex-col py-6 gap-6">
        {data.allMdx.nodes.map((n) => (
          <li key={n.slug}>
            <StarterProjectListItem
              data={n}
              key={n.slug}
            ></StarterProjectListItem>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <Seo description="API services aimed to help beginner front-end developers to learn by practice"></Seo>
);

export const query = graphql`
  query StarterProjects {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      nodes {
        slug
        frontmatter {
          title
          description
          prerequisites
          complexity
        }
      }
    }
  }
`;
