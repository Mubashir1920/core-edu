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
import GetStartedBtn from "./GetStartedBtn"

const categories = [
    {
        id: "01",
        title: "Professional Development -  For Individuals",
    },
    {
        id: "02",
        title: "Professional Accreditation - For Individuals",
    },
    {
        id: "03",
        title: "Customized Development - For Businesses",
    },
]

const categoryDetails = [
    {
        heading: (
            <>
                Professional <span className="text-primary">Development</span> <br className="hidden md:block" />
                (Upskilling & Training)
            </>
        ),
        description:
            "Short-term learning opportunities for skill enhancement, which can later contribute to a formal degree if pursued.",
        image: PathwaysImg,
        boxes: [
            {
                icon: <FaWrench size={25} className=" text-primary" />,
                title: "Workshops & Micro-PDs",
                description: "Specialized training on teaching strategies, technology integration, and classroom management.",
            },
            {
                icon: <FaLaptop size={25} className=" text-primary" />,
                title: "Online/Hybrid",
                description: "Learn at your pace with flexible online and hybrid learning options.",
            },
            {
                icon: <SiAdguard size={25} className=" text-primary" />,
                title: "Recognized Certification",
                description: "Recognized credentials in specific subject areas or pedagogical techniques.",
            },
            {
                icon: <HiOutlineRectangleStack size={25} className=" text-primary" />,
                title: "Stackable Learning",
                description: "Credits from completed courses can be converted into academic credit toward a degree.",
            },
        ],
    },
    // 2nd Item
    {
        heading: (
            <>
                Professional<span className="text-primary"> Accreditation</span> <br className="hidden md:block" /> (
                Degree-Awarding Programs)
            </>
        ),
        description: "Structured academic programs leading to formal qualifications.",
        image: PathwaysImg2,
        boxes: [
            {
                icon: <LuBadgeCheck size={25} className=" text-primary" />,
                title: "Certificate Programs",
                description: "For specialization in a particular teaching skill or subject.",
            },
            {
                icon: <LuBrain size={25} className=" text-primary" />,
                title: "Postgraduate Diplomas",
                description: "Advanced specialization for experienced teachers.",
            },
            {
                icon: <LuBookOpen size={25} className=" text-primary" />,
                title: "Diplomas",
                description: "Broader teaching competencies.",
            },
            {
                icon: <LuGraduationCap size={25} className=" text-primary" />,
                title: "Full Degrees",
                description: "Comprehensive teacher education programs",
            },
        ],
    },
    // 3rd Item
    {
        heading: (
            <>
                Customized <span className="text-primary">Development</span> <br className="hidden md:block" />(Tailored Institutional Training)
            </>
        ),
        description: "School-specific training programs designed for institutions based on their unique needs.",
        image: PathwaysImg3,
        boxes: [
            {
                icon: <MdConnectedTv size={25} className=" text-primary" />,
                title: "Needs Analysis",
                description: "Meet with school management to assess teaching gaps and needs.",
            },
            {
                icon: <PiPaintBrushBroadThin size={25} className=" text-primary" />,
                title: "Training Delivery",
                description: "Execution of the training program on-site.",
            },
            {
                icon: <PiHandshakeThin size={25} className=" text-primary" />,
                title: "On-Site Support",
                description: "Continued assistance after training, if required, to ensure long-term impact",
            },
            {
                icon: <LuNotebookPen size={25} className=" text-primary" />,
                title: "Program Design",
                description: "Customized training modules tailored to the school’s objectives.",
            },
            {
                icon: < MdOutlineMessage size={25} className=" text-primary" />,
                title: "Learning & Feedback Report",
                description: "Post-training analysis to measure effectiveness.",
            },
            {
                icon: <FaPeopleRoof size={25} className=" text-primary" />,
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
                                <div className="tracking-tight ">{category.id}</div>
                                <div className="tracking-tight leading-tight">
                                    {/* {category.title.split(" ")[0]} <br />
                                    {category.title.split(" ")[1]} */}
                                    {category.title}
                                </div>
                                <motion.div
                                    className={`rounded-full bg-muted-400/50 ${index === activeCategory ? "opacity-100" : "opacity-0"} group-hover:opacity-100 duration-300 transition-opacity absolute right-5 text-white block p-2`}
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
                    className="max-w-6xl mx-auto p-8 :p-10 overflow-hidden"
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
                            <div className="flex flex-col md:flex-row justify-between  items-start md:items-center mb-12">
                                <motion.div variants={itemVariants} className="mb-6 md:mb-0">
                                    <h1 className="text-4xl tracking-tighter font-bold">{categoryDetails[activeCategory].heading}</h1>
                                </motion.div>
                                <motion.div variants={itemVariants} className="max-w-xs text-right">
                                    <p className="tracking-tight text-gray-600">{categoryDetails[activeCategory].description}</p>
                                    <GetStartedBtn />
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
                                            className="bg-white p-8  rounded-4xl"
                                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                        >
                                            <div className="bg-muted-100/40 w-12 h-12 rounded-lg flex items-center justify-center mb-20 md:mb-8  ">
                                                {box.icon}
                                            </div>
                                            <h3 className="font-semibold text-lg ">{box.title}</h3>
                                            <p className="tracking-tight  md:w-[80%] text-gray-600">{box.description}</p>
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
                                            className="bg-white p-8  rounded-4xl"
                                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                        >
                                            <div className="bg-muted-100/40 w-12 h-12 rounded-lg flex items-center justify-center mb-20 md:mb-8">
                                                {box.icon}
                                            </div>
                                            <h3 className="font-semibold ">{box.title}</h3>
                                            <p className="tracking-tight text-gray-600">{box.description}</p>
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
