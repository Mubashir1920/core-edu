"use client"

import { FaQuestion } from "react-icons/fa"
import { motion } from "motion/react"

export default function FAQComponent() {
    const faqs = [
        {
            question: "Who can enroll in Core Education courses?",
            answer:
                "Our courses are designed primarily for current and aspiring educators—teachers, school leaders, examiners, and corporate trainers. If you have a passion for teaching and at least a high-school diploma (or equivalent), you’re eligible to join.",
        },
        {
            question: "Are Core Education credentials internationally recognized?",
            answer:
                "Yes. Every certificate or diploma is issued in partnership with EduPro, mapped to international qualification frameworks. That means your credential is accepted by private schools across Pakistan and by global institutions following IB, IGCSE, and other curricula.",
        },
        {
            question: "How long does a typical course take to complete?",
            answer:
                "Most micro-courses run 4–6 weeks at 3–4 study hours per week. Longer certification tracks last 8–12 weeks, and diploma modules span 12–16 weeks. Because all content is self-paced, you can accelerate or slow down to match your schedule.",
        },
        {
            question: "Can I stack multiple courses toward a degree?",
            answer:
                "Absolutely. Short courses award stackable credits that automatically count toward our Professional Diploma or Degree pathways. You can upskill now and decide later if you’d like those credits applied to a larger qualification.",
        },
        {
            question: "What is the learning format—online, on-site, or hybrid?",
            answer:
                "You choose. All courses are available 100% online through our LMS, with optional live workshops. Selected programs also offer hybrid or on-campus intensives for schools and enterprises that prefer face-to-face sessions.",
        },
    ]

    return (
        <div className="container mx-auto pt-10 lg:pt-20 lg:pb-10">
            {/* Header */}
            <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl tracking-tighter font-bold">
                    Frequently Asked Questions (FAQs)
                </h2>
            </div>

            {/* FAQ Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex gap-4 sm:gap-6"
                    >
                        {/* Icon */}
                        <div className="bg-primary/5 p-5 max-h-fit rounded-3xl">
                            <FaQuestion size={28} className="text-primary" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg text-darkgray font-semibold tracking-tighter mb-3 leading-tight">
                                {faq.question}
                            </h3>
                            <p className="text-sm sm:text-base text-darkgray/70 leading-5">{faq.answer}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
