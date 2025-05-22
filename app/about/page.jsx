import AboutHero from "../components/AboutHero"
import BenefitsSection from "../components/Benefits"
import EducationalCommunity from "../components/CommunityServe"
import ImpactSection from "../components/ImpactSection"
import TeamSection from "../components/TeamSection"


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
