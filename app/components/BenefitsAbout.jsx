"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import BenfitsImg1 from '@/public/assets/benefits-1.png'

export default function BenefitsAbout() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-10 md:py-24">
            <motion.div
                className="flex flex-col md:flex-row gap-8 md:gap-16 items-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Left side - Image */}
                <motion.div className="w-full md:w-1/2" variants={itemVariants}>
                    <div className="relative rounded-4xl overflow-hidden">
                        <Image
                            src={BenfitsImg1}
                            alt="Digital learning interface"
                            width={400}
                            height={600}
                            className="w-full h-auto"
                        />
                    </div>
                </motion.div>

                {/* Right side - Content */}
                <motion.div className="w-full md:w-1/2 space-y-4" variants={containerVariants}>
                    <motion.p className="uppercase tracking-tight text-darkgray/80" variants={itemVariants}>
                        ABOUT US
                    </motion.p>

                    <motion.h2 className="text-[40px] leading-10 font-bold tracking-tighter text-black" variants={itemVariants}>
                        A transformative <span className="text-primary">learning</span> <br className="hidden lg:block" /> platform
                    </motion.h2>

                    <motion.p className="text-black tracking-tight  leading-6 text-lg" variants={itemVariants}>
                        Our partnership with EduPro ensures that every qualification earned through Core Ed meets international
                        standards, opening doors to local and global opportunities alike. From private schools in Pakistan to
                        international teaching platforms, Core Ed graduates are equipped to thrive in diverse educational
                        environments.
                    </motion.p>

                    <motion.p className="text-gray-700 tracking-tight  leading-6 text-lg mt-4" variants={itemVariants}>
                        We are more than a certification provider—we are a community of passionate educators committed to
                        reimagining education through quality, relevance, and impact.
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    )
}
