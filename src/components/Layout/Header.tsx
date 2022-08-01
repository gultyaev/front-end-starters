import { Link } from "gatsby";
import React from "react";
import Wrapper from "./Wrapper";
import { LinkGetProps } from "@reach/router";

const links = [
  {
    to: "/",
    title: "Projects",
  },
  {
    to: "/tips/",
    title: "Tips",
  },
] as const;

const linksMap = {
  "/": "/project",
  "/tips/": "/tip",
} as const;

function isPartiallyCurrent({
  href,
  location,
  isCurrent,
}: LinkGetProps): object {
  const baseClassName = "text-white py-2 px-4 rounded-md hover:bg-slate-900";
  const activeClassName = baseClassName + " bg-slate-900";

  if (
    isCurrent ||
    (href in linksMap &&
      location.pathname.startsWith(linksMap[href as keyof typeof linksMap]))
  ) {
    return {
      className: activeClassName,
      "aria-current": "page",
    };
  }

  return {
    className: baseClassName,
  };
}

function Header() {
  return (
    <header className="py-8 sticky top-0 bg-[#000424] z-10">
      <Wrapper>
        <nav className="flex justify-end items-center">
          <ul className="flex justify-end gap-3 mr-5">
            {links.map((e) => (
              <li key={e.to}>
                <Link getProps={isPartiallyCurrent} to={e.to}>
                  {e.title}
                </Link>
              </li>
            ))}
          </ul>

          <span className="border-l-2 border-l-slate-700 pl-4 self-end">
            <a
              href="https://github.com/gultyaev/learning-front-end"
              target="_blank"
              className="text-white hover:text-gray-300"
            >
              <span className="sr-only">GitHub repo</span>
              <svg
                viewBox="0 0 16 16"
                className="w-7 h-7"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </span>
        </nav>
      </Wrapper>
    </header>
  );
}

export default Header;
