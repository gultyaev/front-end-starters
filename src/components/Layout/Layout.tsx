import React, { PropsWithChildren } from "react";
import { H1 } from "../Primitives";
import Header from "./Header";
import Wrapper from "./Wrapper";

interface LayoutProps {
  title?: string;
}

function Layout({ children, title }: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="text-gray-300 flex-1 pb-10 text-lg">
          <Wrapper className="py-12 md:py-16">
            {title && <H1>{title}</H1>}
            {children}
          </Wrapper>
        </main>
      </div>
    </>
  );
}

export default Layout;
