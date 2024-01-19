import Layout from "@/components/global/layout";
import Head from "next/head";
import Index from "@/components/pages/home";
import { currSliderMedia } from "@/assets/img/data";
import { serverMethod } from "@/lib/helper/network";

export default function Home(props) {

  
  return (
    <Layout>
      <Head>
        <title>Real State Web Application</title>
      </Head>
     <Index data={props}/>
    </Layout>
  );
}



export const getServerSideProps = async (ctx) => {


  const params = {
    method: "get",
    header: {},
    query: { limit:5,page:10 },
  };
  const result = await serverMethod(
    `/realstate/record`,
    params
  );

  if (result?.data?.error || result?.status != 200 && result?.status != "OK") {
    return {
      props: {
       
        data: result?.data?.error ? result?.data?.error : result?.data,
      },
    };
  } else {
    return {
      props: {data: result },
    };
  }
};


