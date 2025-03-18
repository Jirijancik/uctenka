import { MetaData } from "@/components/MetaData";

import { LandingFAQ } from "./components/LandingFAQ";
import { LandingFeatureList } from "./components/LandingFeatureList";
import { LandingFooter } from "./components/LandingFooter";
import { LandingHero } from "./components/LandingHero";
import { LandingLatestNews } from "./components/LandingLatestNews";
import { LandingPackage } from "./components/LandingPackage";
import { LandingShowcase } from "./components/LandingShowcase";
import { LandingTestimonial } from "./components/LandingTestimonial";
import { LandingTopbar } from "./components/LandingTopbar";

const LandingPage = () => {
    return (
        <>
            <MetaData />

            <div className="bg-[var(--layout-background)]">
                <LandingTopbar />
                <LandingHero />
                <LandingFeatureList />
                <LandingShowcase />
                <LandingTestimonial />
                <LandingPackage />
                <LandingFAQ />
                <LandingFooter />
                <div className="fixed end-4 top-4 z-20">
                    <LandingLatestNews />
                </div>
            </div>
        </>
    );
};

export default LandingPage;
