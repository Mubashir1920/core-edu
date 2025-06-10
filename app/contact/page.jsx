import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'
import { LuNotebookPen } from 'react-icons/lu'

export const metadata = {
    title: 'Contact Core Education | Partner with Us',
    description: 'Get in touch with the Core Education team to explore collaboration opportunities, request demos, or learn how we can support your institutional goals',
}


const page = () => {
    return (
        <>
            <section className="container mx-auto py-10   px-4 md:pt-20  " >
                <h1 className="text-center text-black  px-2 font-bold tracking-tighter leading-8 md:leading-12 capitalize text-[35px] md:text-[50px] " >
                    Get in touch
                </h1>
                <p className=" text-black tracking-tight text-sm md:text-lg w-full md:w-[50%] mx-auto capitalize text-center mt-5 " >
                    We’re here to help. Reach out with questions, feedback, or partnership opportunities.
                </p>
            </section>
            <ContactForm />
            <div className="hidden md:flex  min-w-fit  -mt-10 z-10 overflow-hidden justify-end">
                <a href="#" className=" bg-primary text-white font-light  text-md pr-10 pl-4 py-4 rounded-xl hover:bg-primary/90 -mr-5 transition">
                    <LuNotebookPen className="inline-block mr-3" size={22} />
                    Take a Free Assessment Test
                </a>
            </div>
            <ContactInfo />

        </>
    )
}

export default page
