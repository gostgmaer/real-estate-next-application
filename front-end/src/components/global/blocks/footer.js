import moment from "moment";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="  flex w-full justify-center align-middle  items-center px-5 py-3">
     <p> {moment(Date.now()).format("YYYY")} @ <Link href={'/'}>Next real estate</Link></p>
    </div>
  );
};

export default Footer;
