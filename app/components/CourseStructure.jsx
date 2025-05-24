"use client"

import { motion } from "motion/react"

export default function CourseStructure() {
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

    const horizontalLineVariant = {
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Course & Credit Structure
            </motion.h1>

            <motion.div
                className="relative"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Timeline line */}
                <div className="hidden md:block absolute top-[11px] left-0 w-full h-[2px] bg-gray-100 z-0"></div>
                <motion.div
                    className="hidden md:block absolute top-[11px] left-0 h-[2px] bg-primary z-10"
                    variants={horizontalLineVariant}
                />

                {/* Vertical line for mobile */}
                <div className="md:hidden absolute top-0 left-[31px] w-[2px] h-full bg-darkgray/30 z-0"></div>
                <motion.div
                    className="md:hidden absolute top-0 left-[31px] w-[2px] bg-primary z-10"
                    variants={verticalLineVariant}
                />

                <div className="flex flex-col md:flex-row md:justify-between relative z-20 gap-12 md:gap-0">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="flex md:flex-col items-start md:items-center relative md:static pl-8 md:pl-0"
                        >
                            {/* Circle */}
                            <motion.div
                                className={`absolute md:static left-[31px] w-[22px] h-[22px] rounded-full border-[3px] border-white -translate-x-1/2 md:translate-x-0 ${step.color}`}
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            />

                            {/* Content */}
                            <motion.div
                                className="ml-6 md:ml-0 mt-0 md:mt-6 text-left md:text-center"
                                whileHover={{ x: 5, y: -5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <h3 className="text-xl font-medium mb-2 whitespace-nowrap">{step.title}</h3>
                                <p className="text-base font-medium">{step.courses} Courses</p>
                                <p className="text-sm text-gray-600">{step.creditHours} Credit Hours</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
