import Layout from "@/components/global/layout";
import { SingleContainer } from "@/components/pages/listing/single";
import { serverMethod } from "@/lib/helper/network";
import { appId, propertyContainer } from "@/setting";

import React from "react";

const Index = (props) => {
  return (
    <Layout>
      <div>
        <SingleContainer data={props.data} />
      </div>
    </Layout>
  );
};

export default Index;

export const getServerSideProps = async (ctx) => {
  console.log(ctx);

  const {id}= ctx.params
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
