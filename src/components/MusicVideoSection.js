import React from "react";

const MusicVideoSection = () => {
  return (
    <div className="px-5 py-10 flex flex-col gap-8">
      <h2 className="uppercase font-main font-bold text-xl">Music Video</h2>
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/7nObtWENgxA?si=UsZnH5ERyEq4naIG"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <hr className="mt-32"></hr>
    </div>
  );
};

export default MusicVideoSection;
