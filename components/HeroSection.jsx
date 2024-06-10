import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 lg:flex-[7] flex flex-col justify-center lg:pr-8">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            你好, 我是 林毓翔 Samuel !
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            assumenda iusto dolorem et facilis omnis corrupti illum quo,
            recusandae voluptatibus!
          </p>
          <div>
            <button className="px-4 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              發送面試邀請
            </button>
            <button className="px-4 py-3 mt-4 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white">
              Download CV
            </button>
          </div>
        </div>
        <div className="flex-1 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] relative">
            <Image
              src="/images/profile_image.png"
              alt="Picture of the author"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
