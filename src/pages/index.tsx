import Head from "next/head";

import { Hero, MainLayout } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Franzua Plasencia</title>
      </Head>
      {/* Center total content */}
      <div className="container mx-auto max-w-full">
        <Hero />
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout>{page}</MainLayout>;
};
