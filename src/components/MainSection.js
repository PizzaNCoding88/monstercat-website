import Image from "next/image";
import React from "react";
import AlbumLogo from "../../public/images/album.webp";

const MainSection = () => {
  return (
    <div className="pt-10">
      <Image alt="album logo" src={AlbumLogo} />
    </div>
  );
};

export default MainSection;
