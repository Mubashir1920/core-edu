import Image from 'next/image'
import {  LuNotebookPen } from 'react-icons/lu'
import FeatureImage1 from '@/public/assets/features-1.png'
import GetStartedBtn from './GetStartedBtn'

const FeaturesHero = () => {
    return (
        <>
            <section className="container mx-auto py-10   px-4 md:pt-20 " >
                <h1 className="text-center text-black  px-2 font-bold tracking-tighter leading-8 md:leading-12 capitalize text-[35px] md:text-[50px] " >
                    Powerful <span className=" text-primary"> Features</span> for <br className='hidden md:block' /> Modern Education
                </h1>
                <p className=" text-black text-sm md:text-lg w-full md:w-[50%] tracking-tight mx-auto capitalize text-center mt-5 " >
                    Empowering educators and institutions with scalable, smart tools for impactful learning experiences.
                </p>
                <GetStartedBtn />
                <div className="rounded-3xl block overflow-hidden h-[300px] md:h-[300px]">
                    <Image
                        src={FeatureImage1}
                        alt="Technology interface with digital elements"
                        width={1000}
                        height={1000}
                        priority={true}
                        className="w-full h-full object-cover"
                    />
                    <div className="md:hidden absolute top-[70vh] right-0 flex py-5 overflow-hidden justify-end">
                        <a href="#" className=" bg-primary text-white font-light  text-md pr-10 pl-4 py-4 rounded-xl hover:bg-primary/90 -mr-5 transition">
                            <LuNotebookPen className="inline-block mr-3" size={22} />
                            Take a Free Assessment Test
                        </a>
                    </div>
                </div>
            </section>
            <div className="hidden md:flex min-w-fit py-5 overflow-hidden justify-end">
                <a href="#" className=" bg-primary text-white font-light  text-md pr-10 pl-4 py-4 rounded-xl hover:bg-primary/90 -mr-5 transition">
                    <LuNotebookPen className="inline-block mr-3" size={22} />
                    Take a Free Assessment Test
                </a>
            </div>
        </>
    )
}

export default FeaturesHero
