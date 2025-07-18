'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import { LuNotebookPen } from 'react-icons/lu'
import GetStartedBtn from './GetStartedBtn'

import BenefitsHeroImg from '@/public/assets/benefitsherobg.png'
import BenefitsHero2 from '@/public/assets/benefitshero2.png'
import EduProLogo from '@/public/assets/edupro-logo-1.png'

const BenefitsHero = () => {
    return (
        <>
            <section className="container mx-auto py-10    px-4 md:pt-20  " >
                <h1 className="text-center text-black  px-2 font-bold tracking-tighter leading-8 md:leading-12 capitalize text-[35px] md:text-[50px] " >
                    <span className=" text-primary">Benefits</span> of Core Education
                </h1>
                {/* <p className=" text-black tracking-tight text-sm md:text-lg w-full md:w-[50%] mx-auto capitalize text-center mt-5 " >
                    Empowering educators, students, and institutions through scalable, flexible, and impactful learning solutions
                </p> */}
                <GetStartedBtn />
                <div className="rounded-3xl block  overflow-hidden h-[300px] md:h-[340px]">
                    <Image
                        src={BenefitsHeroImg}
                        alt="Technology interface with digital elements"
                        width={1000}
                        height={1000}
                        priority
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
            <div className='flex flex-col container  px-4 gap-10 py-12 mx-auto md:flex-row justify-between items-start tracking-tighter' >
                <div className='md:w-1/2 w-full  space-y-3' >
                    <p className='text-darkgray/70 uppercase ' >Powered by EduPro</p>
                    <h1 className='text-4xl font-bold' >
                        Where <span className='text-primary' > Core Ed</span> can take you
                    </h1>
                    <p className='text-black text-lg leading-6' >
                        Core Ed empowers educators to transform their careers through internationally recognized certifications and degrees. In partnership with EduPro, our programs open up pathways not just within local school systems, but also in international educational institutions around the world.
                    </p>
                    <p className='text-darkgray/70 text-lg leading-6' >
                        Whether you’re aiming to teach in private schools across Pakistan, in global curricula such as IB or IGCSE, or explore online education platforms, a Core Ed qualification becomes your passport to opportunity.
                    </p>
                </div>
                <div className='md:w-[40%] w-full relative ' >
                    <Image
                        src={BenefitsHero2}
                        alt='Powered by EduPro'
                        className='rounded-3xl'
                        priority
                    />
                    <Image
                        priority
                        src={EduProLogo}
                        alt='Powered by EduPro'
                        width={200}
                        className='px-4 py-2 absolute -top-5 right-2  bg-white/70 backdrop-blur-sm rounded-2xl'
                    />
                </div>
                {/* <div className="md:hidden absolute top-[70vh] right-0 flex py-5 overflow-hidden justify-end">
                    <a href="#" className=" bg-primary text-white font-light  text-md pr-10 pl-4 py-4 rounded-xl hover:bg-primary/90 -mr-5 transition">
                        <LuNotebookPen className="inline-block mr-3" size={22} />
                        Take a Free Assessment Test
                    </a>
                </div> */}
            </div>
            {/* <div className="hidden md:flex min-w-fit py-5 overflow-hidden justify-end">
                <a href="#" className=" bg-primary text-white font-light  text-md pr-10 pl-4 py-4 rounded-xl hover:bg-primary/90 -mr-5 transition">
                    <LuNotebookPen className="inline-block mr-3" size={22} />
                    Take a Free Assessment Test
                </a>
            </div> */}
            <section className="w-full bg-lightgray  py-16 px-4 ">
                <div className='container mx-auto' >

                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center md:text-left"
                        >
                            <h2 className="text-[40px] text-left leading-10 font-bold tracking-tighter text-black">
                                Our <span className="text-primary font-semibold">approach</span> is designed <br className="hidden sm:block" />
                                with flexibility at its core.
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-black tracking-tight  leading-6 text-lg space-y-5"
                        >
                            <p>
                                With fully stackable pathways, learners can begin with short
                                certificate programs and build up to diplomas or full degrees—all
                                at their own pace. Courses are delivered by expert educators and are
                                tailored to real-world teaching needs, blending theory with
                                practical tools you can apply in the classroom from day one.
                            </p>
                            <p>
                                From upskilling and specialization to full academic advancement,
                                Core Ed helps educators move forward in their careers with
                                confidence, credibility, and the freedom to shape their learning
                                journey. Whether you’re looking to grow locally or go global, Core
                                Ed is your foundation.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BenefitsHero
