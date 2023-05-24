import Image from "next/image";
import React from "react";
import imageClip from "./img2.avif";

const GradientClip = () => {
  return (
    <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div className="w-[108rem] flex-none flex justify-end">
        <Image
          src={imageClip}
          alt="imageClip"
          className="w-[71.75rem] flex-none max-w-none dark:hidden"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default GradientClip;
