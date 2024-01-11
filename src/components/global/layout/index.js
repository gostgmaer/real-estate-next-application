import React from "react";
import Header from "../blocks/navbar";
import Footer from "../blocks/footer";

const Layout = ({ children }) => {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <Header />
      <main> {children} </main>
      <Footer />
    </div>
  );
};

export default Layout;
