'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


import Avatar from '@/public/assets/avatar.jpg'
import Image from 'next/image';


const CourseTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            text: "The training helped me completely transform my classroom approach. The flexibility of online learning made it easy to balance with my work schedule.",
            name: "Williams",
            title: "High School Teacher",
        },
        {
            id: 2,
            text: "The training helped me completely transform my classroom approach. The flexibility of online learning made it easy to balance with my work schedule.",
            name: "Williams",
            title: "High School Teacher",
        },
        {
            id: 3,
            text: "The training helped me completely transform my classroom approach. The flexibility of online learning made it easy to balance with my work schedule.",
            name: "Williams",
            title: "High School Teacher",
        },
        {
            id: 4,
            text: "The training helped me completely transform my classroom approach. The flexibility of online learning made it easy to balance with my work schedule.",
            name: "Williams",
            title: "High School Teacher",
        },
        {
            id: 5,
            text: "The training helped me completely transform my classroom approach. The flexibility of online learning made it easy to balance with my work schedule.",
            name: "Williams",
            title: "High School Teacher",
        }
    ];

    // Get slides per view based on screen size
    const getSlidesPerView = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1024) return 3; // Desktop
            if (window.innerWidth >= 768) return 2;  // Tablet
            return 1; // Mobile
        }
        return 3; // Default
    };

    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

    // Update slides per view on window resize
    React.useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = testimonials.length - slidesPerView;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(Math.min(index, maxIndex));
    };

    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8">
                    <h3 className="uppercase text-lg tracking-tight text-gray-500">TESTIMONIALS</h3>
                    <h2 className="text-4xl tracking-tighter font-bold mt-2">What our users say</h2>
                </div>

                {/* Testimonials Container */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex "
                            initial={false}
                            animate={{
                                x: `-${currentIndex * (100 / slidesPerView)}%`
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    className={` flex-shrink-0 ${slidesPerView === 1 ? 'w-full' :
                                        slidesPerView === 2 ? 'w-1/2' :
                                            'w-1/3'
                                        }`}
                                    style={{ minWidth: `${100 / slidesPerView}%` }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <div className="bg-gray-100 rounded-[20px] py-16 px-6 mx-3 h-full flex flex-col justify-between">
                                        <div className="mb-6 flex flex-col items-center text-center">
                                            <svg className='text-gray-200 mb-5' width="40" height="30" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M0 25.0001L12.5 0.000152588H25L15 25.0001H25V50.0001H0V25.0001ZM35 25.0001L47.5 0.000152588H60L50 25.0001H60V50.0001H35V25.0001Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <p className="  leading-6">
                                                "{testimonial.text}"
                                            </p>
                                        </div>

                                        <div className="flex justify-center items-center">
                                            <Image
                                                src={Avatar}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full object-cover mr-3"
                                            />
                                            <div className="text-left tracking-tight">
                                                <p className="font-medium text-lg">{testimonial.name}</p>
                                                <p className="text-md text-gray-500">{testimonial.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex justify-center mt-8 space-x-2">
                        <button
                            onClick={prevSlide}
                            className="px-6 py-2 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <FiChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="px-6 py-2 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary transition-colors"
                            aria-label="Next testimonial"
                        >
                            <FiChevronRight className="w-5fi-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseTestimonials;