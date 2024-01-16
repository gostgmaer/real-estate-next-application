import { PropertyForm } from "@/components/global/forms/addproperty";
import Layout from "@/components/global/layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    //   <Layout>
    //     <Head>
    //       <title>Add a new property</title>
    //     </Head>
    //    <div className="container mx-auto my-8">
    //     <h1 className="text-3xl font-bold  m-auto text-center mb-10">Add a new property</h1>
    //     <div>
    //       <PropertyForm/>
    //     </div>
    //   </div>
    //  </Layout>

    <Layout>
      <Head>
        <title>Add a new property</title>
      </Head>
      <div className="container mx-auto my-10 ">
        <div className="flex flex-col max-w-7xl bg-gray-50 p-10 m-auto rounded-lg">
          <div className=" flex justify-between w-full mb-10 uppercase">
            <h1 className="text-2xl font-bold mb-4 text-left">
              Create a new property
            </h1>
            <Link
              href={"/dashboard/listing"}
              className="px-4 py-1 flex items-center bg-[#186aa5] text-white font-semibold rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-[#186aad]"
            >
              back
            </Link>
          </div>
          <div className=" bg-white">
            <PropertyForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
