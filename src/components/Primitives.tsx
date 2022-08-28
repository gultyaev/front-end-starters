import React, { PropsWithChildren } from "react";

export const H1 = ({ children }: PropsWithChildren) => (
  <h1 className="text-5xl font-bold uppercase mb-16 tracking-wider text-gray-100">
    {children}
  </h1>
);

export const H2 = ({ children }: PropsWithChildren) => (
  <h2 className="text-4xl font-semibold mt-10 mb-6 text-gray-100">
    {children}
  </h2>
);

export const H3 = ({ children }: PropsWithChildren) => (
  <h3 className="text-3xl font-semibold mt-10 mb-6 text-gray-100">
    {children}
  </h3>
);

export const P = ({ children }: PropsWithChildren) => (
  <p className="mb-3 leading-8 last-child:mb-0">{children}</p>
);

export const Ul = ({ children }: PropsWithChildren) => (
  <ul className="list-disc mb-3 pl-4">{children}</ul>
);

export const A = ({ children, ...props }: PropsWithChildren) => (
  <a
    className="hover:underline text-orange-500 hover:text-orange-600"
    target="_blank"
    {...props}
  >
    {children}
  </a>
);

export const InlineCode = ({ children }: PropsWithChildren) => (
  <code className="bg-slate-900 py-1 px-1.5 mx-0.5 rounded-md whitespace-normal break-words">
    {children}
  </code>
);

export const layoutPrimitives = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: Ul,
  a: A,
  inlineCode: InlineCode,
};
