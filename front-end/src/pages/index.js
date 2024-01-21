import Layout from "@/components/global/layout";
import Head from "next/head";
import Index from "@/components/pages/home";
import { currSliderMedia } from "@/assets/img/data";
import { serverMethod } from "@/lib/helper/network";

export default function Home(props) {
  return (
    <Layout>
      <Head>
        <title>real estate Web Application</title>
      </Head>
      <Index data={props} />
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const params = {
    method: "get",
    header: {},
    query: { limit: 6, page: 1 },
  };

  const featuredparams = {
    method: "get",
    header: {},
    query: {
      limit: 6,
      page: 1,
      filter: JSON.stringify({
        is_featured: true,
      }),
    },
  };

  const thirtyDaysAgo = new Date();
thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);



  const newparams = {
    method: "get",
    header: {},
    query: {
      limit: 6,
      page: 1,
      filter: JSON.stringify({
        createdAt: { $gte: thirtyDaysAgo } 
      }),
    },
  };
  const saleparams = {
    method: "get",
    header: {},
    query: {
      limit: 6,
      page: 1,
      filter: JSON.stringify({
        createdAt: { $gte: thirtyDaysAgo } 
      }),
    },
  };
  const newItems = await serverMethod(`/realestate/record`, newparams);
  const saleItems = {};
  const featured = await serverMethod(`/realestate/record`, featuredparams);
  const result = await serverMethod(`/realestate/record`, params);

  if (
    result?.data?.error ||
    (result?.status != 200 && result?.status != "OK")
  ) {
    return {
      props: {
        data: result?.data?.error ? result?.data?.error : result?.data,featured,newItems
      },
    };
  } else {
    return {
      props: { data: result,featured,newItems },
    };
  }
};
