"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BsChevronUp } from "react-icons/bs"




export default function FAQAccordion() {
    const [faqs, setFaqs] = useState([
        {
            question: "Can I switch plans anytime?",
            answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
            isOpen: true,
        },
        {
            question: "Do you offer group discounts for institutions?",
            answer:
                "Yes, we offer special pricing for educational institutions, non-profits, and large organizations. Please contact our sales team for more information.",
            isOpen: false,
        },
        {
            question: "What's included in the Basic Plan?",
            answer:
                "The Basic Plan includes core features such as unlimited projects, basic analytics, and standard support. For more advanced features, consider our Pro or Enterprise plans.",
            isOpen: false,
        },
        {
            question: "Are the certificates recognized?",
            answer:
                "Yes, our certificates are recognized by leading industry organizations and can be added to your professional profiles like LinkedIn and shared with potential employers.",
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
