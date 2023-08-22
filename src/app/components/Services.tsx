import React from "react";
import Image from "../../../node_modules/next/image";

const servicesData = [
  {
    id: 1,
    title: "Dining with a View",
    content:
      "Indulge in a sumptuous feast with the endless blue of the Mediterranean as your backdrop at Illusion Palm Beach. Our gourmet cuisine coupled with the rhythmic whisper of waves is sure to take your dining experience to a new level. Savour our specially crafted delicacies, each bursting with vibrant flavours, as you revel in the stunning seaside panorama. It's not just a meal, but an unforgettable experience.",
    image: "/services-img1.png",
  },
  {
    id: 2,
    title: "Sea & Sun",
    content:
      "Recharge, rejuvenate, and bask in the warm glow of the sun at our exclusive beachside. Feel the sand beneath your toes and the gentle, soothing sea breeze as you lounge on our comfortable sunbeds. Or take a refreshing plunge into our crystal-clear pool, offering a tranquil haven to unwind. At Illusion Palm Beach, we redefine leisure by merging relaxation with an alluring beach vibe.",
    image: "/services-img2.png",
  },
  {
    id: 3,
    title: "Beachside Nightlife",
    content:
      "As the sun dips below the horizon, Illusion Palm Beach transforms into the ultimate beachside party destination. Get ready to sway to the beats spun by our talented DJ, as you relish the exotic cocktails under the star-studded sky. Dance the night away on the sands, or simply sit back and immerse yourself in the energetic and mesmerizing atmosphere. Join us for a night of unforgettable memories.",
    image: "/services-img3.png",
  },
];

const Services = () => {
  return (
    <div className="mt-10 font-Cinzel uppercase flex flex-col gap-y-10">
      {servicesData.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          <div className="flex-1 max-w-[572px] max-h-[659px] mx-auto">
            <Image src={item.image} alt="" width={572} height={659} />
          </div>
          <div className="flex-1 font-bold lg:ml-4 lg:mr-8 mx-4">
            <h1 className="text-center text-[#1034A6] lg:text-[40px] text-[28px] my-8 lg:my-20">
              {item.title}
            </h1>
            <p className=" lg:text-lg text-left lg-w-[572px] lg:h-[218px]">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
