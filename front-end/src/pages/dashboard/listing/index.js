import Table from "@/components/global/blocks/Table";

import DashboardLayout from "@/components/pages/dashboard/blocks/DashboardLayout";
import Listing from "@/components/pages/dashboard/listing";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { MdEdit, MdDelete, MdPageview } from "react-icons/md";

import { convertObject, parseUrlWithQueryParams } from "@/lib/helper/functions";
import { serverMethod } from "@/lib/helper/network";
import { appId, propertyContainer } from "@/setting";

import React from "react";
var Url = require("url-parse");

const Index = (props) => {



  return (
    <DashboardLayout>
      <Head>
        <title>Property Listings</title>
      </Head>
      <div className="container mx-auto ">
        <div className="flex flex-col   m-auto rounded-lg">
          <div className=" flex justify-between w-full mb-10 uppercase">
            <h1 className="text-2xl font-bold mb-4 text-left">
              Property Listings
            </h1>
            <Link
              href={"/dashboard/listing/create"}
              className="px-4 py-1 flex items-center bg-[#186aa5] text-white font-semibold rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-[#186aad]"
            >
              Add New
            </Link>
          </div>
          <div className=" ">
           <Listing props={props}/>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;


export const getServerSideProps = async (ctx) => {
  var url = new Url(ctx.resolvedUrl);
  const parsedObject = parseUrlWithQueryParams(`${url.query}`);

  const query = parsedObject ? parsedObject : {};
  const params = {
    method: "get",
    header: {},
    query: { ...query},
  };
  const result = await serverMethod(
    `/realstate/record`,
    params
  );

  if (result?.data?.error || result?.status != 200 && result?.status != "OK") {
    return {
      props: {
        query,
        data: result?.data?.error ? result?.data?.error : result?.data,
      },
    };
  } else {
    return {
      props: { query, data: result },
    };
  }
};
