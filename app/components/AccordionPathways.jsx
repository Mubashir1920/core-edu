"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"

import Accordion1 from '@/public/assets/accordion-1.png';
import Accordion2 from '@/public/assets/accordion-2.png';
import Accordion3 from '@/public/assets/accordion-3.png';
import Image from "next/image"

const AccordionPathways = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index)
    }

    const items = [
        {
            title: "Professional Development",
            description: (
                <p className="text-md leading-5 tracking-tight font-semibold">
                    For Indiviuals – Upskilling & Training:{" "}
                    <span className="font-normal">
                        Short-term learning for skill enhancement, which can later contribute to a formal degree if pursued.
                    </span>
                </p>
            ),
            content: (
                <>
                    <div className="flex flex-col  max-w-full md:max-w-2xl md:items-start gap-4 py-4">
                        <Image
                            src={Accordion1}
                            alt="Professional Development"
                            width={600}
                            height={400}
                            className="w-full max-w-md aspect-[3/2] object-cover rounded-4xl"
                        />

                        <div className="w-full">
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="px-4 py-2 bg-white rounded-full  md:text-md ">Online & Hybrid</span>
                                <span className="px-4 py-2 bg-white rounded-full  md:text-md ">Workshops & Micro-PDs</span>
                                <span className="px-4 py-2 bg-white rounded-full  md:text-md ">Certifications</span>
                                <span className="px-4 py-2 bg-white rounded-full  md:text-md ">Stackable Learning</span>
                            </div>
                            <ul className="list-disc  capitalize sm:text-md tracking-tight max-w-lg mt-3 space-y-1">
                                <li>
                                    <strong>Workshops & Micro-PDs</strong> – Specialized training on teaching methodologies, technology
                                    integration, and classroom management.
                                </li>
                                <li>
                                    <strong>Certifications</strong> – Recognized credentials in specific subject areas or pedagogical
                                    techniques.
                                </li>
                                <li>
                                    <strong>Stackable Learning</strong> – Completed professional development courses can be converted into
                                    academic credit toward a degree.
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            ),
        },
        {
            title: "Professional Accreditation",
            description: (
                <p className="text-[16px] leading-5 tracking-tight font-semibold">
                    For Indiviuals – Degree-Awarding Programs:{" "}
                    <span className="font-normal">
                        Structured academic programs leading to formal qualifications.
                    </span>
                </p>
            ),
            content: (
                <>
                    <div className="flex flex-col  max-w-full md:max-w-2xl md:items-start gap-4 py-4">
                        <Image
                            src={Accordion2}
                            alt="Professional Development"
                            width={600}
                            height={400}
                            className="w-full max-w-md aspect-[3/2] object-cover rounded-4xl"
                        />

                        <div className="w-full">
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="px-4 py-2 bg-white rounded-full  md:text-md ">Certifications (2 courses)</span>
                                <span className="px-4 py-2 bg-white rounded-full  md:text-md ">Diplomas (6 courses)</span>
                                <span className="px-4 py-2 bg-white rounded-full  md:text-md ">Degree (18 courses)</span>
                                <span className="px-4 py-2 bg-white rounded-full  md:text-md ">Postgraduate Diplomas (16 courses)</span>
                                <span className="px-4 py-2 bg-white rounded-full  md:text-md ">Online & Hybrid</span>
                            </div>
                            <ul className="list-disc  capitalize  sm:text-md tracking-tight max-w-lg mt-3 space-y-1">
                                <li>
                                    <strong>Certificate Programs</strong> – For specialization in a particular teaching skill or subject
                                </li>
                                <li>
                                    <strong>Diplomas</strong> – Broader teaching competencies
                                </li>
                                <li>
                                    <strong>Postgraduate Diplomas </strong> – Advanced specialization for experienced teachers
                                </li>
                                <li>
                                    <strong>Full Degrees</strong> – Comprehensive teacher education programs
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            ),
        },
        {
            title: "Customized Development",
            description: (
                <p className="text-[16px] leading-5 tracking-tight font-semibold">
                    For Businesses – Tailored Training:{" "}
                    <span className="font-normal">
                        School-specific training programs designed for institutions based on their unique needs.
                    </span>
                </p>
            ),
            content: (
                <>
                    <div className="flex flex-col  max-w-full md:max-w-2xl md:items-start gap-4 py-4">
                        <Image
                            src={Accordion3}
                            alt="Professional Development"
                            width={600}
                            height={400}
                            className="w-full max-w-md aspect-[3/2] object-cover rounded-4xl"
                        />

                        <div className="w-full">
                            <div className="flex flex-wrap gap-2 mt-3">
                                {[
                                    "Face-to-face",
                                    "Needs Analysis",
                                    "Program Design",
                                    "Training Delivery",
                                    "Learning & Feedback Report",
                                    "On-Site Support"
                                ].map((badge, index) => (
                                    <span key={index} className="px-4 py-2 bg-white rounded-full  md:text-md ">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                            <ul className="list-disc list-inside md:list-outside  capitalize sm:text-md tracking-tight max-w-lg mt-3 space-y-1">
                                {[
                                    "Meeting with school management to assess teaching gaps and requirements.",
                                    "Customized training modules tailored to the school’s objectives.",
                                    "Execution of the training program on-site.",
                                    "Post-training analysis to measure effectiveness.",
                                    "Continued assistance after training, if required, to ensure long-term impact."
                                ].map((item, index) => (
                                    <li key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>
            ),
        },
    ]

    return (
        <section className=" pb-20" >
            <div className="w-full">
                <div className="container mx-auto py-10 sm:py-20 px-4">
                    <h2 className="text-base sm:text-lg text-gray-600 uppercase tracking-tight mb-2 sm:mb-4">Key Pathways</h2>
                    <h2 className="text-4xl tracking-tighter font-bold">
                        Teacher Professional Development <span className="text-primary">Pathways</span>
                    </h2>
                </div>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`${activeIndex === index ? "bg-lightgray py-8 sm:py-12 " : "bg-white py-3"} border-b border-gray-200 mx-auto   px-10 md:px-16 lg:px-28 transition-all duration-500`}
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex flex-col sm:flex-row relative  cursor-pointer justify-between items-start sm:items-center py-3 sm:py-5 px-0 text-left focus:outline-none gap-3 sm:gap-0"
                        >
                            <h2
                                className={`${activeIndex === index ? "opacity-100" : "opacity-50"} text-xl sm:text-2xl font-semibold tracking-tighter`}
                            >
                                {item.title.split(" ")[0]}{" "}
                                <span className={`${activeIndex === index ? "text-primary opacity-100" : "text-black"}`}>
                                    {item.title.split(" ")[1]}
                                </span>
                            </h2>
                            <span
                                className={`${activeIndex === index ? "text-black" : "opacity-50"} w-full sm:w-[45%] text-sm sm:text-base`}
                            >
                                {item.description}
                            </span>
                            <motion.div
                                animate={{ rotate: activeIndex === index ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-black self-end  sm:self-center"
                            >
                                <FiArrowUpRight size={24} />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden flex justify-start sm:justify-end"
                                >
                                    <div className="pb-6 w-full sm:w-auto">{item.content}</div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AccordionPathways
