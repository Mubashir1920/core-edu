'use client'

import { motion } from 'motion/react';
import Step1 from "@/public/assets/step-1.png";
import Step2 from "@/public/assets/step-2.png";
import Step3 from "@/public/assets/step-3.png";
import Step4 from "@/public/assets/step-4.png";
import Image from "next/image";

const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function WorkSteps() {
    return (
        <div className="py-10 px-4 sm:px-6 lg:px-8 min-h-screen bg-lightgray ">
            <div className="text-center">
                <p className="text-md text-gray-600 uppercase tracking-tight mb-1">How it works</p>
                <h2 className="text-3xl md:text-4xl tracking-tighter font-bold mb-8">
                    How Our <span className="text-teal-600">Programs</span> Work
                </h2>
            </div>
            <div className="flex flex-col lg:flex-row items-start w-full gap-5  px-10 md:px-2  py-10">
                <div className="flex flex-col lg:flex-row lg:justify-end lg:items-end  gap-4 w-full">
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-white w-full  lg:w-[45%] hover:bg-muted-100/30 border border-white hover:border-muted-400/70  transition-colors duration-500 px-6 py-5 rounded-4xl flex flex-col justify-between"
                    >
                        <div className="flex justify-between items-start">
                            <Image src={Step1} width={60} alt="Step-1" />
                            <span className="text-gray-400 font-medium text-[17px]">01</span>
                        </div>
                        <div className="py-8" />
                        <p className="text-xl tracking-tight font-semibold text-black">
                            Identify your learning <br /> path
                        </p>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-white w-full lg:w-[45%] px-6 py-5 rounded-4xl flex flex-col justify-between hover:bg-muted-100/30 border border-white hover:border-muted-400/70  transition-colors duration-500 "
                    >
                        <div className="flex justify-between items-start">
                            <Image src={Step2} width={60} alt="Step-2" />
                            <span className="text-gray-400 font-medium text-[17px]">02</span>
                        </div>
                        <div className="py-18" />
                        <p className="text-xl tracking-tight font-semibold text-black">
                            Choose Your <br /> Program
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row justify-start items-start  gap-4 w-full ">
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-white w-full lg:w-[45%] px-6 py-5 rounded-4xl flex flex-col justify-between hover:bg-muted-100/30 border border-white hover:border-muted-400/70  transition-colors duration-500 "
                    >
                        <div className="flex justify-between items-start">
                            <Image src={Step3} width={60} alt="Step-3" />
                            <span className="text-gray-400 font-medium text-[17px]">03</span>
                        </div>
                        <div className="py-18" />
                        <p className="text-xl tracking-tight font-semibold text-black">
                            Engage in Online or face-to-face training
                        </p>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-white w-full  lg:w-[45%] px-6 py-5 rounded-4xl flex flex-col justify-between hover:bg-muted-100/30 border border-white hover:border-muted-400/70  transition-colors duration-500 "
                    >
                        <div className="flex justify-between items-start">
                            <Image src={Step4} width={60} alt="Step-4" />
                            <span className="text-gray-400 font-medium text-[17px]">04</span>
                        </div>
                        <div className="py-8" />
                        <p className="text-xl tracking-tight font-semibold text-black">
                            Receive Certification <br /> or degree
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
