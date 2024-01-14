import Layout from "@/components/global/layout";
import Search from "@/components/pages/lising/search";
import { convertObject, parseUrlWithQueryParams } from "@/lib/helper/functions";
import Head from "next/head";
import React from "react";
var Url = require("url-parse");

const Index = (props) => {

  return (
    <Layout>
      <Head>
        <title>Property Search</title>
      </Head>
      <div className="py-10">
        <h1 className=" m-auto text-center md:text-4xl uppercase font-semibold text-2xl">
          Properties
        </h1>
        <div className="flex flex-col md:flex-row max-w-7xl  m-auto">
          {" "}
          <Search data={props} />
        </div>
      </div>
    </Layout>
  );
};

export default Index;

export const getServerSideProps = async (ctx) => {

  var url = new Url(ctx.resolvedUrl);
  const parsedObject = parseUrlWithQueryParams(`${url.query}`);
  const filter = parsedObject ? parsedObject : {};


  return {
    props: { query: filter },
  };
};
