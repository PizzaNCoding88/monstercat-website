import React from "react";
import FooterLink from "./footer/FooterLink";
import NewsLetter from "./footer/NewsLetter";

const Footer = () => {
  return (
    <div className="px-5 flex flex-col gap-10">
      <FooterLink />
      <NewsLetter />
    </div>
  );
};

export default Footer;
