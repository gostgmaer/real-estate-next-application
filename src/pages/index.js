import Image from "next/image";

import Layout from "@/components/global/layout";
import Head from "next/head";
import Index from "@/components/pages/home";
import { currSliderMedia, imgData } from "@/assets/img/data";

export default function Home() {

// var currArr =[];

//   imgData.forEach(img=>{
//     currArr.push({img:img.attributes.image.large,_id:img.id})
   
//   })

// console.log(currArr);
  
  return (
    <Layout>
      <Head>
        <title>Real State Web Application</title>
      </Head>
     <Index data={{currSliderMedia}}/>
    </Layout>
  );
}
