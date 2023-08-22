import React from "react";
import Image from "../../../node_modules/next/image";

const Gallery = () => {
  return (
    <div className="mt-10 flex flex-col max-w-[1440px]">
      <div>
        <Image src="/gallery-top.png" alt="" width={1440} height={192} />
      </div>
      <div className="mt-10 flex overflow-x-scroll justify-around gap-x-2">
        <Image src="/gallery-img1.png" alt="" width={426} height={424} />
        <Image src="/gallery-img2.png" alt="" width={426} height={424} />
        <Image src="/gallery-img3.png" alt="" width={426} height={424} />
      </div>
      <div className="mt-10">
        <Image src="/gallery-bottom.png" alt="" width={1440} height={192} />
      </div>
    </div>
  );
};

export default Gallery;
