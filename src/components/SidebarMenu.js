import React from "react";
import { ChevronRight } from "lucide-react";

const SidebarMenu = () => {
  return (
    <div>
      <ul className="uppercase flex flex-col gap-4 font-bold text-xl pl-8 pt-8 font-kanit">
        <div className="flex items-center gap-4">
          <li>Music</li>
          <ChevronRight size={15} />
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
