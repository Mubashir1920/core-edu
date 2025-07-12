import Courses from "../components/Courses"

export const metadata = {
    title: 'Courses | Core Education’s Professional Development Programs',
    description: 'Explore Core Education’s wide range of professional development courses designed to empower educators and institutions through flexible, accredited, and impactful learning experiences.',
}




const page = () => {
    return <>
        <section className="container  mx-auto px-4 py-12">
            <h1 className="text-center text-black  px-2 font-bold tracking-tighter  capitalize text-[35px] md:text-[50px] " >
                <span className="text-primary" >Courses </span>We Offer
            </h1>
            <p className=" text-black tracking-tight text-sm md:text-lg  mx-auto capitalize text-center " >
                Step into Core Education’s course library—your gateway to flexible, expert-led programs that fit real classrooms and real schedules.
            </p>
        </section>
        <Courses />
    </>
}

export default page