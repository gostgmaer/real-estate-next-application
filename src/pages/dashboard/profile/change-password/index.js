

import Layout from "@/components/global/layout";
import ChangePassword from "@/components/pages/auth/changePassword";
import { getSession } from "next-auth/react";

const Orders = (props) => {
  return (
    <Layout>
      <div>
        <ChangePassword />
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

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  } else {
    // const cookies = parse(ctx.req.headers.cookie || '');
    // const token = cookies["headerPayload"] + "." + cookies["signature"];
    // const params = {
    //   method: "get",
    //   token: token
    // }
    // const result = await serverMethod(`/user/auth/profile`, params);

    // const data = result.result
    return {
      props: {
        session
      },
    };
  }
};