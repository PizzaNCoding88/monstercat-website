import Image from "next/image";
import React from "react";
import AlbumLogo from "../../public/images/album.webp";
import Buttons from "./buttons/Buttons";
import { LucideShare2, LucidePlay } from "lucide-react";

const MainSection = () => {
  return (
    <div className="pt-10 bg-landing flex-col">
      <Image alt="album logo" src={AlbumLogo} className="w-[85%] mx-auto" />
      <div className="flex gap-1 font-kanit font-light py-8 pl-5">
        <span className="text-brand">Instinct</span>
        <p> --- </p>
        <p className="text-red">Released May 22,2020</p>
      </div>
      <div className="font-kanit text-2xl uppercase pl-5">
        <p className="mb-3">Level Days</p>
        <p>Conro</p>
      </div>
      <div className="flex py-6 pl-5 gap-2">
        <Buttons text={"Listen Now"} icon={LucidePlay} style="primary" />
        <Buttons text={"Share"} icon={LucideShare2} />
      </div>
    </div>
  );
};

export default MainSection;
