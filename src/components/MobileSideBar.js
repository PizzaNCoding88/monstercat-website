import React from "react";
import { CircleX } from "lucide-react";
import Image from "next/image";
import WhiteLogo from "../../public/images/monstercat-logo-white.svg";
import SidebarMenu from "./SidebarMenu";

const MobileSideBar = (props) => {
  const { status } = props;
  return (
    <div className="absolute w-screen h-[100vh] bg-black z-10 top-0">
      <div className="flex items-center justify-between py-4 px-8">
        <Image alt="white logo" src={WhiteLogo} width={200} />
        <CircleX size={28} onClick={status} />
      </div>
      <SidebarMenu />
    </div>
  );
};

export default MobileSideBar;
