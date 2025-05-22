import React from 'react'
import PathwaysHero from '../components/PathwaysHero'
import PathwayCategory from '../components/PathwayCategory'
import ProfessionalDevelopment from '../components/ProfessionalDevelopment'
import BenefitsSection from '../components/Benefits'
import CourseStructure from '../components/CourseStructure'

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
