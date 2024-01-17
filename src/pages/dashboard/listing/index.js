import Table from "@/components/global/blocks/Table";
import Layout from "@/components/global/layout";
import DashboardLayout from "@/components/pages/dashboard/blocks/DashboardLayout";
import Listing from "@/components/pages/dashboard/listing";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MdEdit, MdDelete, MdPageview } from "react-icons/md";

const Index = () => {



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
           <Listing/>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
