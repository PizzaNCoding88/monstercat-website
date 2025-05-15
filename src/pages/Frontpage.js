"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/monstercat-logo.webp";
import Link from "next/link";
import { AlignRight } from "lucide-react";
import MobileSideBar from "../components/Sidebar/MobileSideBar";

export default function Frontpage() {
  const [isOpen, setIsOpen] = useState();
  function changeOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <header>
      <nav className="h-16 bg-[rgb(24,24,21)] px-8 py-2 flex flex-row items-center justify-between">
        <Image alt="web logo" src={Logo} width={35} height={35} />
        <Link href="" onClick={() => setIsOpen(!isOpen)}>
          <div className="flex flex-col gap-[6px]">
            <AlignRight />
          </div>
        </Link>
      </nav>
      {isOpen && <MobileSideBar status={changeOpen} />}
    </header>
  );
}
