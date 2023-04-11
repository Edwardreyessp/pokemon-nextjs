import Head from "next/head";
import { FC, ReactNode } from "react";
import { Navbar } from "../ui";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Edward Reyes" />
        <meta name="description" content={`Info sobre el Pokemon ${title}`} />
        <meta name="keywords" content={`Pokemon, Pokedex, ${title}`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Info sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main style={{ padding: "0 20px" }}>{children}</main>
    </>
  );
};
