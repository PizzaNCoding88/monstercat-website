import React from "react";
import {
  SiInstagram,
  SiTiktok,
  SiX,
  SiTwitch,
  SiFacebook,
  SiDiscord,
  SiPlayerfm,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";

const SidebarBottom = () => {
  return (
    <div className="absolute bottom-0 pb-16 pl-8 flex flex-col gap-8">
      <div className="flex gap-4">
        <SiInstagram />
        <SiTiktok />
        <SiX />
        <SiTwitch />
        <SiFacebook />
        <SiDiscord />
        <SiPlayerfm />
      </div>
      <div className="flex items-center gap-8 font-main tracking-wide font-bold">
        <button className="uppercase border-2 border-white px-2 py-1">
          Sign In
        </button>
        <div className="flex gap-2">
          <p>OR</p>
          <Link href="/">Sign UP</Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarBottom;
