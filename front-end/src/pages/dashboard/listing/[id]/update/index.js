import { PropertyForm } from "@/components/global/forms/addproperty";
import Layout from "@/components/global/layout";
import DashboardLayout from "@/components/pages/dashboard/blocks/DashboardLayout";
import { serverMethod } from "@/lib/helper/network";
import { appId, propertyContainer } from "@/setting";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Index = (props) => {
  return (
    <DashboardLayout>
      <Head>
        <title>Update Property: {props?.name} </title>
      </Head>
      <div className="container mx-auto my-10 ">
        <div className="flex flex-col max-w-7xl bg-gray-50 dark:bg-gray-700 p-10 m-auto rounded-lg">
          <div className=" flex justify-between w-full mb-10 uppercase">
            <h1 className="text-2xl font-bold mb-4 text-left">
              Update a property
            </h1>
            <Link
              href={"/dashboard/listing"}
              className="px-4 py-1 flex items-center bg-[#186aa5] text-white font-semibold rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-[#186aad]"
            >
              back
            </Link>
          </div>
          <div className=" dark:bg-gray-700">
            <PropertyForm props={props.data} initialValues={{...props.data.result}} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;

export const getServerSideProps = async (ctx) => {
  // console.log(ctx);

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
