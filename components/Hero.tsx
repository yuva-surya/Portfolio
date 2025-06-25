import React from "react";
import "../app/globals.css";
import { MeteorDemo } from "./magicui/meteors";
import { Spotlight } from "./ui/spotlight";
import { TypewriterEffectSmoothDemo } from "./magicui/TypeWriter";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div
      id="hero"
      className="  w-full px-4 md:px-16 lg:px-72 py-10 md:pt-32 md:pb-2 "
    >
      <div className="">
        <Spotlight
          className="top-16  left-10 md:left-32 md:top-20 h-screen"
          fill="white"
        />
      </div>

      <div className="flex flex-col items-center justify-start">
        <div className="-pt-10 md:-pt-32 md:pb-10  flex items-center text-center">
          <Button />
        </div>
        <MeteorDemo />
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center md:gap-10 sm:py-4 items-center mt-8 md:mt-0">
        <div className="text-center md:text-left md:px-4 md:w-1/2">
          <div className="text-base px-2 sm:px-0 font-normal text-white dark:text-white">
            I&apos;m a recent B.Tech graduate
             seeking challenging opportunities in a dynamic organization where I can contribute to both personal and professional growth, while effectively utilizing my skills and knowledge to drive the success of the company.
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <img
            className="rounded-full h-32 w-32 md:h-40 md:w-40 lg:h-44 lg:w-44 object-cover"
            src="/my pic.jpg"
            alt="profile_pic"
          />
        </div>
      </div>

      

      {/* <div className='py-32 flex items-center justify-center'>
        <Link href="https://bento.me/karan-dev"><SafariDemo/></Link>
      </div> */}
    </div>
  );
};

export default Hero;
