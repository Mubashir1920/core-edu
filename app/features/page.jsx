import React from 'react'
import FeaturesHero from '../components/FeaturesHero'
import FeatureSlider from '../components/FeatureSlider'
import EducationalTools from '../components/EducationalTools'
import LearningPathways from '../components/LearningPathways'
import FeatureTools from '../components/FeatureTools'
import ExperienceCTA from '../components/ExpCTA'



export const metadata = {
    title: 'Core Education Features | Technology & Operational Solutions',
    description: 'Explore the key features of Core Education’s platform—designed to modernize campus operations, enhance learning experiences, and drive measurable impact',
}

const page = () => {
    return (
        <>
            <FeaturesHero />
            <FeatureSlider />
            <EducationalTools />
            <LearningPathways />
            <FeatureTools />
            <ExperienceCTA />
        </>
    )
}

export default page
