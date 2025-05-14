import React from "react";
import Image from "next/image";
import Logo from "../../public/images/monstercat-logo.webp";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 bg-[rgb(24,24,21)] px-8 py-2 flex flex-row items-center justify-between">
      <Image alt="web logo" src={Logo} width={35} height={35} />
      <Link href="">
        <div className="flex flex-col gap-[6px]">
          <span className="w-7 h-[3px] bg-[rgba(241,241,241,0.5)] block rounded-full"></span>
          <span className="w-7 h-[3px] bg-[rgb(241,241,241,0.5)] block rounded-full"></span>
          <span className="w-7 h-[3px] bg-[rgb(241,241,241,0.5)] block rounded-full"></span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
