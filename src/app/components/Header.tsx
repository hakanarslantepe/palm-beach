import React from "react";
import Image from "../../../node_modules/next/image";

const data = [
  {
    id: 1,
    title: "home",
  },
  {
    id: 2,
    title: "about us",
  },
  {
    id: 3,
    title: "services",
  },
  {
    id: 4,
    title: "events",
  },
  {
    id: 5,
    title: "gallery",
  },
  {
    id: 6,
    title: "contact",
  },
];

const Header = () => {
  return (
    <div className="flex font-Cinzel">
      <div className="flex w-full z-[1] h-[150px] absolute left-0 top-0  items-center justify-center opacity-30 bg-white">
        {data.map((item) => (
          <h1
            key={item.id}
            className="lg:p-6 md:p-4 sm:p-2 p-1 text-black font-extrabold cursor-pointer uppercase"
          >
            {item.title}
          </h1>
        ))}
      </div>
      <div className=" absolute top-[-18px] hidden md:block">
        <Image src="/Logo2.png" alt="" width={120} height={193} />
      </div>
    </div>
  );
};

export default Header;