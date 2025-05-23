
import BenefitsAbout from '../components/BenefitsAbout'
import BenefitsHero from '../components/BenefitsHero'
import ServicesGrid from '../components/BenefitsServiceGrid'
import EducationalTools from '../components/EducationalTools'
import TestimonialsSection from '../components/Testimonials'

const page = () => {
    return (
        <>
            <BenefitsHero />
            <BenefitsAbout />
            <ServicesGrid />
            <EducationalTools />
            <TestimonialsSection />
        </>
    )
}

export default page
