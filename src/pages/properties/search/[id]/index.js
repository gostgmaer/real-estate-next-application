import Layout from "@/components/global/layout";
import { SingleContainer } from "@/components/pages/listing/single";

import React from "react";

const Index = (props) => {
  return (
    <Layout>
      <div >
        <SingleContainer data={props.data}/>
      </div>
    </Layout>
  );
};

export default Index;
