import React from "react";
import { Play, Share2 } from "lucide-react";

const Song = (props) => {
  const { index, title, artist, duration } = props;
  return (
    <div className="flex items-center justify-between">
      <p className="flex-[10%] text-xl">{index}</p>
      <Play className="flex-[15%] pr-4" />
      <div className="flex-[65%] font-main pr-10">
        <p>{title}</p>
        <p className="text-sm">{artist}</p>
      </div>
      <div className="flex gap-2 flex-[10%] items-center">
        <p className="text-lg">{duration}</p>
        <Share2 />
      </div>
    </div>
  );
};

export default Song;
