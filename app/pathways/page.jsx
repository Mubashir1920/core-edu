
import PathwaysHero from '../components/PathwaysHero'
import ProfessionalDevelopment from '../components/ProfessionalDevelopment'
import BenefitsSection from '../components/Benefits'
import CourseStructure from '../components/CourseStructure'

export const metadata = {
    title: 'Core Education Pathways | Strategic Growth Models for Education',
    description: 'Explore flexible partnership pathways with Core Education—customized to meet your personal growth institution’s needs for innovation, and strategic transformation',
}



const page = () => {
    return (
        <>
            <PathwaysHero />
            <ProfessionalDevelopment />
            <CourseStructure />
            <BenefitsSection />
        </>
    )
}

export default page
