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
                            Pellentesque nec ex et ipsum semper suscipit quis et elit. Ut sed lacinia metus, in congue augue. Integer
                            pulvinar blandit orci, eu ultricorper elit porta elementum.
                        </p>
                        <p className="text-gray-700">
                            Pellentesque nec ex et ipsum semper suscipit quis et elit. Ut sed lacinia metus, in congue augue. Integer
                            pulvinar blandit orci, eu ultricorper elit porta elementum.
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
