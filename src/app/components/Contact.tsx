import React from "react";

const Contact = () => {
  return (
    <div className="contact-section-image">
      <div className="mt-10 flex flex-col px-5">
        <div className="mx-auto mt-[300px]">
          <h1 className="uppercase text-[40px] text-white font-bold">
            contact details
          </h1>
          <div>
            <div>
              <h2 className="uppercase text-[#12B9EE] text-[34px] mt-[95px]">
                location
              </h2>
              <p className="text-white text-[20px]">
                Kızlarpınarı, Atatürk Blv. No:27, 07400 Alanya/Antalya, Turkey
              </p>
            </div>
            <div>
              <h2 className="uppercase text-[#12B9EE] text-[34px]">phone</h2>
              <p className="text-white text-[20px]">+90123456789</p>
            </div>
            <div>
              <h2 className="uppercase text-[#12B9EE] text-[34px]">mail</h2>
              <p className="text-white text-[20px]">
                info@illusionpalmbeach.com
              </p>
            </div>
          </div>
        </div>
        <div className="text-white flex justify-between px-10 mt-[275px]">
          <div className="">© ILLUSION PALM BEACH 2023</div>
          <div>
            <p>SOCIALS:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
