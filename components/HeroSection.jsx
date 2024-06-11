"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 lg:flex-[7] flex flex-col place-self-center text-center sm:text-left ">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              你好, 我是 {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "林毓翔 Samuel !",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "是一位網頁開發工程師",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            assumenda iusto dolorem et facilis omnis corrupti illum quo,
            recusandae voluptatibus!
          </p>
          <div>
            <button className="px-4 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-slate-200 ">
              發送面試邀請
            </button>
            <button className="px-1 py-1 w-full sm:w-fit mt-4 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-200 text-white ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
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
