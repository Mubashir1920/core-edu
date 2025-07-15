import Image from "next/image";

import HeroSecPlus from "@/public/assets/herosec.png";

import GetStartedBtn from "./GetStartedBtn";
import HomeHeroSlider from "./HomeHeroSlider";


const HomeHero = () => {
    return (
        <>
            <section className="container mx-auto py-10 px-2  md:py-20 " >
                <h1 className="text-center text-black  font-bold md:tracking-[-3px] tracking-[-0.06em] leading-10 capitalize text-[28px] xs:text-[32px] md:text-[50px] " >
                    Empower your learning
                    <Image priority={true} src={HeroSecPlus} className="inline-block w-[80px] md:w-32 ml-2" alt="Core-education-empower" /><br  className="hidden xs:block" />
                    Journey with <span className=" text-primary " > Core Education</span>
                </h1>
                <p className=" text-black text-lg w-full md:w-[60%] mx-auto capitalize text-center mt-5 " >
                    At Core Education, we believe in transforming education through innovative  solutions tailored to your needs.
                </p>
                <GetStartedBtn />
            </section>
            {/*To be Slider */}
            <HomeHeroSlider />
        </>
    );
};

export default HomeHero;
