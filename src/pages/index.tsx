import Head from "next/head";

import { Hero, MainLayout } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Franzua Plasencia</title>
      </Head>
      {/* Content */}
      <>
        <Hero />
      </>
    </>
  );
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout>{page}</MainLayout>;
};
