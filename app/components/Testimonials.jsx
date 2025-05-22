"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import Image from "next/image"

import Avatar from '@/public/assets/avatar.jpg'

const testimonials = [
    {
        id: 1,
        quote:
            "The training helped me completely transform my classroom approach. The flexibility of online learning made it easy to balance with my work schedule.",
        name: "Williams",
        title: "High School Teacher",
    },
    {
        id: 2,
        quote:
            "This platform revolutionized how I teach. The resources are comprehensive and the support team is always available when needed.",
        name: "Johnson",
        title: "University Professor",
    },
    {
        id: 3,
        quote:
            "As someone new to online teaching, I found the tutorials incredibly helpful. My students' engagement has improved significantly since implementing these methods.",
        name: "Martinez",
        title: "Elementary Educator",
    },
]

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-8">
                <h3 className="uppercase text-lg  tracking-tight text-gray-500">TESTIMONIALS</h3>
                <h2 className="text-4xl tracking-tighter font-bold mt-2">What our users say</h2>
            </div>

            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div className="relative"
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <div className="bg-darkgray/15 rounded-xl max-w-4xl -rotate-2 z-0 w-full  h-full absolute top-0 left-[50%] -translate-x-[50%] " />

                        <div

                            className="bg-lightgray rounded-3xl z-10  p-10 md:p-16 relative mx-auto max-w-4xl"
                        >
                            <div className="flex justify-center py-5 opacity-5">
                                <svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0 25.0001L12.5 0.000152588H25L15 25.0001H25V50.0001H0V25.0001ZM35 25.0001L47.5 0.000152588H60L50 25.0001H60V50.0001H35V25.0001Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>

                            <div className="text-center">
                                <p className="text-lg md:text-2xl tracking-tight mb-8">"{testimonials[currentIndex].quote}"</p>

                                <div className="flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                        <Image
                                            src={Avatar}
                                            alt={testimonials[currentIndex].name}
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-medium text-lg">{testimonials[currentIndex].name}</p>
                                        <p className="text-md text-gray-500">{testimonials[currentIndex].title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="flex justify-center mt-8 space-x-2">
                    <button
                        onClick={handlePrevious}
                        className="px-6 py-2  rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <FiChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="px-6 rounded-full bg-teal-600 text-white flex items-center justify-center hover:bg-teal-700 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <FiChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div >
    )
}
