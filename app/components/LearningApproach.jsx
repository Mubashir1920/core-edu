"use client"

import { motion } from "motion/react"
import { FaRegComments } from "react-icons/fa6";
import { BsStack } from "react-icons/bs";
import Image from "next/image"

import ApproachImage from '@/public/assets/learning-approach-core-education.png';

export default function LearningApproach() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    }

    return (
        <section className="py-20 px-5 md:px-0" >

            <motion.div
                className="max-w-6xl mx-auto py-20 px-15 bg-gray-50 rounded-4xl"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="flex flex-col md:flex-row gap-6 items-center ">
                    {/* Left side - Image with badges */}
                    <motion.div className="relative w-full md:flex hidden  justify-center md:w-1/2 h-[240px] md:h-[300px]" variants={itemVariants}>
                        <div className="relative w-[50%] h-full  ">
                            <Image
                                src={ApproachImage}
                                alt="Person studying with notebook and laptop"
                                fill
                                className="  object-cover  rounded-4xl"
                            />

                            {/* Progressive Learning Badge */}
                            <motion.div
                                className="absolute top-5 -right-10  backdrop-blur-[5px] bg-primary/50 text-white py-4 pl-2 pr-8 rounded-2xl "
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.3 }}
                            >
                                <BsStack className="mb-5" size={18} />
                                <div className="leading-5 font-light">Progressive <br /> Learning</div>
                                <div className=" font-light"></div>
                            </motion.div>

                            {/* Interactive Activities Badge */}
                            <motion.div
                                className="absolute bottom-5 -left-15 bg-primary/60 backdrop-blur-[5px] tracking-tight  text-white px-3 py-3 rounded-xl flex items-center gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7, duration: 0.3 }}
                            >
                                <FaRegComments size={20} />
                                <span className="text-md font-light">Interactive Activities</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div className="w-full md:w-1/2" variants={itemVariants}>
                        <motion.div className="text-lg uppercase text-black/50 tracking-tight mb-2" variants={itemVariants}>
                            OUR APPROACH
                        </motion.div>

                        <motion.h2 className="text-4xl  tracking-tighter font-bold mb-4" variants={itemVariants}>
                            A Structured Learning Experience
                        </motion.h2>

                        <motion.p className="text-darkgray mb-6 tracking-tight text-lg" variants={itemVariants}>
                            Our programs follow a step-by-step learning model — from core concepts to advanced skills — with interactive
                            activities, real-world projects, and expert guidance.
                        </motion.p>

                        <motion.button
                            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-4xl  transition-colors duration-300"
                            variants={itemVariants}
                        >
                            Get Started
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
