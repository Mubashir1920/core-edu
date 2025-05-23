"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaCircleCheck } from "react-icons/fa6"
import { LuNotebookPen } from "react-icons/lu"

export default function PricingComponent() {
    const [billingCycle, setBillingCycle] = useState("yearly")

    const pricingData = {
        basic: {
            title: "BASIC",
            price: {
                monthly: 0,
                yearly: 0,
            },
            description: {
                monthly: "Perfect for beginners starting their learning journey",
                yearly: "Perfect for individual educators exploring short courses",
            },
            features: {
                monthly: [
                    "Access to 1 short course/month",
                    "Basic certificate",
                    "Limited forum access",
                    "Email support (48h response)",
                ],
                yearly: [
                    "Access to 2 short courses/month",
                    "Certificate of completion",
                    "Community forum access",
                    "Email support",
                ],
            },
        },
        pro: {
            title: "PRO",
            price: {
                monthly: "500",
                yearly: "4,500",
            },
            description: {
                monthly: "Ideal for dedicated learners seeking more content",
                yearly: "Perfect for individual educators exploring short courses",
            },
            features: {
                monthly: [
                    "Access to 2 short courses/month",
                    "Premium certificates",
                    "Full forum access",
                    "Priority email support",
                ],
                yearly: [
                    "Access to 2 short courses/month",
                    "Certificate of completion",
                    "Community forum access",
                    "Email support",
                ],
            },
        },
        premium: {
            title: "PREMIUM",
            price: {
                monthly: "1,000",
                yearly: "9,000",
            },
            description: {
                monthly: "Complete package for serious professional development",
                yearly: "Perfect for individual educators exploring short courses",
            },
            features: {
                monthly: [
                    "Access to 3 short courses/month",
                    "Premium certificates with badges",
                    "VIP forum access",
                    "24/7 email & chat support",
                ],
                yearly: [
                    "Access to 2 short courses/month",
                    "Certificate of completion",
                    "Community forum access",
                    "Email support",
                ],
            },
        },
    }

    // Animation variants
    const textVariants = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
    }

    return (
        <div className="relative">
            <div className="w-full max-w-6xl mx-auto px-4 py-8">
                {/* Toggle Switch */}
                <div className="flex items-center text-lg tracking-tight justify-center  gap-3 mb-12">
                    <span className={` ${billingCycle === "monthly" ? "text-black" : "text-darkgray"}`}>Monthly</span>
                    <button
                        onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                        className="relative w-14 h-7 bg-teal-600 rounded-full p-1 transition-colors duration-300"
                        aria-label={`Switch to ${billingCycle === "monthly" ? "yearly" : "monthly"} billing`}
                    >
                        <motion.div
                            className="w-5 h-5 bg-white rounded-full"
                            animate={{ x: billingCycle === "monthly" ? 0 : 24 }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                            }}
                        />
                    </button>
                    <span className={`${billingCycle === "yearly" ? "text-black" : "text-darkgray"}`}>Yearly</span>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
                    {/* Basic Plan */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="bg-lightgray tracking-tight rounded-4xl p-6 shadow-sm"
                        layout
                    >
                        <div className="mb-8">
                            <h3 className="font-medium text-darkgray px-3 py-1  bg-white rounded-4xl max-w-fit mb-4">{pricingData.basic.title}</h3>
                            <div className="flex items-baseline">
                                <span className="text-4xl  font-bold">PKR {pricingData.basic.price[billingCycle]}</span>
                                <span className="text-sm text-darkgray ml-1">/{billingCycle === "yearly" ? "annually" : "monthly"}</span>
                            </div>
                            <div className="h-12 mt-3">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={`basic-desc-${billingCycle}`}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        variants={textVariants}
                                        transition={{ duration: 0.3 }}
                                        className="text-sm text-darkgray"
                                    >
                                        {pricingData.basic.description[billingCycle]}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 my-6"></div>
                        <ul className="space-y-4 mb-8 min-h-[160px]">
                            <AnimatePresence mode="wait">
                                {pricingData.basic.features[billingCycle].map((feature, index) => (
                                    <motion.li
                                        key={`basic-feature-${billingCycle}-${index}`}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        variants={textVariants}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="flex items-start"
                                    >
                                        <FaCircleCheck className="h-5 w-5 text-darkgray mr-2 flex-shrink-0" />
                                        <span className="text-sm text-darkgray">{feature}</span>
                                    </motion.li>
                                ))}
                            </AnimatePresence>
                        </ul>
                        <button className="w-full  py-2 px-4  rounded-3xl text-lg font-medium text-black bg-white  ">
                            Start learning
                        </button>
                    </motion.div>

                    {/* Pro Plan */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="bg-primary rounded-4xl p-6 tracking-tight shadow-md relative z-10 md:scale-105"
                        layout
                    >
                        <div className="mb-8">
                            <h3 className="rounded-4xl max-w-fit px-3 py-1 text-white font-light bg-muted-400/40 mb-4">{pricingData.pro.title}</h3>
                            <div className="flex items-baseline">
                                <span className="text-4xl  font-bold text-white">PKR {pricingData.pro.price[billingCycle]}</span>
                                <span className="text-sm text-teal-100 ml-1">/{billingCycle === "yearly" ? "annually" : "monthly"}</span>
                            </div>
                            <div className="h-12 mt-3">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={`pro-desc-${billingCycle}`}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        variants={textVariants}
                                        transition={{ duration: 0.3 }}
                                        className="text-sm text-teal-100"
                                    >
                                        {pricingData.pro.description[billingCycle]}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="border-t border-muted-400/40 my-6"></div>
                        <ul className="space-y-4 mb-8 min-h-[160px]">
                            <AnimatePresence mode="wait">
                                {pricingData.pro.features[billingCycle].map((feature, index) => (
                                    <motion.li
                                        key={`pro-feature-${billingCycle}-${index}`}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        variants={textVariants}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="flex items-start"
                                    >
                                        <FaCircleCheck className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                                        <span className="text-sm text-white">{feature}</span>
                                    </motion.li>
                                ))}
                            </AnimatePresence>
                        </ul>
                        <button className="w-full text-lg py-2 px-4 rounded-3xl border border-whtie  text-white ">
                            Start learning
                        </button>
                    </motion.div>

                    {/* Premium Plan */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="bg-lightgray rounded-4xl tracking-tight p-6 shadow-sm"
                        layout
                    >
                        <div className="mb-8">
                            <h3 className="font-medium text-darkgray px-3 py-1  bg-white rounded-4xl max-w-fit mb-4">{pricingData.premium.title}</h3>
                            <div className="flex items-baseline">
                                <span className="text-4xl  font-bold">PKR {pricingData.premium.price[billingCycle]}</span>
                                <span className="text-sm text-darkgray ml-1">/{billingCycle === "yearly" ? "annually" : "monthly"}</span>
                            </div>
                            <div className="h-12 mt-3">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={`premium-desc-${billingCycle}`}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        variants={textVariants}
                                        transition={{ duration: 0.3 }}
                                        className="text-sm text-darkgray"
                                    >
                                        {pricingData.premium.description[billingCycle]}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 my-6"></div>
                        <ul className="space-y-4 mb-8 min-h-[160px]">
                            <AnimatePresence mode="wait">
                                {pricingData.premium.features[billingCycle].map((feature, index) => (
                                    <motion.li
                                        key={`premium-feature-${billingCycle}-${index}`}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        variants={textVariants}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="flex items-start"
                                    >
                                        <FaCircleCheck className="h-5 w-5 text-darkgray mr-2 flex-shrink-0" />
                                        <span className="text-sm text-darkgray">{feature}</span>
                                    </motion.li>
                                ))}
                            </AnimatePresence>
                        </ul>
                        <button className="w-full  py-2 px-4  rounded-3xl text-lg tracking-tight font-medium text-black bg-white  ">
                            Start learning
                        </button>
                    </motion.div>
                </div>
            </div >
            <div className="absolute right-0 top-20 md:relative md:flex min-w-fit py-5 overflow-hidden justify-end">
                <a href="#" className=" bg-primary text-white font-light  text-md pr-10 pl-4 py-4 rounded-xl hover:bg-primary/90 -mr-5 transition">
                    <LuNotebookPen className="inline-block mr-3" size={22} />
                    Take a Free Assessment Test
                </a>
            </div>
        </div>
    )
}
