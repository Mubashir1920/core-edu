
import PricingHero from '../components/PricingHero'
import PricingComponent from '../components/PricingPlan'
import FAQAccordion from '../components/FAQ'
import TestimonialsSection from '../components/Testimonials'


export const metadata = {
    title: 'Core Education Pricing | Transparent & Scalable Solutions',
    description: 'Understand Core Education’s pricing structure designed for scalability, transparency, and value—tailored to the size and goals of your institution',
}


const page = () => {
    return (
        <>
            <PricingHero />
            <PricingComponent />
            <FAQAccordion />
            <TestimonialsSection />
        </>
    )
}

export default page
