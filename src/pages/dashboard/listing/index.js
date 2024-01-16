import Table from "@/components/global/blocks/Table";
import Layout from "@/components/global/layout";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MdEdit, MdDelete, MdPageview } from "react-icons/md";

const Index = () => {
  const route = useRouter();

  const data = React.useMemo(
    () => [
      { id: 1, name: "Property 1", price: "$500,000", location: "City A" },
      { id: 2, name: "Property 2", price: "$600,000", location: "City B" },
      // Add more properties as needed
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Name", accessor: "name" },
      { Header: "Price", accessor: "price" },
      { Header: "Location", accessor: "location" },
    ],
    []
  );

  const buttons = [
    {
      label: <MdEdit className=" w-5 h-5" />,
      onClick: (property) => {
        route.push(`/dashboard/listing/${property.id}/update`);
       
      },
    },
    {
      label: <MdPageview className=" w-5 h-5" />,
      onClick: (property) => {
        route.push(`/dashboard/listing/${property.id}`);
     
      },
    },
    {
      label: <MdDelete className=" w-5 h-5" />,
      onClick: (property) => {
        console.log("Delete property:", property);
      },
    },
    // Add more buttons as needed
  ];

  return (
    <Layout>
      <Head>
        <title>Property Listings</title>
      </Head>
      <div className="container mx-auto my-10 ">
        <div className="flex flex-col max-w-7xl bg-gray-50 p-10 m-auto rounded-lg">
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
          <div className=" bg-white">
            <Table
              columns={columns}
              data={data}
              buttons={buttons}
              params={{ setpage: 0, setLimit: 0 }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
