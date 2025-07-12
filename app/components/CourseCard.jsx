"use client"

import { IoCheckmarkCircle } from "react-icons/io5"
import Image from "next/image"
import { motion } from "motion/react"

const CourseCard = ({ Img }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[20px] border border-darkgray/30 my-4 overflow-hidden"
        >
            <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="lg:w-2/5">
                    <div className="relative h-64 lg:h-full min-h-[300px]">
                        <Image
                            src={Img}
                            alt="Students working in a classroom with AI technology"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-3/5 p-6 lg:p-8">
                    {/* Register Badge */}
                    <div className="inline-block mb-4">
                        <span className="text-[#0046B9] px-3 py-1 rounded-full font-semibold tracking-tight">
                            Register for Cohort 25 now
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter mb-4">
                        AI-Enhanced Classroom Strategies
                    </h2>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-muted-100 text-primary px-3 py-1 rounded-full text-sm">Technology</span>
                        <span className="bg-darkgray/10 text-darkgray/60 px-3 py-1 rounded-full text-sm">Teaching</span>
                        <span className="bg-darkgray/10 text-darkgray/60 px-3 py-1 rounded-full text-sm">Teaching</span>
                    </div>

                    {/* Description */}
                    <p className="text-darkgray leading-5 mb-6">
                        Discover practical, step-by-step methods for integrating artificial intelligence tools into everyday teaching. In this hands-on course, you'll learn how to:
                    </p>

                    {/* Feature List */}
                    <div className="space-y-2 mb-8">
                        {[
                            {
                                title: "Personalize",
                                detail: " learning with AI-driven assessments that adapt to each student's pace."
                            },
                            {
                                title: "Streamline",
                                detail: " grading and feedback using smart evaluation platforms."
                            },
                            {
                                title: "Boost engagement",
                                detail: " through interactive AI companions and content generators."
                            },
                            {
                                title: "Safeguard",
                                detail: " ethics & privacy while deploying technology responsibly."
                            }
                        ].map(({ title, detail }, index) => (
                            <div className="flex items-start gap-3" key={index}>
                                <IoCheckmarkCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-semibold text-gray-900">{title}</span>
                                    <span className="text-gray-600">{detail}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Get Started Button */}
                    <button
                        aria-label="Get Started"
                        className="bg-primary text-white px-8 py-2 hover:bg-primary/90 text-sm rounded-2xl w-full lg:w-auto"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default CourseCard
