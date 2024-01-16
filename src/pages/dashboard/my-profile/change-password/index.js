import Layout from "@/components/global/layout";
import ChangePassword from "@/components/pages/auth/changePassword";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

const Orders = (props) => {
  return (
    <Layout>
      <Head>
        <title>Changes password</title>
      </Head>
      <div className="container mx-auto my-10 ">
        <div className="flex flex-col max-w-7xl bg-gray-50 dark:bg-gray-950 p-10 m-auto rounded-lg">
          <div className=" flex justify-between w-full mb-10 uppercase">
            <h1 className="text-2xl font-bold mb-4 text-left">
              Changes password
            </h1>
            <Link
              href={"/dashboard/my-profile"}
              className="px-4 py-1 flex items-center bg-[#186aa5] text-white font-semibold rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-[#186aad]"
            >
              Back
            </Link>
          </div>
          <div className=" bg-white rounded-xl  py-10">
            <ChangePassword />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;

// export const getServerSideProps = async (ctx) => {
//   const session = await getSession(ctx);
//   // console.log(session);
//   if (!session) {
//     return {
//       redirect: {
//         destination: `/auth/signin?callbackUrl=${appBaseUrl}/order`,
//         parmanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//       data: session ? "List of 100 pro blog" : "list of free blogs",
//     },
//   };
// };

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/auth/signin',
  //       permanent: false,
  //     },
  //   };
  // } else {
  //   // const cookies = parse(ctx.req.headers.cookie || '');
  //   // const token = cookies["headerPayload"] + "." + cookies["signature"];
  //   // const params = {
  //   //   method: "get",
  //   //   token: token
  //   // }
  //   // const result = await serverMethod(`/user/auth/profile`, params);

  //   // const data = result.result
  //   return {
  //     props: {
  //       session
  //     },
  //   };
  // }

  return {
    props: {},
  };
};
