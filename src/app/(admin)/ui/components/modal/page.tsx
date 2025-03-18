import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import ModalExample from "./ModalExample";

export const metadata: Metadata = {
    title: "Modal",
};

const ModalPage = () => {
    return (
        <>
            <PageTitle title="Modal" items={[{ label: "Components" }, { label: "Modal", active: true }]} />
            <div className="mt-6">
                <ModalExample />
            </div>
        </>
    );
};

export default ModalPage;
