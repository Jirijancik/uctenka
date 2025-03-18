import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import { ContentCreationForm } from "./ContentCreationForm";
import { GeneratedContents } from "./GeneratedContents";

export const metadata: Metadata = {
    title: "Content Creator",
};

const AiCreatorPage = () => {
    return (
        <>
            <PageTitle
                title="Content Creator"
                items={[{ label: "Gen Ai" }, { label: "Content Creator", active: true }]}
            />
            <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-5 2xl:grid-cols-10">
                <div className="xl:col-span-2 2xl:col-span-3">
                    <ContentCreationForm />
                </div>
                <div className="xl:col-span-3 2xl:col-span-7">
                    <GeneratedContents />
                </div>
            </div>
        </>
    );
};

export default AiCreatorPage;
