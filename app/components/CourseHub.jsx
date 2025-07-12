"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "motion/react"
import { FaCheck, FaStar } from "react-icons/fa"
import Image from "next/image"
import { BsChevronRight } from "react-icons/bs"

const tabs = [
    { id: "professional", label: "Professional Development", active: true },
    { id: "ai", label: "AI in Education", active: false },
    { id: "instructional", label: "Instructional Design", active: false },
    { id: "leadership", label: "Educational Leadership", active: false },
]

const features = [
    "Engaging lesson delivery & active learning tactics",
    "Differentiation for mixed-ability classrooms",
    "Parent & peer communication techniques",
    "Data-driven formative assessment",
]

export default function CoursesHub() {
    const [activeTab, setActiveTab] = useState("professional")

    // Refs for viewport detection
    const headerRef = useRef(null)
    const tabsRef = useRef(null)
    const contentRef = useRef(null)
    const featuresRef = useRef(null)
    const testimonialRef = useRef(null)
    const spotlightRef = useRef(null)

    // InView hooks
    const headerInView = useInView(headerRef, { once: true, margin: "-100px" })
    const tabsInView = useInView(tabsRef, { once: true, margin: "-100px" })
    const contentInView = useInView(contentRef, { once: true, margin: "-100px" })
    const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })
    const testimonialInView = useInView(testimonialRef, { once: true, margin: "-100px" })
    const spotlightInView = useInView(spotlightRef, { once: true, margin: "-100px" })

    return (
        <div>
            <div className="container mx-auto px-4 mb-8">
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: -20 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <h2 className="text-base sm:text-lg text-gray-600 uppercase tracking-tight mb-2 sm:mb-4">THE COURSES HUB</h2>
                    <h2 className="text-4xl tracking-tighter font-bold">
                        Where Great <span className="text-primary">Teaching</span> Gets Even Better
                    </h2>
                </motion.div>

                {/* Navigation Tabs */}
                <motion.div
                    ref={tabsRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={tabsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex lg:flex-row flex-col gap-3"
                >
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 w-full py-3 rounded-[20px] text-md font-medium transition-all duration-300 ${tab.id === activeTab
                                ? "bg-primary text-white"
                                : "bg-lightgray text-darkgray/70"
                                }`}
                        >
                            {tab.label}
                        </motion.button>
                    ))}
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="bg-lightgray py-6">
                <div className="container mx-auto px-4">
                    <motion.div
                        ref={contentRef}
                        initial={{ opacity: 0, x: -30 }}
                        animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="mb-6">
                            <p className="text-primary font-medium mb-2">Level-up your daily practice.</p>
                            <h2 className="text-2xl md:text-3xl tracking-tighter font-bold mb-4">Professional Development</h2>
                            <p className="text-black">
                                Sharpen core teaching skills—from classroom management to digital literacy—in short, stackable modules
                                you can finish between grading sessions.
                            </p>
                        </div>

                        <hr className="container mx-auto py-3 text-primary/50" />

                        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-7 gap-x-0 gap-y-5 lg:gap-y-0  ">
                            {/* Left Side */}
                            <div className="col-span-2">
                                <div className="mb-8" ref={featuresRef}>
                                    <h3 className="text-lg tracking-tight font-bold text-black mb-4">You'll master:</h3>
                                    <div className="space-y-3">
                                        {features.map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={featuresInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                transition={{ duration: 0.4, delay: featuresInView ? 0.1 + index * 0.1 : 0 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="flex-shrink-0 w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center mt-0.5">
                                                    <FaCheck className="w-3 h-3 text-white" />
                                                </div>
                                                <span>{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Testimonial */}
                                <motion.div
                                    ref={testimonialRef}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="bg-white p-6 rounded-[20px]"
                                >
                                    <p className="tracking-tight mb-4">
                                        "Core Eds courses transformed how I run my lessons—students are more engaged, and I feel confident using
                                        tech every day."
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-bold tracking-tight text-lg text-gray-900">Ayesha Khan, Biology Teacher, Lahore Grammar School</p>
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Side */}
                            <div className="col-span-1 ">
                                <motion.div
                                    ref={spotlightRef}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={spotlightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <div className="mb-4">
                                        <h3 className="text-lg tracking-tight font-bold text-black mb-4">Spotlight Course</h3>
                                    </div>

                                    <div className="overflow-hidden p-4  rounded-[20px] bg-primary">
                                        <div className="relative">
                                            <Image
                                                src="/assets/Core-Education-Online-Course.png"
                                                width={200}
                                                height={250}
                                                alt="AI-Enhanced Classroom Strategies"
                                                className="w-full h-48 rounded-[20px] object-cover"
                                            />
                                        </div>

                                        <h4 className="text-white font-semibold py-2 tracking-tight text-lg">AI-Enhanced Classroom Strategies</h4>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="px-3 py-1 bg-white text-primary text-sm font-medium lg:font-normal rounded-full">
                                                Personalization
                                            </span>
                                            <span className="px-3 py-1 bg-white text-primary text-sm font-medium lg:font-normal rounded-full">
                                                Automation
                                            </span>
                                            <span className="px-3 py-1 bg-white text-primary text-sm font-medium lg:font-normal rounded-full">Design</span>
                                            <span className="px-3 py-1 bg-white text-primary text-sm font-medium lg:font-normal rounded-full">
                                                Ethical Use
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>

                                <button className="w-full text-primary mt-2 text-sm text-right">
                                    <a href="#">
                                        See All Courses <BsChevronRight className="inline-block" />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}