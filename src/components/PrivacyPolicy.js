import React from "react";
import {
  SiYoutube,
  SiInstagram,
  SiTiktok,
  SiX,
  SiSpotify,
  SiApple,
  SiTwitch,
  SiFacebook,
  SiDiscord,
  SiPlayerfm,
} from "@icons-pack/react-simple-icons";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-main italic">
        2011 - 2025 © Monstercat, All Rights Reserved
      </p>
      <div className="flex w-full gap-[4%]">
        <SiYoutube width={20} />
        <SiInstagram width={20} />
        <SiTiktok width={20} />
        <SiSpotify width={20} />
        <SiApple width={20} />
        <SiTwitch width={20} />
        <SiFacebook width={20} />
        <SiDiscord width={20} />
        <SiPlayerfm />
      </div>
      <p className="text-xs text-center font-main pt-8">
        We acknowledge with gratitude the traditional, ancestral and unceded
        land of the Coast Salish peoples, including the territories of the
        Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh
        (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which
        Monstercat`&apos;`s Vancouver HQ stands.
      </p>
      <p className="text-xs text-center font-main pb-12">
        We acknowledge the unceded and ancestral territories of the
        Gabrielino/Tongva peoples on which our LA team live and work.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
