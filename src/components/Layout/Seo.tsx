import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface HeadProps {
  title?: string;
  description?: string | null;
}

export const Seo = ({ title, description }: HeadProps) => {
  const { site } = useStaticQuery<Queries.SiteStaticQuery>(graphql`
    query SiteStatic {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const combinedTitle = [title, site?.siteMetadata?.title]
    .filter(Boolean)
    .join(" | ");

  return (
    <>
      <title>{combinedTitle}</title>

      {description && <meta name="description" content={description} />}
    </>
  );
};
