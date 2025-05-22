import Image from 'next/image'
import { LuArrowUpRight, LuNotebookPen } from 'react-icons/lu'
import FeatureImage1 from '@/public/assets/features-1.png'

const FeaturesHero = () => {
    return (
        <>
            <section className="container mx-auto py-10   px-4 md:pt-20 " >
                <h1 className="text-center text-black  px-2 font-bold tracking-tighter leading-8 md:leading-12 capitalize text-[35px] md:text-[50px] " >
                    Powerful <span className=" text-primary"> Features</span> for <br className='hidden md:block' /> Modern Education
                </h1>
                <p className=" text-black text-sm md:text-md w-full md:w-[40%] mx-auto capitalize text-center mt-5 " >
                    Empowering educators and institutions with scalable, smart tools for impactful learning experiences.
                </p>
                <div className="w-full  flex justify-center my-5 " >
                    <button className="bg-primary text-md hover:bg-primary/90 cursor-pointer rounded-3xl text-background py-3 px-6 block text-center" >
                        Get Started
                    </button>
                    <span className="bg-primary text-white rounded-[100%] hover:bg-primary/90 cursor-pointer p-3 flex justify-center items-center  " >
                        <LuArrowUpRight size={22} />
                    </span>
                </div>
                <div className="rounded-3xl block overflow-hidden h-[200px] md:h-[300px]">
                    <Image
                        src={FeatureImage1}
                        alt="Technology interface with digital elements"
                        width={1000}
                        height={1000}
                        priority={true}
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
            <div className=" min-w-fit absolute top-[60%] right-0  md:relative flex my-7 overflow-hidden justify-end">
                <a href="#" className=" bg-primary text-white font-light  text-md pr-10 pl-4 py-4 rounded-xl hover:bg-primary/90 -mr-5 transition">
                    <LuNotebookPen className="inline-block mr-3" size={22} />
                    Take a Free Assessment Test
                </a>
            </div>
        </>
    )
}

export default FeaturesHero
