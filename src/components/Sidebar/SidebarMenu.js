import React from "react";
import { ChevronRight, ChevronUp } from "lucide-react";
import { useState } from "react";

const SidebarMenu = () => {
  const [musicMenu, setMusicMenu] = useState();
  function openCloseMusicMenu() {
    setMusicMenu(!musicMenu);
  }
  return (
    <div>
      <ul className="uppercase flex flex-col gap-4 font-bold text-xl pl-8 pt-1 font-kanit tracking-wide">
        <div className="flex flex-col">
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={openCloseMusicMenu}
          >
            <li>Music</li>
            {musicMenu ? <ChevronUp /> : <ChevronRight />}
          </div>
          {musicMenu && (
            <ul className="pl-6 pt-1 font-light flex flex-col gap-1 text-lg tracking-normal">
              <li>our music</li>
              <li>Instinct</li>
              <li>Uncaged</li>
              <li>Silk</li>
            </ul>
          )}
        </div>
        <li>Artists</li>
        <div className="flex items-center gap-4">
          <li>About</li>
          <ChevronRight size={15} />
        </div>
        <li>News</li>
        <div className="flex items-center gap-4">
          <li>Events</li>
          <ChevronRight size={15} />
        </div>
        <div className="flex items-center gap-4">
          <li>Programming</li>
          <ChevronRight size={15} />
        </div>
        <li>Gold</li>
        <li>Partners</li>
        <li>Press</li>
        <li>Player</li>
        <li>Shop</li>
        <li>Lost Civilization</li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
