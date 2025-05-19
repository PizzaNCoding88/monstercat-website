import React from "react";
import { ChevronRight, ChevronUp } from "lucide-react";
import { useState } from "react";

import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const SidebarMenu = () => {
  const [musicMenu, setMusicMenu] = useState();
  const [aboutMenu, setAboutMenu] = useState();
  const [eventsMenu, setEventsMenu] = useState();
  const [programmingMenu, setProgrammingMenu] = useState();
  function openCloseMusicMenu() {
    setMusicMenu(!musicMenu);
  }
  function openCloseAboutMenu() {
    setAboutMenu(!aboutMenu);
  }
  function openCloseEventsMenu() {
    setEventsMenu(!eventsMenu);
  }
  function openCloseProgrammingMenu() {
    setProgrammingMenu(!programmingMenu);
  }
  return (
    <div className="h-8/12 overflow-y-auto">
      <ul className="uppercase flex flex-col gap-4 font-bold text-xl pl-8 pt-1 font-kanit tracking-wide">
        <div className="flex flex-col">
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={openCloseMusicMenu}
          >
            <li>Music</li>
            {musicMenu ? <ChevronUp size={15} /> : <ChevronRight size={15} />}
          </div>

          {musicMenu && (
            <motion.ul
              className="pl-6 pt-1 font-light flex flex-col gap-1 text-lg tracking-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opcaity: 0 }}
              transition={{ duration: 0.2, ease: "easeIn" }}
            >
              <li>our music</li>
              <li>Instinct</li>
              <li>Uncaged</li>
              <li>Silk</li>
            </motion.ul>
          )}
        </div>
        <li>Artists</li>
        <div className="flex flex-col">
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={openCloseAboutMenu}
          >
            <li>About</li>
            {aboutMenu ? <ChevronUp size={15} /> : <ChevronRight size={15} />}
          </div>
          {aboutMenu && (
            <motion.ul
              className="pl-6 pt-1 font-light flex flex-col gap-1 text-lg tracking-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opcaity: 0 }}
              transition={{ duration: 0.2, ease: "easeIn" }}
            >
              <li>About Monstercat</li>
              <li>Diversity & Inlcusion</li>
              <li>Code of Ethos</li>
              <li>Environmental</li>
              <li>Contact us</li>
              <li>Careers</li>
            </motion.ul>
          )}
        </div>
        <li>News</li>
        <div className="flex flex-col">
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={openCloseEventsMenu}
          >
            <li>Events</li>
            {eventsMenu ? <ChevronUp size={15} /> : <ChevronRight size={15} />}
          </div>
          {eventsMenu && (
            <motion.ul
              className="pl-6 pt-1 font-light flex flex-col gap-1 text-lg tracking-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opcaity: 0 }}
              transition={{ duration: 0.2, ease: "easeIn" }}
            >
              <li>Monstercat Events Experience</li>
              <li>Upcoming events</li>
            </motion.ul>
          )}
        </div>
        <div className="flex flex-col">
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={openCloseProgrammingMenu}
          >
            <li>Programming</li>
            {programmingMenu ? (
              <ChevronUp size={15} />
            ) : (
              <ChevronRight size={15} />
            )}
          </div>
          {programmingMenu && (
            <motion.ul
              className="pl-6 pt-1 font-light flex flex-col gap-1 text-lg tracking-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opcaity: 0 }}
              transition={{ duration: 0.2, ease: "easeIn" }}
            >
              <li className="capitalize">MonstercatTV</li>
              <li>Call of the wild</li>
              <li>Silk showcase</li>
              <li>Upcoming Shows</li>
            </motion.ul>
          )}
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
