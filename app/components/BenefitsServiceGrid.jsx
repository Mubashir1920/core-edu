"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Image from "next/image"

import BenefitsImage1 from '@/public/assets/benefits-service-1.png'
import BenefitsImage2 from '@/public/assets/benefits-service-2.png'
import BenefitsImage3 from '@/public/assets/benefits-service-3.png'
import BenefitsImage4 from '@/public/assets/benefits-service-4.png'
import BenefitsImage5 from '@/public/assets/benefits-service-5.png'
import BenefitsImage6 from '@/public/assets/benefits-service-6.png'


const ServiceCard = ({ title, description, imageSrc, index }) => {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [controls, isInView])

    const isEven = index % 2 === 0

    return (
        <motion.div
            ref={ref}
            className={`relative  ${isEven ? "" : "mt-12 md:mt-24"}`}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: [0.25, 0.1, 0.25, 1.0],
                    },
                },
            }}
        >
            <div className="overflow-hidden w-full  md:w-[35vw]">
                <div className="relative h-64 w-full overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover rounded-4xl "
                    />
                </div>
                <div className="p-4 tracking-tighter">
                    <h3 className="text-2xl  font-semibold text-black mb-1">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default function ServicesGrid() {
    const services = [
        {
            title: "Flexible Learning",
            description: "Our flexible learning options let you study anytime, anywhere—at your own pace.",
            imageSrc: BenefitsImage1,
        },
        {
            title: "Recognized Credentials",
            description: "Earn industry-recognized credentials that validate your skills and boost your career.",
            imageSrc: BenefitsImage2,
        },
        {
            title: "Customized Training",
            description: "Get training tailored to your team's unique goals, challenges, and industry needs.",
            imageSrc: BenefitsImage3,
        },
        {
            title: "Real-world Skills",
            description: "Build practical, real-world skills you can apply immediately in your job or business.",
            imageSrc: BenefitsImage4,
        },
        {
            title: "Expert-led Courses",
            description: "Learn from industry experts through engaging, expert-led courses designed for real impact.",
            imageSrc: BenefitsImage5,
        },
        {
            title: "Stackable Pathways",
            description: "Progress your learning with stackable pathways that lead to advanced credentials and career growth.",
            imageSrc: BenefitsImage6,
        },
    ];


    return (
        <section className="bg-lightgray py-20">
            <div className="container mx-auto px-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5 justify-items-center ">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            imageSrc={service.imageSrc}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
