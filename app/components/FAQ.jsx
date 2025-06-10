"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BsChevronUp } from "react-icons/bs"




export default function FAQAccordion() {
    const [faqs, setFaqs] = useState([
        {
            question: "What is Core Ed?",
            answer: "Core Ed is a professional learning platform offering certifications, short courses, and practical resources to support teachers and educators in Pakistan. Our goal is to equip educators with the tools and knowledge needed for modern, inclusive, and impactful teaching.",
            isOpen: false,
        },
        {
            question: "Who are Core Ed’s programs designed for?",
            answer: <>
                <p className="my-2" >Our programs are ideal for:</p>
                <ul className="list-disc pl-5 " >
                    <li>In-service teachers (private or public sector)</li>
                    <li>Fresh graduates interested in education</li>
                    <li>School administrators or coordinators</li>
                    <li>Non-traditional educators (e.g., tutors, NGO workers, facilitators)</li>
                </ul>
            </>,
            isOpen: false,
        },
        {
            question: "Do I need a background in education to join?",
            answer: "No. While prior experience helps, our courses are designed to be beginner-friendly and suitable for anyone interested in becoming a better educator.",
            isOpen: false,
        },
        {
            question: "Are courses offered online or in-person?",
            answer: "Currently, our courses are primarily online, with live sessions, recorded lectures, and downloadable resources. In-person workshops may be available in select cities.",
            isOpen: false,
        },
        {
            question: "What topics do you cover in your courses?",
            answer: <>
                <p className="my-2" >Our courses cover:</p>
                <ul className="list-disc pl-5 " >
                    <li>Child-centered pedagogy</li>
                    <li>Inclusive education</li>
                    <li>Classroom management</li>
                    <li>Digital teaching tools</li>
                    <li>Lesson planning and assessment</li>
                    <li>Emotional intelligence for teachers</li>
                    <li>Leadership in education</li>
                </ul>
            </>,
            isOpen: false,
        },
        {
            question: "Will I get a certificate after completing a course?",
            answer: "Yes, upon successful completion of any Core Ed course or program, you will receive a digital certificate.",
            isOpen: false,
        },
        {
            question: "Can schools or organizations partner with Core Ed?",
            answer: "We welcome partnerships with schools, educational NGOs, and other organizations to offer customized training for their teams.",
            isOpen: false,
        },
        {
            question: "How do I register for a course?",
            answer: "You can register directly through our LMS, linked on the homepage. Just select a course, fill out the application form, and make your payment. You’ll receive further instructions by email.",
            isOpen: false,
        },
        {
            question: "How can I contact Core Ed?",
            answer: "\n- \n- \n- \n- ",
            answer: <>
                <p className="my-2" >You can reach us via:</p>
                <ul className="list-disc pl-5 " >
                    <li>Email: [insert email]</li>
                    <li>Instagram or Facebook: [insert handle]</li>
                    <li>Phone/WhatsApp: [insert number]</li>
                    <li>Contact form on our website</li>
                </ul>
            </>,
            isOpen: false,
        },
        {
            question: "What makes Core Ed different from other teacher training programs?",
            answer: "Core Ed focuses on contextualized, practical learning for Pakistani classrooms. We blend global best practices with local realities, offering flexible, accessible, and interactive content.",
            isOpen: false,
        },
        {
            question: "Can I take more than one course at a time?",
            answer: "Yes, you can enroll in multiple courses if you feel you can manage the workload.",
            isOpen: false,
        },
        {
            question: "How do I access the course materials?",
            answer: "Once you register, you’ll get access to a student portal or be added to a dedicated platform on LMS, where all resources, videos, and assignments are uploaded.",
            isOpen: false,
        },
        {
            question: "Is there any age limit to enroll?",
            answer: "No. Anyone above the age of 18 can enroll, regardless of age or academic background, as long as they are committed to learning and growth.",
            isOpen: false,
        },
        {
            question: "Do you provide any teaching practice opportunities?",
            answer: "Yes, some of our certification tracks include micro-teaching projects, classroom observations, or practice assignments that simulate real-life teaching.",
            isOpen: false,
        },
        {
            question: "Are Core Ed instructors qualified?",
            answer: "All instructors are experienced educators, certified trainers, or subject specialists with backgrounds in education, teacher development, and classroom leadership.",
            isOpen: false,
        },
        {
            question: "Can schools sign up their whole teaching staff?",
            answer: "Yes, we offer bulk registration, custom packages, and special rates for schools or educational organizations.",
            isOpen: false,
        },
    ])


    const toggleFAQ = (index) => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    return { ...faq, isOpen: !faq.isOpen }
                }
                return faq
            }),
        )
    }

    return (
        <section className="bg-lightgray py-12 md:py-16 mt-10" >
            <div className="max-w-6xl  mx-auto px-4">
                <div className="mb-8">
                    <p className="uppercase tracking-tight text-darkgray/80 mb-2">FAQS</p>
                    <h2 className="text-4xl tracking-tighter font-bold">Have questions? We've got answers</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl overflow-hidden ${faq.isOpen ? "bg-primary text-white" : "bg-white"}`}
                        >
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-light text-lg">{faq.question}</span>
                                <motion.div animate={{ rotate: faq.isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                                    <BsChevronUp className={`h-5 w-5 ${faq.isOpen ? "text-lightgray" : "text-gray-500"}`} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {faq.isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 font-light text-white/80 pb-4">{faq.answer}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
