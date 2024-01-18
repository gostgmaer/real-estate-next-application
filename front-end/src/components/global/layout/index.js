import React from "react";
import Header from "../blocks/navbar";
import Footer from "../blocks/footer";

const Layout = ({ children }) => {
  return (
    <div className={`flex flex-wrap`}>
      <Header />
      <main className="w-full bg-gray-100 min-h-screen dark:bg-gray-800">

        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
