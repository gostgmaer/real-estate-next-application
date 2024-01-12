import Image from "next/image";

import Layout from "@/components/global/layout";
import Head from "next/head";
import Index from "@/components/pages/home";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Real State Web Application</title>
      </Head>
     <Index data={undefined}/>
    </Layout>
  );
}
