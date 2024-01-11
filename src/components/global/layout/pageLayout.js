import React from "react";
import Navbar from "../navbar/public/navbar";

const PageLayout = ({ children }) => {
  return (
    <div className="content print:px-0 bg-gray-300 ">
      <Navbar />
      <div className="element min-h-[calc(100vh-64px)] flex items-center">
        <div className="max-w-7xl min-w-[80rem] m-auto">
          {children}
        </div>


      </div>
    </div>
  );
};

export default PageLayout;
