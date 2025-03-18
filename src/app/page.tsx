import type { Metadata } from "next";

import Landing from "./landing/page";

export const metadata: Metadata = {
    title: "Landing - Product Preview",
};
const LandingPage = () => {
    return <Landing />;
};

export default LandingPage;
