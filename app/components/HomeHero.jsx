import Image from "next/image";

import HeroSecPlus from "@/public/assets/herosec.png";
import Image1 from "@/public/assets/core-education-1.png";
import Image2 from "@/public/assets/core-education-2.png";
import Image3 from "@/public/assets/core-education-3.png";
import EduProLogo from "@/public/assets/edupro-logo.png"
import TeachingLogo from "@/public/assets/teaching.png"

import { LuArrowUpRight } from "react-icons/lu";
import { LuNotebookPen } from "react-icons/lu";


const HomeHero = () => {
    return (
        <>
            <section className="container mx-auto py-10  md:py-20 " >
                <h1 className="text-center text-black  px-2 font-bold md:tracking-[-3px] tracking-[-0.06em] leading-10 capitalize text-[28px] md:text-[50px] " >
                    Empower your learning
                    <Image src={HeroSecPlus} className="inline-block w-[80px] md:w-32 ml-2" alt="Core-education-empower" /><br />
                    Journey with <span className=" text-primary " > Core Education</span>
                </h1>
                <p className=" text-black text-sm md:text-md w-full lg:w-[70%] md:w-[60%] mx-auto capitalize text-center mt-5 " >
                    At Core Education, we believe in transforming education through innovative  solutions tailored to your needs.
                </p>
                <div className="w-full  flex justify-center my-5 " >
                    <button className="bg-primary text-md hover:bg-primary/90 cursor-pointer rounded-3xl text-background py-3 px-6 block text-center" >
                        Get Started
                    </button>
                    <span className="bg-primary text-white rounded-[100%] hover:bg-primary/90 cursor-pointer p-3 flex justify-center items-center  " >
                        <LuArrowUpRight size={22} />
                    </span>
                </div>
            </section>
            <section>
                <div className="w-full flex items-end justify-between overflow-hidden gap-2 ">

                    {/* <div className="-ml-10"> */}
                    <Image src={Image2} alt="Teaching Career" className="w-60 rounded-4xl object-cover md:-ml-10 -ml-28 " />
                    {/* </div> */}

                    <div className=" min-w-[250px]   px-4 py-10 bg-lightgray rounded-4xl  flex flex-col justify-between items-start gap-2">
                        <Image src={TeachingLogo} className="mb-5" alt="teaching-course" />
                        <p className="text-md leading-4 mt-5 font-semibold text-black">Advance your <br /> Teaching Career</p>
                    </div>
                    <div className=" min-w-[220px]">
                        <Image src={Image3} alt="Writing on Laptop" className="rounded-4xl  object-cover   h-[340px] " />
                    </div>

                    <div className=" min-w-[220px]  px-4 py-8 bg-lightgray rounded-4xl  flex flex-col justify-center items-center gap-2">
                        <p className="text-sm -mb-3 text-primary ">Certified with</p>
                        <Image src={EduProLogo} alt="edupro logo" width={120} />
                    </div>

                    <div className=" min-w-[200px] -mr-20 ">
                        <Image src={Image1} alt="AI Education" className="rounded-4xl object-cover h-64 " />
                    </div>
                </div>
                <div className=" min-w-fit  flex my-7 overflow-hidden justify-end">
                    <a href="#" className=" bg-primary text-white font-light  text-md pr-10 pl-4 py-4 rounded-xl hover:bg-primary/90 -mr-5 transition">
                        <LuNotebookPen className="inline-block mr-3" size={22} />
                        Take a Free Assessment Test
                    </a>
                </div>
            </section>
        </>
    );
};

export default HomeHero;
