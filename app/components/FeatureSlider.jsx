"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "motion/react"
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from "react-icons/lia";
import Image from "next/image"

import FeatureImage1 from "@/public/assets/feature-slider-1.png"
import FeatureImage2 from "@/public/assets/feature-slider-2.png"
import FeatureImage3 from "@/public/assets/feature-slider-3.png"
import FeatureImage4 from "@/public/assets/feature-slider-4.png"


const featureCards = [
    {
        id: 1,
        title: "Smart Course Builder",
        description: "Create engaging learning paths with interactive modules.",
        image: FeatureImage1,
    },
    {
        id: 2,
        title: "Flexible Delivery Modes",
        description: "Offer online, hybrid, or in-person learning with ease.",
        image: FeatureImage2,
    },
    {
        id: 3,
        title: "Progress Tracking",
        description: "Monitor learner achievements and course completion.",
        image: FeatureImage3,
    },
    {
        id: 4,
        title: "Stackable Credits",
        description: "Convert short courses into degree pathways.",
        image: FeatureImage4,
    },
]

export default function FeatureSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visibleCards, setVisibleCards] = useState([])
    const [cardsPerView, setCardsPerView] = useState(4)
    const containerRef = useRef(null)

    // Handle responsive behavior
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCardsPerView(1)
            } else if (window.innerWidth < 1024) {
                setCardsPerView(2)
            } else if (window.innerWidth < 1280) {
                setCardsPerView(3)
            } else {
                setCardsPerView(4)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Update visible cards when cardsPerView or currentIndex changes
    useEffect(() => {
        const startIndex = currentIndex
        const endIndex = Math.min(startIndex + cardsPerView, featureCards.length)
        setVisibleCards(featureCards.slice(startIndex, endIndex))
    }, [currentIndex, cardsPerView])

    const handleNext = () => {
        if (currentIndex + cardsPerView < featureCards.length) {
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(0) // Loop back to the beginning
        }
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        } else {
            setCurrentIndex(featureCards.length - cardsPerView) // Loop to the end
        }
    }

    return (
        <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Heading */}
            <div className="mb-12">
                <p className="text-darkgray/70 uppercase tracking-tighter" >Core Features</p>
                <h1 className="text-4xl tracking-tighter font-bold text-black">
                    Everything you need to <span className="text-primary">teach</span>
                    <br className="hidden sm:block" /> and learn better
                </h1>
            </div>

            {/* Slider container */}
            <div className="relative">
                {/* Navigation buttons */}
                <div className="absolute right-0 -top-16 flex space-x-2">
                    <button
                        onClick={handlePrev}
                        className="p-2 rounded-full  hover:bg-gray-100 transition-colors"
                        aria-label="Previous slide"
                    >
                        <LiaLongArrowAltLeftSolid className="text-darkgray/70 w-7 h-7" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-2 rounded-full  hover:bg-gray-100 transition-colors"
                        aria-label="Next slide"
                    >
                        <LiaLongArrowAltRightSolid className="w-7 h-7" />
                    </button>
                </div>

                {/* Cards container */}
                <div ref={containerRef} className="overflow-hidden md:px-5 px-0 ">
                    <motion.div
                        className="flex gap-0 sm:gap-6"
                        animate={{ x: `-${currentIndex * (100 / cardsPerView)}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {featureCards.map((card) => (
                            <motion.div
                                key={card.id}
                                className={`flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-16px)]`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="bg-lightgray rounded-4xl overflow-hidden h-full px-5 py-6  md:py-4 flex flex-col">
                                    <div className="relative h-56 sm:h-48">
                                        <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-cover rounded-4xl" />
                                    </div>
                                    <div className=" py-2 flex flex-col flex-grow">
                                        <h3 className="text-xl tracking-tight font-bold mb-2">{card.title}</h3>
                                        <p className="text-sm tracking-tight text-darkgray">{card.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
