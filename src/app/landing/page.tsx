import type { Metadata } from "next";

import { LandingFAQ } from "./components/LandingFAQ";
import { LandingFeatureList } from "./components/LandingFeatureList";
import { LandingFooter } from "./components/LandingFooter";
import { LandingHero } from "./components/LandingHero";
import { LandingPackage } from "./components/LandingPackage";
import { LandingShowcase } from "./components/LandingShowcase";
import { LandingTestimonial } from "./components/LandingTestimonial";
import { LandingTopbar } from "./components/LandingTopbar";

export const metadata: Metadata = {
    title: "Landing - Product Preview",
};

const LandingPage = () => {
    return (
        <div className="bg-[var(--layout-background)]">
            <LandingTopbar />
            <LandingHero />
            <LandingFeatureList />
            <LandingShowcase />
            <LandingTestimonial />
            <LandingPackage />
            <LandingFAQ />
            <LandingFooter />
        </div>
    );
};

export default LandingPage;
