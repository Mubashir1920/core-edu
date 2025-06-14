import { FiArrowDownRight } from "react-icons/fi";
import Image from "next/image"

import HeroBg1 from '@/public/assets/abouthero-1.png'
import HeroBg2 from '@/public/assets/abouthero-2.png'
import { LuNotebookPen } from "react-icons/lu";

export default function AboutHero() {
    return (
        <>
            <section className="container  mx-auto px-4 pt-12 ">
                <h2 className="text-4xl tracking-tighter font-bold text-center  mb-12"> <span className="text-primary" > About</span> Us</h2>

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
                    <div className="md:hidden absolute top-[50vh] right-0 flex py-5 overflow-hidden justify-end">
                        <a href="#" className=" bg-primary text-white font-light  text-md pr-10 pl-4 py-4 rounded-xl hover:bg-primary/90 -mr-5 transition">
                            <LuNotebookPen className="inline-block mr-3" size={22} />
                            Take a Free Assessment Test
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between  gap-5">
                    <div >
                        <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-3xl tracking-tighter font-bold">Who we are</h3>
                            <FiArrowDownRight size={35} />
                        </div>
                    </div>

                    <div className=" space-y-4 md:w-[50%] w-full font-medium  ">
                        <p className="text-black">
                            Core Ed is a transformative learning platform designed to empower the next generation of educators. Built on the belief that great teaching changes lives, we offer accessible, flexible, and globally recognized training programs that help teachers grow—both personally and professionally
                        </p>
                        <p className="text-gray-700">
                            Our partnership with EduPro ensures that every qualification earned through Core Ed meets international standards, opening doors to local and global opportunities alike. From private schools in Pakistan to international teaching platforms, Core Ed graduates are equipped to thrive in diverse educational environments. We are more than a certification provider—we are a community of passionate educators committed to reshaping education through quality, relevance, and impact.
                        </p>
                    </div>
                </div>
            </section>
            <div className="hidden md:flex min-w-fit py-5 overflow-hidden justify-end">
                <a href="#" className=" bg-primary text-white font-light  text-md pr-10 pl-4 py-4 rounded-xl hover:bg-primary/90 -mr-5 transition">
                    <LuNotebookPen className="inline-block mr-3" size={22} />
                    Take a Free Assessment Test
                </a>
            </div>
        </>
    )
}
