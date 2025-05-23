"use client"

import { useState } from "react"
import { motion } from "motion/react"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const validateForm = () => {
        let valid = true
        const newErrors = {
            name: "",
            email: "",
            message: "",
        }

        if (!formData.name.trim()) {
            newErrors.name = "Name is required"
            valid = false
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
            valid = false
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Email is invalid"
            valid = false
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required"
            valid = false
        }

        setErrors(newErrors)
        return valid
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))

        // Clear error when user types
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)

        // Simulate form submission
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            setIsSuccess(true)
            setFormData({ name: "", email: "", message: "" })

            // Reset success message after 3 seconds
            setTimeout(() => {
                setIsSuccess(false)
            }, 3000)
        } catch (error) {
            console.error("Error submitting form:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const formVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    }

    return (
        <section className="px-4" >

            <div className="w-full max-w-6xl mx-auto p-4 md:p-6 bg-lightgray rounded-3xl">
                {/* Form Section */}
                <motion.div initial="hidden" animate="visible" variants={formVariants} className="w-full mb-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <motion.div variants={itemVariants}>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className={`w-full p-4 bg-white rounded-3xl outline-none transition-all duration-200 ${errors.name ? "border border-red-500" : "border border-transparent focus:border-primary"
                                        }`}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your email address"
                                    className={`w-full p-4 bg-white rounded-3xl outline-none transition-all duration-200 ${errors.email ? "border border-red-500" : "border border-transparent focus:border-primary"
                                        }`}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <div className="relative">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    rows={6}
                                    className={`w-full p-4 bg-white rounded-3xl outline-none transition-all duration-200 ${errors.message ? "border border-red-500" : "border border-transparent focus:border-primary"
                                        }`}
                                />
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex justify-between items-center">
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-teal-600 text-white px-6 py-3 rounded-3xl font-medium transition-all hover:bg-teal-700 disabled:opacity-70"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? "Sending..." : "Send message"}
                            </motion.button>

                            {isSuccess && (
                                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-600">
                                    Message sent successfully!
                                </motion.p>
                            )}
                        </motion.div>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
