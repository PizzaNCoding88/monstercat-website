"use client";
import React from "react";
import Image from "next/image";

const Buttons = (props) => {
  const { text, style, icon: Icon } = props;

  return (
    <button
      className={`border-1 border-gray-500 py-2 px-4 flex items-center gap-2 uppercase font-bold font-days tracking-wider text-sm ${
        style == "primary" && "bg-brand"
      } `}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {text}
    </button>
  );
};

export default Buttons;
