'use client'

import { motion } from "motion/react"
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"

const ContactInfo = () => {
    return (

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-4  my-5 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto"
        >
            <div className="bg-lightgray rounded-2xl p-6 flex items-start gap-4">
                <div className="bg-white rounded-full p-3">
                    <FiMail className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                    <p className="text-sm text-darkgray/80 uppercase font-medium">Email</p>
                    <p className=" text-gray-800">support@coreeducation.com</p>
                </div>
            </div>

            <div className="bg-lightgray rounded-2xl p-6 flex items-start gap-4">
                <div className="bg-white rounded-full p-3">
                    <FiPhone className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                    <p className="text-sm text-darkgray/80 uppercase font-medium">Phone</p>
                    <p className=" text-gray-800">+123 456 7890</p>
                </div>
            </div>

            <div className="bg-lightgray rounded-2xl p-6 flex items-start gap-4 md:col-span-2">
                <div className="bg-white rounded-full p-3">
                    <FiMapPin className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                    <p className="text-sm text-darkgray/80 uppercase font-medium">Location</p>
                    <p className=" text-gray-800">
                        Core Education Headquarters, 123 Learning Lane, Education City, ED 45678
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactInfo
