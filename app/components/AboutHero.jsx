import { FiArrowDownRight } from "react-icons/fi";
import Image from "next/image"

import HeroBg1 from '@/public/assets/core-edu-3.png'
import HeroBg2 from '@/public/assets/core-edu-4.png'
import { LuNotebookPen } from "react-icons/lu";
import GetStartedBtn from "./GetStartedBtn";

export default function AboutHero() {
    return (
        <>
            <section className="container  mx-auto px-4 py-12">
                <h1 className="text-center text-black  px-2 font-bold tracking-tighter  capitalize text-[35px] md:text-[50px] " >
                    <span className="text-primary" > About</span> Us
                </h1>
                <p className=" text-black tracking-tight text-sm md:text-lg w-full md:w-[50%] mx-auto capitalize text-center " >
                    Developing Skills, Empowering Individuals
                </p>
                <GetStartedBtn />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 ">
                    <div className="rounded-3xl hidden md:block overflow-hidden col-span-2 h-[200px] md:h-[300px]">
                        <Image
                            src={HeroBg1}
                            alt="Technology interface with digital elements"
                            width={500}
                            height={250}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-3xl overflow-hidden col-span-1 h-[300px] md:h-[300px]">
                        <Image
                            src={HeroBg2}
                            priority
                            alt="Person taking notes"
                            width={500}
                            height={250}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* <div className="md:hidden absolute top-[50vh] right-0 flex py-5 overflow-hidden justify-end">
                        <a href="#" className=" bg-primary text-white font-light  text-md pr-10 pl-4 py-4 rounded-xl hover:bg-primary/90 -mr-5 transition">
                            <LuNotebookPen className="inline-block mr-3" size={22} />
                            Take a Free Assessment Test
                        </a>
                    </div> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col  " >
                        <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-3xl tracking-tighter font-bold">Who we are</h3>
                            <FiArrowDownRight size={35} />
                        </div>
                        <p className="text-black font-medium">
                            We are a nationally recognized firm with strong international affiliations, dedicated to empowering local educational institutions, businesses, and professionals across the country. Our mission is to strengthen skills and leadership in education, instructional development, academic strategy, and beyond.
                        </p>
                    </div>

                    <div className="font-medium ">

                        <p className="text-black">
                            With over 30 years of experience, our team brings deep expertise from both the public and private sectors. We specialize in technological innovation, evidence-based professional development, and designing impactful certification programs. By leveraging strategic public-private partnerships, we create sustainable, measurable change in the communities we serve.
                        </p>
                        <br />
                        <p className="text-darkgray">
                            Our team of experts delivers customized solutions through flexible, expert-led training, real-world skill development, and stackable learning pathways. We are proud to be the first organization to introduce structured pathways that lead to internationally recognized degrees, with a strong focus on the technical and vocational education sector.
                        </p>
                    </div>
                </div>
            </section>
            {/* <div className="hidden md:flex min-w-fit py-5 overflow-hidden justify-end">
                <a href="#" className=" bg-primary text-white font-light  text-md pr-10 pl-4 py-4 rounded-xl hover:bg-primary/90 -mr-5 transition">
                    <LuNotebookPen className="inline-block mr-3" size={22} />
                    Take a Free Assessment Test
                </a>
            </div> */}
        </>
    )
}
