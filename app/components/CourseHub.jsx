"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "motion/react"
import { FaCheck, FaStar } from "react-icons/fa"
import Image from "next/image"
import { BsChevronRight } from "react-icons/bs"
import Link from "next/link"

const tabs = [
    { id: "professional", label: "Professional Development", active: true },
    { id: "ai", label: "AI in Education", active: false },
    { id: "instructional", label: "Instructional Design", active: false },
    { id: "leadership", label: "Educational Leadership", active: false },
]

const tabContent = {
    professional: {
        levelUp: "Level-up your daily practice.",
        title: "Professional Development",
        description:
            "Sharpen core teaching skills—from classroom management to digital literacy—in short, stackable modules you can finish between grading sessions.",
        features: [
            "Engaging lesson delivery & active learning tactics",
            "Differentiation for mixed-ability classrooms",
            "Parent & peer communication techniques",
            "Data-driven formative assessment",
        ],
        testimonial: {
            text: "Core Eds courses transformed how I run my lessons—students are more engaged, and I feel confident using tech every day.",
            author: "Ayesha Khan, Biology Teacher, Lahore Grammar School",
        },
        spotlightCourse: {
            title: "AI-Enhanced Classroom Strategies",
            image: "/assets/Core-Education-Online-Course.png",
            tags: ["Personalization", "Automation", "Design", "Ethical Use"],
        },
    },
    ai: {
        levelUp: "Embrace the future of education.",
        title: "AI in Education",
        description:
            "Discover how artificial intelligence can enhance your teaching methods, streamline administrative tasks, and create personalized learning experiences for every student.",
        features: [
            "AI-powered lesson planning and content creation",
            "Automated grading and feedback systems",
            "Personalized learning pathways for students",
            "Ethical AI implementation in classrooms",
        ],
        testimonial: {
            text: "The AI courses helped me integrate technology seamlessly into my curriculum. My students are more motivated and I save hours on planning.",
            author: "Dr. Sarah , Computer Science Professor, Lahore Grammar School",
        },
        spotlightCourse: {
            title: "Machine Learning for Educators",
            image: "/assets/Core-Education-Online-Course.png",
            tags: ["Machine Learning", "Data Analysis", "Student Insights", "Predictive Analytics"],
        },
    },
    instructional: {
        levelUp: "Design learning that sticks.",
        title: "Instructional Design",
        description:
            "Master the art and science of creating effective learning experiences through evidence-based design principles, multimedia integration, and learner-centered approaches.",
        features: [
            "Learning objectives and curriculum mapping",
            "Multimedia and interactive content design",
            "Assessment design and rubric development",
            "Universal Design for Learning (UDL) principles",
        ],
        testimonial: {
            text: "These instructional design courses revolutionized how I create content. My courses are now more engaging and effective than ever before.",
            author: "Saba Naeen , Curriculum Designer, Lahore Grammar School",
        },
        spotlightCourse: {
            title: "Interactive Learning Experiences",
            image: "/assets/Core-Education-Online-Course.png",
            tags: ["UX Design", "Gamification", "Accessibility", "Engagement"],
        },
    },
    leadership: {
        levelUp: "Lead educational transformation.",
        title: "Educational Leadership",
        description:
            "Develop the skills to lead educational institutions through change, foster innovation, and create environments where both educators and students thrive.",
        features: [
            "Strategic planning and vision development",
            "Team building and professional development",
            "Change management in educational settings",
            "Data-driven decision making for leaders",
        ],
        testimonial: {
            text: "The leadership program gave me the tools to transform our school culture. We've seen remarkable improvements in both teacher satisfaction and student outcomes.",
            author: "Fatima ,Computer Science Teacher, Alpha High School",
        },
        spotlightCourse: {
            title: "Digital Transformation Leadership",
            image: "/assets/Core-Education-Online-Course.png",
            tags: ["Digital Strategy", "Innovation", "Culture Change", "Technology Integration"],
        },
    },
}

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

    const currentContent = tabContent[activeTab]

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
                            className={`px-6 w-full py-3 rounded-[20px] text-md font-medium transition-all duration-300 ${tab.id === activeTab ? "bg-primary text-white" : "bg-lightgray text-darkgray/70"
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
                        key={activeTab} // Add key to trigger re-animation on tab change
                    >
                        <div className="mb-6">
                            <p className="text-primary font-medium mb-2">{currentContent.levelUp}</p>
                            <h2 className="text-2xl md:text-3xl tracking-tighter font-bold mb-4">{currentContent.title}</h2>
                            <p className="text-black">{currentContent.description}</p>
                        </div>
                        <hr className="container mx-auto py-3 text-primary/50" />
                        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-7 gap-x-0 gap-y-5 lg:gap-y-0">
                            {/* Left Side */}
                            <div className="col-span-2">
                                <div className="mb-8" ref={featuresRef}>
                                    <h3 className="text-lg tracking-tight font-bold text-black mb-4">You'll master:</h3>
                                    <div className="space-y-3">
                                        {currentContent.features.map((feature, index) => (
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
                                    <p className="tracking-tight mb-4">"{currentContent.testimonial.text}"</p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-bold tracking-tight text-lg text-gray-900">
                                                {currentContent.testimonial.author}
                                            </p>
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
                            <div className="col-span-1">
                                <motion.div
                                    ref={spotlightRef}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={spotlightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <div className="mb-4">
                                        <h3 className="text-lg tracking-tight font-bold text-black mb-4">Spotlight Course</h3>
                                    </div>
                                    <div className="overflow-hidden p-4 rounded-[20px] bg-primary">
                                        <div className="relative">
                                            <Image
                                                src={currentContent.spotlightCourse.image || "/placeholder.svg"}
                                                width={200}
                                                height={250}
                                                alt={currentContent.spotlightCourse.title}
                                                className="w-full h-48 rounded-[20px] object-cover"
                                            />
                                        </div>
                                        <h4 className="text-white font-semibold py-2 tracking-tight text-lg">
                                            {currentContent.spotlightCourse.title}
                                        </h4>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {currentContent.spotlightCourse.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-white text-primary text-sm font-medium lg:font-normal rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                                <button className="w-full text-primary mt-2 text-sm text-right">
                                    <Link href='/courses' >
                                        See All Courses <BsChevronRight className="inline-block" />
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
