"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Link from "next/link";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Full-Stack",
      className: "text-white",
    },
    {
      text: "Web Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem]  ">
      {/* <TypewriterEffectSmooth words={words} className="text-white" />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link
          href="https://drive.google.com/uc?export=download&id=1sWwTy7Ql8h8Gs7qCxQvvSP-Fk4z0gV1s
"
          download="Naveen_Resume.pdf"
        >
          <button className="w-40 h-10 rounded-xl bg-blue-500 hover:bg-blue-900 dark:border-white border-white text-white text-sm">
            Download CV
          </button>
        </Link>
        <Link href="#contact">
          <button className="w-40 h-10 rounded-xl bg-white text-black hover:bg-gray-400 border border-black  text-sm">
            Hire Me
          </button>
        </Link> */}
    </div>
  );
}
