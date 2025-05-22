"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { FaLaptop, FaWrench } from "react-icons/fa"
import { SiAdguard } from "react-icons/si"
import { HiOutlineRectangleStack } from "react-icons/hi2"
import { LuArrowUpRight, LuBadgeCheck, LuBookOpen, LuBrain, LuGraduationCap, LuNotebookPen } from "react-icons/lu"
import { PiHandshakeThin, PiPaintBrushBroadThin } from "react-icons/pi";
import { MdConnectedTv, MdOutlineMessage } from "react-icons/md";
import Image from "next/image"

import PathwaysImg from "@/public/assets/pathways-1.png"
import PathwaysImg2 from "@/public/assets/pathways-2.png"
import PathwaysImg3 from "@/public/assets/pathways-3.png"
import { FaPeopleRoof } from "react-icons/fa6"

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
]

const categoryDetails = [
    {
        heading: (
            <>
                Professional <span className="text-primary">Development</span> <br className="hidden md:block" />
                (B2C Upskilling & Training)
            </>
        ),
        description:
            "Short-term learning opportunities for skill enhancement, which can later contribute to a formal degree if pursued.",
        image: PathwaysImg,
        boxes: [
            {
                icon: <FaWrench className="w-5 h-5 text-primary" />,
                title: "Workshops & Micro-PDs",
                description: "Specialized training on teaching strategies, technology integration, and classroom management.",
            },
            {
                icon: <FaLaptop className="w-5 h-5 text-primary" />,
                title: "Online/Hybrid",
                description: "Learn at your pace with flexible online and hybrid learning options.",
            },
            {
                icon: <SiAdguard className="w-5 h-5 text-primary" />,
                title: "Recognized Certification",
                description: "Recognized credentials in specific subject areas or pedagogical techniques.",
            },
            {
                icon: <HiOutlineRectangleStack className="w-5 h-5 text-primary" />,
                title: "Stackable Learning",
                description: "Credits from completed courses can be converted into academic credit toward a degree.",
            },
        ],
    },
    // 2nd Item
    {
        heading: (
            <>
                Professional<span className="text-primary"> Accreditation</span> <br className="hidden md:block" /> (B2C –
                Degree-Awarding Programs)
            </>
        ),
        description: "Structured academic programs leading to formal qualifications.",
        image: PathwaysImg2,
        boxes: [
            {
                icon: <LuBadgeCheck className="w-5 h-5 text-primary" />,
                title: "Certificate Programs",
                description: "For specialization in a particular teaching skill or subject.",
            },
            {
                icon: <LuBrain className="w-5 h-5 text-primary" />,
                title: "Postgraduate Diplomas",
                description: "Advanced specialization for experienced teachers.",
            },
            {
                icon: <LuBookOpen className="w-5 h-5 text-primary" />,
                title: "Diplomas",
                description: "Broader teaching competencies.",
            },
            {
                icon: <LuGraduationCap className="w-5 h-5 text-primary" />,
                title: "Full Degrees",
                description: "Comprehensive teacher education programs",
            },
        ],
    },
    // 3rd Item
    {
        heading: (
            <>
                Customized <span className="text-primary">Development</span> <br className="hidden md:block" />(B2B – Tailored Institutional Training)
            </>
        ),
        description: "School-specific training programs designed for institutions based on their unique needs.",
        image: PathwaysImg3,
        boxes: [
            {
                icon: <MdConnectedTv className="w-5 h-5 text-primary" />,
                title: "Needs Analysis",
                description: "Meet with school management to assess teaching gaps and needs.",
            },
            {
                icon: <PiPaintBrushBroadThin className="w-5 h-5 text-primary" />,
                title: "Training Delivery",
                description: "Execution of the training program on-site.",
            },
            {
                icon: <PiHandshakeThin className="w-5 h-5 text-primary" />,
                title: "On-Site Support",
                description: "Continued assistance after training, if required, to ensure long-term impact",
            },
            {
                icon: <LuNotebookPen className="w-5 h-5 text-primary" />,
                title: "Program Design",
                description: "Customized training modules tailored to the school’s objectives.",
            },
            {
                icon: < MdOutlineMessage className="w-5 h-5 text-primary" />,
                title: "Learning & Feedback Report",
                description: "Post-training analysis to measure effectiveness.",
            },
            {
                icon: <FaPeopleRoof className="w-5 h-5 text-primary" />,
                title: "Face-to-Face",
                description: "In-person sessions at your institution",
            },
        ],
    },
]

export default function ProfessionalDevelopment() {
    const [activeCategory, setActiveCategory] = useState(0)

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
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

    // New animation variants for category transitions
    const contentVariants = {
        initial: {
            opacity: 0,
            x: 20,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                mass: 1,
            },
        },
        exit: {
            opacity: 0,
            x: -20,
            transition: {
                duration: 0.2,
            },
        },
    }

    return (
        <>
            <div className="w-full px-4 py-8 md:py-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tighter text-center text-black">
                        Pathway <span className="text-primary">Categories</span>
                    </h2>

                    <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                onClick={() => setActiveCategory(index)}
                                className={`${index === activeCategory ? "bg-primary text-white" : ""} rounded-4xl text-lg group cursor-pointer hover:bg-primary text-darkgray/80 font-medium bg-lightgray hover:text-white flex flex-col gap-10 pl-5 pr-10 py-10 min-h-[170px] w-full md:w-[250px] relative transition-all duration-300`}
                                whileHover={{
                                    scale: 1.03,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="tracking-tight mb-2">{category.id}</div>
                                <div className="tracking-tight leading-tight">
                                    {category.title.split(" ")[0]} <br />
                                    {category.title.split(" ")[1]}
                                </div>
                                <motion.div
                                    className={`rounded-full bg-muted-400 ${index === activeCategory ? "opacity-100" : "opacity-0"} group-hover:opacity-100 duration-300 transition-opacity absolute right-5 text-white block p-2`}
                                    animate={index === activeCategory ? { rotate: 0 } : { rotate: -45 }}
                                    transition={{ duration: 0.3, type: "spring" }}
                                >
                                    <LuArrowUpRight size={22} />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <section className="bg-lightgray">
                <motion.div
                    className="max-w-6xl mx-auto p-6 md:p-10 overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Animated Content Section */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={contentVariants}
                            className="w-full"
                        >
                            {/* Heading and Description */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                                <motion.div variants={itemVariants} className="mb-6 md:mb-0">
                                    <h1 className="text-4xl tracking-tighter font-bold">{categoryDetails[activeCategory].heading}</h1>
                                </motion.div>
                                <motion.div variants={itemVariants} className="max-w-xs">
                                    <p className="text-sm text-gray-600">{categoryDetails[activeCategory].description}</p>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full flex justify-start my-5"
                                    >
                                        <button className="bg-primary text-md hover:bg-primary/90 cursor-pointer rounded-3xl text-background py-3 px-6 block">
                                            Get Started
                                        </button>
                                        <span className="bg-primary text-white rounded-[100%] hover:bg-primary/90 cursor-pointer p-3 flex justify-center items-center">
                                            <LuArrowUpRight size={22} />
                                        </span>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Main Content Grid */}
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Left Column */}
                                <div className="space-y-8">
                                    {(
                                        categoryDetails[activeCategory].boxes.length === 6
                                            ? categoryDetails[activeCategory].boxes.slice(0, 3)
                                            : categoryDetails[activeCategory].boxes.slice(0, 2)
                                    ).map((box, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={itemVariants}
                                            className="bg-white p-6 rounded-4xl"
                                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                        >
                                            <div className="bg-muted-100/40 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                                {box.icon}
                                            </div>
                                            <h3 className="font-semibold mb-2">{box.title}</h3>
                                            <p className="text-sm text-gray-600">{box.description}</p>
                                        </motion.div>
                                    ))}
                                </div>


                                {/* Center Column - Main Image */}
                                <motion.div variants={itemVariants} className="hidden md:flex items-center justify-center">
                                    <motion.div
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="relative w-[350px] h-[500px] rounded-3xl overflow-hidden"
                                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                                    >
                                        <Image
                                            src={categoryDetails[activeCategory].image || "/placeholder.svg"}
                                            alt="Digital learning interface"
                                            className=" object-cover rounded-3xl"
                                        />
                                    </motion.div>
                                </motion.div>

                                {/* Right Column */}
                                <div className="space-y-8">
                                    {(
                                        categoryDetails[activeCategory].boxes.length === 6
                                            ? categoryDetails[activeCategory].boxes.slice(3, 6)
                                            : categoryDetails[activeCategory].boxes.slice(2, 4)
                                    ).map((box, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={itemVariants}
                                            className="bg-white p-6 rounded-4xl"
                                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                        >
                                            <div className="bg-muted-100/40 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                                {box.icon}
                                            </div>
                                            <h3 className="font-semibold mb-2">{box.title}</h3>
                                            <p className="text-sm text-gray-600">{box.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </section>
            
        </>
    )
}
