"use client"

import { motion } from "motion/react"
import { FiClock, FiShield, FiSettings, FiBookOpen, FiBriefcase } from "react-icons/fi"
import { FaRegLightbulb } from "react-icons/fa";

const benefits = [
    {
        title: "Flexible Learning",
        description: "Learn anytime, anywhere",
        icon: FiClock,
    },
    {
        title: "Recognized Credentials",
        description: "Earn certifications & degrees",
        icon: FiShield,
    },
    {
        title: "Customized Training",
        description: "Tailored for your needs",
        icon: FiSettings,
    },
    {
        title: "Real-World Skills",
        description: "Classroom-ready knowledge",
        icon: FaRegLightbulb,
    },
    {
        title: "Expert-Led Courses",
        description: "Learn from industry leaders",
        icon: FiBookOpen,
    },
    {
        title: "Stackable Pathways",
        description: "Build toward a degree",
        icon: FiBriefcase,
    },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function BenefitsSection() {
    return (
        <section className="py-16 px-4 bg-lightgray">
            <div className="container mx-auto" >

                <div className="text-center mb-12">
                    <p className="text-lg uppercase tracking-tight text-gray-500 mb-2">BENEFITS</p>
                    <h2 className="text-3xl md:text-4xl capitalize tracking-tighter font-bold">
                        Why <span className="text-primary">choose</span> Core Education
                    </h2>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="bg-white group hover:bg-muted-100/30 border border-white hover:border-muted-400/70  transition-colors duration-500 rounded-4xl px-8 py-10  "
                            variants={item}
                        >
                            <div className="flex flex-col items-start">
                                <h3 className="text-2xl  font-semibold tracking-tight mb-2">{benefit.title}</h3>
                                <div className="bg-primary/5 p-5 rounded-3xl mb-4 group-hover:bg-white/80 transition-colors duration-700">
                                    <benefit.icon size={28} className=" text-primary " />
                                </div>
                                <p className="text-gray-600 text-[18px] tracking-tight ">{benefit.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
