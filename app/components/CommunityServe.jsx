"use client"
import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "motion/react"
import { SlGraduation } from "react-icons/sl"
import { BsBriefcase } from "react-icons/bs"
import { LuNotebookPen } from "react-icons/lu"
import { RiBuildingLine } from "react-icons/ri"

import AboutSection from '@/public/assets/aboutsection-1.png'
import Image from "next/image"

const stats = [
    { icon: <SlGraduation className="text-3xl text-black" />, label: 'Teachers' },
    { icon: <BsBriefcase className="text-3xl text-black" />, label: 'Enterprises' },
    { icon: <LuNotebookPen className="text-3xl text-black" />, label: 'Examiners' },
    { icon: <RiBuildingLine className="text-3xl text-black" />, label: 'Education Institutions' },
]

export default function EducationalCommunity() {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, threshold: 0.2 })

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 },
        },
    }

    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    return (
        <div className="w-full bg-gray-50 py-16 px-4 md:px-8 lg:px-16" ref={ref}>
            <motion.div
                className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                {/* Left - Image */}
                <motion.div className="hidden md:flex justify-end h-full overflow-hidden" variants={imageVariants}>
                    <Image
                        src={AboutSection}
                        alt="Students studying together"
                        width={500}
                        className="h-full object-cover rounded-4xl"
                    />
                </motion.div>

                {/* Right - Content */}
                <div className="space-y-8">
                    <motion.div className="space-y-2" variants={itemVariants}>
                        <p className="text-gray-600 uppercase tracking-tighter text-md font-light">WHO WE SERVE</p>
                        <h2 className="text-4xl tracking-tighter font-bold">
                            Supporting <span className="text-primary">community</span> of
                            <br />
                            learners and professionals
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 px-10 grid-cols-1 gap-6"
                        variants={containerVariants}
                    >
                        {stats.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-4xl flex flex-col items-start text-center"
                                variants={itemVariants}
                            >
                                <div className="w-10 h-10 flex items-center justify-center mb-20 md:mb-10">
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold text-lg">{item.label}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
