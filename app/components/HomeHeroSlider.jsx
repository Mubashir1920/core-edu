"use client"

import Image1 from "@/public/assets/core-edu-1.png";
import Image2 from "@/public/assets/01.webp";
import Image3 from "@/public/assets/core-edu-0.png";
import EduProLogo from "@/public/assets/edupro-logo.png";
import TeachingLogo from "@/public/assets/teaching.png";
import Image from "next/image";
import { useState } from "react"; // <-- just state, no framer needed

const slides = [
  <Image priority src={Image2} alt="Teaching Career" className="w-60 rounded-4xl object-cover" />,
  <div className="min-w-[250px] px-4 py-10 bg-lightgray rounded-4xl flex flex-col justify-between items-start gap-2">
    <Image priority src={TeachingLogo} className="mb-5" alt="teaching-course" />
    <p className="text-md leading-4 mt-5 font-semibold text-black">Advance your <br /> Teaching Career</p>
  </div>,
  <Image priority src={Image3} alt="Writing on Laptop" className="rounded-4xl object-cover h-[340px]" />,
  <div className="min-w-[220px] px-4 py-8 bg-lightgray rounded-4xl flex flex-col justify-center items-center gap-2">
    <p className="text-sm -mb-3 text-primary">Certified with</p>
    <Image priority src={EduProLogo} alt="edupro logo" width={120} />
  </div>,
  <Image priority src={Image1} alt="AI Education" className="rounded-4xl object-cover h-64" />
];

// Duplicate the slides for a seamless loop
const duplicatedSlides = [...slides, ...slides, ...slides, ...slides];

// ⬇️ Increase this to slow it down (seconds)
const SCROLL_DURATION_SECONDS = 30;

const HomeHeroSlider = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section>
      <div
        className="overflow-hidden w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex items-end gap-6 w-max"
          style={{
            animation: `home-hero-marquee ${SCROLL_DURATION_SECONDS}s linear infinite`,
            animationPlayState: paused ? "paused" : "running",
            willChange: "transform"
          }}
        >
          {duplicatedSlides.map((slide, index) => (
            <div key={index} className="flex-shrink-0">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Global keyframes for the marquee */}
      <style jsx global>{`
        @keyframes home-hero-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default HomeHeroSlider;
