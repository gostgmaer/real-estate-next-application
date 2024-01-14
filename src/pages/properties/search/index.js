import Layout from "@/components/global/layout";
import Search from "@/components/pages/lising/search";
import { convertObject, parseUrlWithQueryParams } from "@/lib/helper/functions";
import React from "react";
var Url = require('url-parse');

const Index = (props) => {
  console.log(props);
  return (
    <Layout>
      <div className="py-10">
        <h1 className=" m-auto text-center md:text-4xl uppercase font-semibold text-2xl">
          Properties
        </h1>
        <div className="flex flex-col md:flex-row max-w-7xl  m-auto"> <Search data={props} /></div>
       
      </div>
    </Layout>
  );
};

export default Index;


export const getServerSideProps = async (ctx) => {

  console.log(ctx);
  // const currParam ={
  //   method: "get"
  // }
  // const categories = await serverMethod("/public/categories", currParam);
  // const brands = await serverMethod("/public/brands", currParam);
  // const tags = await serverMethod("/public/tags", currParam);
    var url = new Url(ctx.resolvedUrl);
    const parsedObject = parseUrlWithQueryParams(`${url.query}`);
  
    // const nwObject = convertObject(parsedObject)
  
    // const params = {
    //   method: "get", query: {...parsedObject,filter:JSON.stringify(parsedObject.filter)}
    // }
    // const data = await serverMethod("/public/product/search", params);
    return {
      props: { filter:parsedObject.filter
      },
    };
  };
  