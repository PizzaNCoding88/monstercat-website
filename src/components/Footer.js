import React from "react";
import FooterLink from "./footer/FooterLink";
import NewsLetter from "./footer/NewsLetter";
import PrivacyPolicy from "./PrivacyPolicy";

const Footer = () => {
  return (
    <div className="px-5 flex flex-col gap-10">
      <FooterLink />
      <NewsLetter />
      <hr></hr>
      <PrivacyPolicy />
    </div>
  );
};

export default Footer;
