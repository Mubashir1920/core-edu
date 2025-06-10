"use client"

import Image1 from "@/public/assets/core-education-1.png";
import Image2 from "@/public/assets/core-education-2.png";
import Image3 from "@/public/assets/core-education-3.png";
import EduProLogo from "@/public/assets/edupro-logo.png"
import TeachingLogo from "@/public/assets/teaching.png"
import Image from "next/image";
import { LuNotebookPen } from "react-icons/lu";
import { motion } from "motion/react"

const slides = [
    <Image priority src={Image2} alt="Teaching Career" className="w-60 rounded-4xl object-cover " />,
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
]

// Duplicate the slides
const duplicatedSlides = [...slides, ...slides]

const HomeHeroSlider = () => {
    return (
        <section>
            <div className="overflow-hidden w-full">
                <motion.div
                    className="flex items-end gap-6 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        duration: 10
                    }}
                >
                    {duplicatedSlides.map((slide, index) => (
                        <div key={index} className="flex-shrink-0">
                            {slide}
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="min-w-fit flex my-7 overflow-hidden justify-end">
                <a
                    href="#"
                    className="bg-primary text-white font-light text-md pr-10 pl-4 py-4 rounded-xl hover:bg-primary/90 -mr-5 transition"
                >
                    <LuNotebookPen className="inline-block mr-3" size={22} />
                    Take a Free Assessment Test
                </a>
            </div>
        </section>
    )
}

export default HomeHeroSlider;
