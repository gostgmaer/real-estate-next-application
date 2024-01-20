import Layout from "@/components/global/layout";
import { SingleContainer } from "@/components/pages/listing/single";
import { serverMethod } from "@/lib/helper/network";
import { appId, propertyContainer } from "@/setting";

import React from "react";

const Index = (props) => {
  return (
    <Layout>
      <div>
        <SingleContainer data={props} />
      </div>
    </Layout>
  );
};

export default Index;

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params;
  const params = {
    method: "get",
    header: {},
  };
  const result = await serverMethod(`/realstate/record/${id}`, params);
  if (result.status === "OK") {
    const relativeparams = {
      method: "get",
      header: {},
      query: {
        filter: JSON.stringify({
          // bedrooms: result.result.bedrooms,
          "location.state": result.result.location.state,
        }),
      },
    };
    const Currrelative = await serverMethod(
      `/realstate/record`,
      relativeparams
    );
    var relative = {};

    if (Currrelative.status == "OK") {
      relative = {
        ...Currrelative,
        result: Currrelative.result.filter(
          (item) => item._id != result.result._id
        ),
      };
    }

    return {
      props: {
        data: result,
        relative,
      },
    };
  } else {
    return {
      props: {
        data: result,
      },
    };
  }
};
