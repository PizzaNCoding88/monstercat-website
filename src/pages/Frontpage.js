"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/monstercat-logo.webp";
import Link from "next/link";
import { AlignRight } from "lucide-react";
import MobileSideBar from "../components/Sidebar/MobileSideBar";

import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import MainSection from "../components/MainSection";
import Tracklist from "../components/Tracklist";
import MusicVideoSection from "../components/MusicVideoSection";

export default function Frontpage() {
  const [isOpen, setIsOpen] = useState();
  function changeOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="min-h-screen">
      <header>
        <nav className="h-16 bg-[rgb(24,24,21)] px-8 py-2 flex flex-row items-center justify-between">
          <Image alt="web logo" src={Logo} width={35} height={35} />
          <Link href="" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex flex-col gap-[6px]">
              <AlignRight />
            </div>
          </Link>
        </nav>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: 250, y: -70 }}
              animate={{ x: 0 }}
              exit={{ x: 250 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
            >
              <MobileSideBar status={changeOpen} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <MainSection />
      <Tracklist />
      <MusicVideoSection />
    </div>
  );
}
