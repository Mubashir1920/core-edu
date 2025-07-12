
// import PricingHero from '../components/PricingHero'
// import PricingComponent from '../components/PricingPlan'
// import FAQAccordion from '../components/FAQ'
// import TestimonialsSection from '../components/Testimonials'

import { notFound } from "next/navigation"


export const metadata = {
    title: 'Core Education Pricing | Transparent & Scalable Solutions',
    description: 'Understand Core Education’s pricing structure designed for scalability, transparency, and value—tailored to the size and goals of your institution',
    robots: {
        index: false,
        follow: false,
        nosnippet: true,
        noarchive: true,
        nocache: true,
        noimageindex: true,
        nositelinkssearchbox: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            nocache: true,
            noarchive: true,
            nosnippet: true,
            nositelinkssearchbox: true,
        },
    },
}


const page = () => {
    return (
        // <>
        //     <PricingHero />
        //     <PricingComponent />
        //     <FAQAccordion />
        //     <TestimonialsSection />
        // </>
        notFound()
    )
}

export default page
