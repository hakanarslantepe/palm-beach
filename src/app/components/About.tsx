import React from "react";
import Image from "../../../node_modules/next/image";

const About = () => {
  return (
    <div className="about-section-image">
      <div className="mt-10 flex flex-col">
        <div className="mx-auto mt-10">
          <Image src="/Logo3.png" alt="" width={363} height={361} />
        </div>
        <p className="uppercase mx-auto px-8 py-4 text-white text-xl max-w-[631px] text-center font-Cinzel font-bold">
          Illusion Palm Beach draws inspiration from the rich tapestry of
          Egyptian mythology, immersing visitors in an atmosphere reminiscent of
          Cleopatra s reign. Nestled in the heart of Kleopatra Beach, we provide
          a unique fusion of history, entertainment, and the refreshing beach
          vibe.
        </p>
      </div>
    </div>
  );
};

export default About;
