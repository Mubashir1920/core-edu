
// import FeaturesHero from '../components/FeaturesHero'
// import FeatureSlider from '../components/FeatureSlider'
// import EducationalTools from '../components/EducationalTools'
// import LearningPathways from '../components/LearningPathways'
// import FeatureTools from '../components/FeatureTools'
// import ExperienceCTA from '../components/ExpCTA'
import { notFound } from 'next/navigation'



export const metadata = {
    title: 'Core Education Features | Technology & Operational Solutions',
    description: 'Explore the key features of Core Education’s platform—designed to modernize campus operations, enhance learning experiences, and drive measurable impact',
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
        notFound()
        // <>
        //     <FeaturesHero />
        //     <FeatureSlider />
        //     <EducationalTools />
        //     <LearningPathways />
        //     <FeatureTools />
        //     <ExperienceCTA />
        // </>

    )
}

export default page
