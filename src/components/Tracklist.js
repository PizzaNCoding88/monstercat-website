import React from "react";
import Song from "./songs/Song";

const Tracklist = () => {
  return (
    <div className="px-5 pb-50">
      <h1 className="font-main text-xl uppercase font-bold pb-5">Tracklist</h1>
      <div className="flex flex-col gap-8">
        <Song
          index={"1"}
          title={"The Small Things"}
          artist={"Conro"}
          duration={"3:35"}
        />
        <Song
          index={"2"}
          title={"Without Your Love"}
          artist={"Conro"}
          duration={"3:09"}
        />
        <Song
          index={"3"}
          title={"Therapy"}
          artist={"Conro"}
          duration={"3:06"}
        />
        <Song
          index={"4"}
          title={"Fighters"}
          artist={"Conro"}
          duration={"3:46"}
        />
        <Song
          index={"5"}
          title={"Way Up"}
          artist={"Conro & Nevve"}
          duration={"3:32"}
        />
        <Song
          index={"6"}
          title={"Waiting"}
          artist={"Conro"}
          duration={"3:07"}
        />
        <Song
          index={"7"}
          title={"Dreaming"}
          artist={"Conro"}
          duration={"2:57"}
        />
        <Song index={"8"} title={"Tattoo"} artist={"Conro"} duration={"3:29"} />
      </div>
    </div>
  );
};

export default Tracklist;
