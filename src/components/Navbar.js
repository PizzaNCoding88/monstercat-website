"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/monstercat-logo.webp";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import MobileSideBar from "./MobileSideBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(0);
  return (
    <nav className="h-16 bg-[rgb(24,24,21)] px-8 py-2 flex flex-row items-center justify-between">
      <Image alt="web logo" src={Logo} width={35} height={35} />
      <Link href="" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex flex-col gap-[6px]">
          <AlignJustify />
        </div>
      </Link>
      {isOpen && <MobileSideBar />}
    </nav>
  );
};

export default Navbar;
