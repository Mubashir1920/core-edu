import React from 'react'
import FeaturesHero from '../components/FeaturesHero'
import FeatureSlider from '../components/FeatureSlider'
import EducationalTools from '../components/EducationalTools'
import LearningPathways from '../components/LearningPathways'
import FeatureTools from '../components/FeatureTools'
import ExperienceCTA from '../components/ExpCTA'

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
