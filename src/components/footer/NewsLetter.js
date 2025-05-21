import React from "react";
import { MoveRight } from "lucide-react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="uppercase text-gray-500 text-xs font-main">
        Monstercat News
      </h3>
      <p className="font-main text-sm tracking-widest">
        Don't miss a thing, stay up to date with the latest news from us.
      </p>
      <div className="flex justify-between">
        <input
          title="Enter Email"
          placeholder="Enter Email"
          className="email-input flex-1 h-8"
        ></input>
        <MoveRight />
      </div>
    </div>
  );
};

export default NewsLetter;
