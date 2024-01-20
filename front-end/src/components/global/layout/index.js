import React from "react";
import Header from "../blocks/navbar";
import Footer from "../blocks/footer";
import NextTopLoader from "nextjs-toploader";
import { useAxios } from "@/lib/helper/network/interceptors";

const Layout = ({ children }) => {
const [spinner]= useAxios()

  return (
    <div className={`flex flex-wrap`}>
       <NextTopLoader />
      <Header />
      <main className="w-full bg-gray-100 min-h-screen dark:bg-gray-800">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
