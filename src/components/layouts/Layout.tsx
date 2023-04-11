import Head from "next/head";
import { FC, ReactNode } from "react";
import { Navbar } from "../ui";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Edward Reyes" />
        <meta name="description" content={`Info sobre el Pokemon ${title}`} />
        <meta name="keywords" content={`Pokemon, Pokedex, ${title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main style={{ padding: "0 20px" }}>{children}</main>
    </>
  );
};
