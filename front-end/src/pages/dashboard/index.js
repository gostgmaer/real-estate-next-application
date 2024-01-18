import Layout from "@/components/global/layout";
import DashboardLayout from "@/components/pages/dashboard/blocks/DashboardLayout";
import Head from "next/head";
import React from "react";

const Index = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Property Listings Dashboard</title>
      </Head>
      <div className="container mx-auto  ">
        <div className="flex flex-col max-w-7xl  m-auto rounded-lg ">
          <div className=" flex flex-col justify-center align-middle items-center">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <p>Welcome to your dashboard!</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
