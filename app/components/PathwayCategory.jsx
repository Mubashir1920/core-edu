'use client'
import { motion } from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";

const categories = [
    {
        id: "01",
        title: "Professional Development",
    },
    {
        id: "02",
        title: "Professional Accreditation",
    },
    {
        id: "03",
        title: "Customized Development",
    },
];

export default function PathwayCategory() {
    return (
        <div className="w-full px-4 py-8 md:py-16 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold tracking-tighter text-center text-black">
                    Pathway <span className="text-primary">Categories</span>
                </h2>

                <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            className={`${index == 0 ? 'bg-primary text-white' : ''} rounded-4xl text-lg group cursor-pointer hover:bg-primary text-darkgray/80 font-medium bg-lightgray hover:text-white flex flex-col gap-10 pl-5  pr-10 py-10 min-h-[170px] w-full md:w-[250px] relative transition-all duration-300`}
                        >
                            <div className=" tracking-tight  mb-2">{category.id}</div>
                            <div className="tracking-tight leading-tight">
                                {category.title.split(" ")[0]} <br />{category.title.split(" ")[1]}
                            </div>
                            <div className={`${index == 0 ? "opacity-100" : ''} rounded-full bg-muted-400 opacity-0 group-hover:opacity-100 duration-300 transition-opacity absolute right-5 text-white block p-2`} >
                                <LuArrowUpRight size={22} />
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
