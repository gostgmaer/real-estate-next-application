import DashboardLayout from "@/components/pages/dashboard/blocks/DashboardLayout";
import { SingleContainer } from "@/components/pages/listing/single";
import { serverMethod } from "@/lib/helper/network";
import { appId, propertyContainer } from "@/setting";
import Head from "next/head";
import Link from "next/link";

import React from "react";

const Index = (props) => {
  return (
    <DashboardLayout>
      <Head>
        <title>Update Property: {props?.data.result.name} </title>
      </Head>
      <div className=" flex justify-between w-full mb-10 uppercase max-w-7xl m-auto my-10">
        <h1 className="text-2xl font-bold mb-4 text-left">Property Listings</h1>
        <Link
          href={"/dashboard/listing/create"}
          className="px-4 py-1 flex items-center bg-[#186aa5] text-white font-semibold rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-[#186aad]"
        >
          Add New
        </Link>
      </div>
      <div>
        <SingleContainer data={props.data} />
      </div>
    </DashboardLayout>
  );
};

export default Index;

export const getServerSideProps = async (ctx) => {
  console.log(ctx);

  const { id } = ctx.params;
  const params = {
    method: "get",
    header: {},
  };
  const result = await serverMethod(
    `/realstate/record/${id}`,
    params
  );

  return {
    props: {
      data: result,
    },
  };
};
