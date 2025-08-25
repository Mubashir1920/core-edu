'use client'
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { RiArrowRightUpLine } from "react-icons/ri";
import Image from "next/image";

import Image1 from "@/public/assets/core-edu-6.png";
import Image2 from "@/public/assets/04.webp";
import Image3 from "@/public/assets/core-edu-14.png";

const tabs = [
    {
        title: "Professional Development",
        image: Image1,
        badges: ["Micro workshops", "Certifications", "Online & Hybrid"],
        content:
            "Professional development courses to help educators upskill, earn certifications, and stack credits toward a degree — offered online and in hybrid formats.",
    },
    {
        title: "Professional Accreditation",
        image: Image2,
        badges: ["Micro Workshops", "Certifications", "Diplomas", "Degrees", "Postgraduate Diplomas", "Online & Hybrid"],
        content:
            "Earn formal credentials through structured programs — from certificates to full degrees. Designed to deepen skills and open career paths, all courses follow credit-hour standards and offer flexible online or hybrid formats.",
    },
    {
        title: "Customized Development",
        image: Image3,
        badges: ["Face to Face", "Need Analysis", "Custom Programs", "Onsite Training", "Post-Training Assessment"],
        content:
            "Institutions can enhance teaching quality through customized, face-to-face training programs tailored to their specific needs — from design to delivery, with ongoing support.",
    },
];

export default function LearningPathways() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="container mx-auto px-4 py-20">
            <h1 className="text-md text-gray-600 uppercase tracking-tight mb-1">Key Pathways</h1>
            <h1 className="text-4xl tracking-tighter font-bold mb-8">
                Our <span className="text-primary">Learning</span> Pathways
            </h1>

            <div className="flex flex-col md:flex-row gap-10 ">
                {/* Sidebar Tabs */}
                <div className="flex flex-col gap-4 md:w-1/2 ">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.title}
                            onClick={() => setActiveTab(index)}
                            className={`rounded-xl px-5 py-5 text-left text-lg font-medium transition-all duration-300 ${activeTab === index
                                ? "bg-primary text-white"
                                : "bg-lightgray text-gray-500 hover:bg-muted-100 "
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="md:w-1/2">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={tabs[activeTab].title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0, }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-lightgray rounded-4xl p-4 md:p-6 "
                        >
                            <div className="overflow-hidden aspect-4/2 relative rounded-4xl mb-4">
                                <Link href='/pathways' >
                                    <Image
                                        src={tabs[activeTab].image}
                                        alt={tabs[activeTab].title}
                                        width={800}
                                        height={400}
                                        className="w-full h-full  object-cover"
                                    />
                                    <RiArrowRightUpLine size={30} className="absolute text-white top-5 right-5" />
                                </Link>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {tabs[activeTab].badges.map((badge, i) => (
                                    <span
                                        key={i}
                                        className="bg-white text-sm text-black px-3 py-2 rounded-full"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            <p className="text-black text-sm md:text-base">
                                {tabs[activeTab].content}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
