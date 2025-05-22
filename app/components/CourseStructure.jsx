"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaGraduationCap, FaCertificate, FaAward } from "react-icons/fa"

export default function CourseStructure() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)

        return () => {
            window.removeEventListener("resize", checkMobile)
        }
    }, [])

    const steps = [
        {
            title: "Certificate",
            courses: 2,
            creditHours: 6,
            color: "bg-primary/70",
        },
        {
            title: "Diploma",
            courses: 8,
            creditHours: 18,
            color: "bg-primary/90",
        },
        {
            title: "Post-Graduate Diploma",
            courses: 8,
            creditHours: 18,
            color: "bg-primary/95",
        },
        {
            title: "Degree",
            courses: 8,
            creditHours: 18,
            color: "bg-primary",
        },
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    }

    const lineVariant = {
        hidden: { width: "0%" },
        show: {
            width: "100%",
            transition: {
                duration: 1.5,
                ease: "easeInOut",
            },
        },
    }

    const verticalLineVariant = {
        hidden: { height: "0%" },
        show: {
            height: "100%",
            transition: {
                duration: 1.5,
                ease: "easeInOut",
            },
        },
    }

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-20 font-sans">
            <motion.h1
                className="text-4xl tracking-tighter font-bold mb-16 text-center md:text-left"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Course & Credit Structure
            </motion.h1>

            {isMobile ? (
                // Mobile vertical layout
                <motion.div className="relative pl-8" variants={container} initial="hidden" animate="show">
                    {/* Vertical timeline line */}
                    <div className="absolute top-0 left-[31px] w-[2px] h-full bg-primary z-0"></div>
                    <motion.div
                        className="absolute top-0 left-[11px] w-[2px] bg-primary   z-10"
                        variants={verticalLineVariant}
                    ></motion.div>

                    {/* Steps */}
                    <div className="flex flex-col space-y-12 relative z-20">
                        {steps.map((step, index) => (
                            <motion.div key={index} className="flex items-start" variants={item}>
                                {/* Circle */}
                                <motion.div
                                    className={`absolute left-0 w-[22px] h-[22px] rounded-full border-[3px] border-white -translate-x-1/2 ${step.color}`}
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                />

                                {/* Content */}
                                <motion.div
                                    className="ml-6"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                                    <p className="text-base font-medium">{step.courses} Courses</p>
                                    <p className="text-sm text-gray-600">{step.creditHours} Credit Hours</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ) : (
                // Desktop horizontal layout
                <motion.div className="relative" variants={container} initial="hidden" animate="show">
                    {/* Timeline line */}
                    <div className="absolute top-[11px] left-0 w-full h-[2px] bg-gray-100 z-0"></div>
                    <motion.div
                        className="absolute top-[11px] left-0 h-[2px] bg-primary z-10"
                        variants={lineVariant}
                    ></motion.div>

                    {/* Steps */}
                    <div className="flex justify-between relative z-20">
                        {steps.map((step, index) => (
                            <motion.div key={index} className="flex flex-col items-center" variants={item}>
                                {/* Circle */}
                                <motion.div
                                    className={`w-[22px] h-[22px] rounded-full border-[3px] border-white ${step.color}`}
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                />

                                {/* Title */}
                                <motion.div
                                    className="mt-6 text-center w-full px-1"
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <h3 className="text-xl tracking-tight font-semibold mb-2 whitespace-nowrap">{step.title}</h3>
                                    <p className=" font-medium">{step.courses} Courses</p>
                                    <p className=" text-darkgray/70">{step.creditHours} Credit Hours</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    )
}
