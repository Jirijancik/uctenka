import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import CountdownExample from "./CountdownExample";

export const metadata: Metadata = {
    title: "Countdown",
};

const CountdownPage = () => {
    return (
        <>
            <PageTitle title="Countdown" items={[{ label: "Components" }, { label: "Countdown", active: true }]} />
            <div className="mt-6">
                <CountdownExample />
            </div>
        </>
    );
};

export default CountdownPage;
