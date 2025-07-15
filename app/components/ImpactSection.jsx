'use client';
import { motion } from 'motion/react';
import { FaUsers, FaUniversity, FaCertificate } from 'react-icons/fa';

const stats = [
    {
        value: '5000+',
        label: 'Learners Impacted',
    },
    {
        value: '100+',
        label: 'Partner Institutions',
    },
    {
        value: '200+',
        label: 'Certified Programs',
    },
];

export default function ImpactSection() {
    return (
        <section className="bg-lightgray  w-full md:py-20 py-10 px-4 md:px-10">
            <div className="container mx-auto flex flex-col gap-12">
                {/* Header Section */}
                <div className="flex justify-between items-start flex-col md:flex-row">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl tracking-tighter font-bold text-black max-w-2xl"
                    >
                        We’re on a <span className="text-teal-600">mission</span> to create accessible education pathways for all.
                    </motion.h2>

                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-sm text-gray-400 font-medium mt-4 md:mt-0"
                    >
                        OUR IMPACT
                    </motion.span>
                </div>

                {/* Stats Section */}
                <div className="flex flex-col lg:flex-row justify-baseline  text-center">
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`${index == 2 ? 'border-none' : 'lg:border-r border-r-0 lg:border-b-0 border-b'}  flex flex-col py-6 border-black/20 mx-20 lg:mx-0  md:px-20 items-center`}
                        >
                            <h3 className="text-5xl hover:text-primary transition-colors duration-500 cursor-default tracking-tight font-bold text-black">{item.value}</h3>
                            <p className="text-lg text-black tracking-tight mt-1">{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
