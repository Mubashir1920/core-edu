"use client"
import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

import ProfilePic from '@/public/assets/profilepic.png'
import Mussarat from '@/public/assets/team-picture-1.png'
import Amil from '@/public/assets/team-picture-3.png'
import Saman from '@/public/assets/team-picture-4.png'
import Imran from '@/public/assets/team-picture-5.png'
import Husnain from '@/public/assets/team-picture-6.png'
import Khadeeja from '@/public/assets/team-picture-2.png'
import Image from "next/image"

const TeamSection = () => {
    const teamMembers = [
        {
            name: "Mussarat Shahid",
            role: "Lead Trainer (Pedagogical Practices and Teaching & Learning)",
            image: Mussarat,
        },
        {
            name: "Amil Tamour Daud Khan",
            role: " Project Manager and Communications Lead",
            image: Amil,
        },
        {
            name: "Saman Zahid",
            role: "Instructional Designer",
            image: Saman,
        },
        {
            name: "Imran ud Din",
            role: "LMS Manager",
            image: Imran,
        },
        {
            name: "Husnain Haider",
            role: "Training Manager",
            image: Husnain,
        },
        {
            name: "Khadeeja Batool",
            role: "Research Associate ",
            image: Khadeeja,
        },
        {
            name: "Fakhra Shahid",
            role: "Lead Trainer (Special Focus on School Management & Leadership)",
            image: ProfilePic,
        },
    ]

    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, threshold: 0.2 })

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
                damping: 12,
            },
        },
    }

    const buttonVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.05 },
        tap: { scale: 0.95 },
    }

    return (
        <section className="py-16 px-4 container mx-auto" ref={ref}>
            <motion.div
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className="text-center mb-12"
            >
                <motion.p variants={itemVariants} className="uppercase tracking-tight text-darkgray/80 mb-2">
                    OUR TEAM
                </motion.p>
                <motion.h2 variants={itemVariants} className="text-4xl tracking-tighter font-bold mb-8">
                    Meet the <span className="text-teal-600">people</span> behind
                    <br className="hidden sm:block" /> Core Education
                </motion.h2>
                <motion.div variants={itemVariants} className="flex justify-center">
                    <motion.button
                        variants={buttonVariants}
                        initial="initial"
                        className="px-6 py-3 rounded-full border border-muted-100 bg-muted-100/10 hover:bg-muted-100/30  hover:border-muted-100/30 duration-500 transition-colors"
                    >
                        <span>Become a part</span>
                    </motion.button>
                </motion.div>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="rounded-4xl p-6 bg-lightgray"
                    >
                        <div className="aspect-square bg-gray-100 rounded-3xl mb-4 overflow-hidden">
                            <Image src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="font-semibold text-lg text-center tracking-tighter">{member.name}</h3>
                        <p className="text-gray-600 text-center">{member.role}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default TeamSection
