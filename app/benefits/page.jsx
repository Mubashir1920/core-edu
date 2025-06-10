
import BenefitsAbout from '../components/BenefitsAbout'
import BenefitsHero from '../components/BenefitsHero'
import ServicesGrid from '../components/BenefitsServiceGrid'
import EducationalTools from '../components/EducationalTools'
import TestimonialsSection from '../components/Testimonials'


export const metadata = {
    title: 'Benefits of Core Education | Measurable Impact for Institutions',
    description: 'Discover how Core Education helps colleges and universities achieve revenue growth, tech enablement, and operational efficiency through tailored support.',
}

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
