import Image from "next/image";
import React from "react";
import AlbumLogo from "../../public/images/album.webp";

const MainSection = () => {
  return (
    <div className="pt-10 bg-landing">
      <Image alt="album logo" src={AlbumLogo} className="w-9/12 mx-auto" />
    </div>
  );
};

export default MainSection;
