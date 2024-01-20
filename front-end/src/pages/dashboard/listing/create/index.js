import { PropertyForm } from "@/components/global/forms/addproperty";
import Layout from "@/components/global/layout";
import DashboardLayout from "@/components/pages/dashboard/blocks/DashboardLayout";
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

    <DashboardLayout>
      <Head>
        <title>Add a new property</title>
      </Head>
      <div className="container mx-auto ">
        <div className="flex flex-col    m-auto rounded-lg">
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
          <div className=" ">
            <PropertyForm
              props={undefined}
              initialValues={{
                property_id: "",
                name: "",
                type: "",
                location: {
                  city: "",
                  state: "",
                  country: "",
                  zipcode: "",
                },
                description: "",
                amenities: [],
                capacity: 0,
                bedrooms: 0,
                sale_price:0,
                is_featured:false,
                bathrooms: 0,
                price_per_night: 0,
                currency: "",
                availability: {
                  start_date: "",
                  end_date: "",
                },
                images: [],
                host: {
                  host_id: "",
                  host_name: "",
                  host_contact: "",
                  host_image: [],
                },
                year_of_construction: 0,
                construction_status: "",
                parking: false,
                is_furnished: "",
                floor: {
                  number: 0,
                  total_floors: 0,
                },
                size: {
                  area: 0,
                  unit: "",
                },
                rating: 0,
                reviews: [],
                rules: [],
                contact_person: {
                  name: "",
                  email: "",
                  phone: "",
                },
                booking_policy: "",
                additional_info: "",
              }}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
