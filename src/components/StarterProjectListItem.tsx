import { Link } from "gatsby";
import React from "react";
import { P, Ul } from "./Primitives";

interface StarterProjectListItemProps {
  data: Queries.StarterProjectsQuery["allMdx"]["nodes"][0];
}

const ComplexityLevel = ({ complexity }: { complexity: string | null }) => {
  const className =
    complexity === "hi"
      ? "bg-red-900"
      : complexity === "med"
      ? "bg-amber-600"
      : "bg-lime-700";

  return (
    <span>
      <span>Complexity level: </span>
      <span className={`uppercase ${className} py-0.5 px-2 rounded-md`}>
        {complexity}
      </span>
    </span>
  );
};

function StarterProjectListItem({ data }: StarterProjectListItemProps) {
  if (!data.frontmatter) {
    throw new Error("Missing requried content");
  }

  return (
    <Link
      to={`/project/${data.slug}/`}
      className="[@media(any-hover:hover)]:hover:scale-105 transition-all hover:shadow-2xl block"
    >
      <article className="flex flex-col bg-slate-900 px-8 py-7 rounded-2xl">
        <h2 className="text-3xl mb-6 text-orange-500 self-start font-semibold">
          {data.frontmatter.title}
        </h2>
        <P>{data.frontmatter.description}</P>

        {data.frontmatter.prerequisites && (
          <div>
            <span>Prerequisites: </span>
            <Ul>
              {data.frontmatter.prerequisites.map((e, i) => (
                <li className="list-disc ml-8" key={i}>
                  {e}
                </li>
              ))}
            </Ul>
          </div>
        )}

        <ComplexityLevel
          complexity={data.frontmatter.complexity}
        ></ComplexityLevel>
      </article>
    </Link>
  );
}

export default StarterProjectListItem;
