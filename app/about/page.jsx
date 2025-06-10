import AboutHero from "../components/AboutHero"
import BenefitsSection from "../components/Benefits"
import EducationalCommunity from "../components/CommunityServe"
import ImpactSection from "../components/ImpactSection"
import TeamSection from "../components/TeamSection"

export const metadata = {
    title: 'About Core Education | Empowering Educational Excellence',
    description: ' Learn about Core Education’s mission to help educational institutions thrive through strategic partnerships, operational support, and technology-driven transformation',
}

const page = () => {
    return (
        <>
            <AboutHero />
            <ImpactSection />
            <BenefitsSection />
            <EducationalCommunity />
            <TeamSection />
        </>
    )
}

export default page
