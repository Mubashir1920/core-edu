"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"

import ToolsImage1 from "@/public/assets/feature-tools-1.png"
import ToolsImage2 from "@/public/assets/feature-tools-2.png"
import ToolsImage3 from "@/public/assets/feature-tools-3.png"
import ToolsImage4 from "@/public/assets/feature-tools-4.png"


export default function EducationalTools() {
    // State to track which section is currently being hovered
    const [activeSection, setActiveSection] = useState(null)

    // State to track if mouse is over a section
    const [isHovering, setIsHovering] = useState(false)

    // State to track mouse position
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    // Ref for the container to get its bounds
    const containerRef = useRef(null)

    // Track mouse position relative to the container
    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            })
        }
    }

    // Data for each section
    const sections = [
        {
            id: "teachers",
            title: "Teachers",
            description:
                "Flexible, stackable courses to upskill, earn certifications, or work toward a degree—on your schedule.",
            image: ToolsImage1,
        },
        {
            id: "enterprises",
            title: "Enterprises",
            description:
                "Custom training programs aligned with institutional goals, delivered on-site with measurable outcomes.",
            image: ToolsImage2,
        },
        {
            id: "examiners",
            title: "Examiners",
            description: "Specialized courses to strengthen assessment methods, pedagogy, and subject expertise.",
            image: ToolsImage3,
        },
        {
            id: "education-institutions",
            title: "Education Institutions",
            description:
                "End-to-end development programs designed to improve teaching quality through structured, face-to-face training.",
            image: ToolsImage4,
        },
    ]

    return (

        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setIsHovering(false)}
            className="mx-auto py-12 bg-lightgray  overflow-hidden  relative"
        >
            {/* Header */}
            <div className="text-center mb-8 px-2">
                <p className=" uppercase text-darkgray/80 tracking-tight mb-2">TAILORED FOR EVERY ROLE</p>
                <h2 className="text-4xl capitalize tracking-tighter font-bold">
                    Personalized <span className="text-primary">tools</span> for educators,
                    <br className="hidden md:block" /> institutions & more
                </h2>
            </div>

            {/* Floating image that follows mouse - only visible when hovering a section */}
            <AnimatePresence>
                {isHovering && activeSection && (
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: mousePosition.x - 125, // Center the image on cursor
                            y: mousePosition.y - 75, // Center the image on cursor
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                            opacity: { duration: 0.2 },
                            scale: { duration: 0.2 },
                            x: { type: "spring", stiffness: 300, damping: 50 },
                            y: { type: "spring", stiffness: 300, damping: 50 },
                        }}
                        className="absolute pointer-events-none z-10 w-[250px] h-[150px]"
                        style={{
                            top: 0,
                            left: 0,
                            transform: `translate(max(0px, min(${mousePosition.x - 125}px, 100% - 250px)), max(0px, min(${mousePosition.y - 75}px, 100% - 150px)))`,
                        }}
                    >
                        <Image
                            src={sections.find((s) => s.id === activeSection)?.image}
                            alt="Teachers illustration"
                            className="w-full h-full rounded-4xl object-cover  bg-white"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Sections */}
            <div className="mt-12 relative z-0">
                {sections.map((section, index) => (
                    <motion.div
                        key={section.id}
                        onMouseEnter={() => {
                            setActiveSection(section.id)
                            setIsHovering(true)
                        }}
                        onMouseLeave={() => {
                            setIsHovering(false)
                        }}
                        className={`py-6 md:px-20 px-10 flex flex-col md:flex-row justify-between gap-4 cursor-pointer ${index !== sections.length - 1 ? "border-b border-gray-200" : ""} ${activeSection === section.id && isHovering ? "bg-white md:bg-transparent rounded-lg md:rounded-none " : ""}`}
                        whileHover={{
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                            transition: { duration: 0.2 },
                        }}
                    >
                        <h3
                            className={`text-2xl tracking-tighter font-semibold ${activeSection === section.id && isHovering ? "text-black" : "text-darkgray/70"}`}
                        >
                            {section.title}
                        </h3>
                        <p className={` ${activeSection === section.id && isHovering ? "text-black" : "text-darkgray/70"} md:w-[50%] tracking-tight md:text-base`}>{section.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
