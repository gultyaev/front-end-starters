import { Link } from "gatsby";
import React from "react";
import Wrapper from "./Wrapper";

const links = [
  {
    to: "/",
    title: "Projects",
  },
  {
    to: "/tips",
    title: "Tips",
  },
];

function Header() {
  return (
    <header className="bg-slate-800 shadow-md">
      <Wrapper>
        <nav>
          <ul className="flex gap-3">
            {links.map((e) => (
              <li key={e.to}>
                <Link
                  className="text-white py-2 px-4 rounded-md hover:underline"
                  activeClassName="bg-slate-900"
                  to={e.to}
                >
                  {e.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
}

export default Header;
