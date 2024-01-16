import Layout from "@/components/global/layout";
import Head from "next/head";
import React from "react";

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Property Listings</title>
      </Head>
      <div className="container mx-auto my-10 ">
        <div className="flex flex-col max-w-7xl bg-gray-50 p-10 m-auto rounded-lg h-80"></div>
      </div>
    </Layout>
  );
};

export default Index;
