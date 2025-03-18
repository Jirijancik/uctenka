import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import { SellerTable } from "./SellerTable";

export const metadata: Metadata = {
    title: "Sellers - Ecommerce",
};

const EcommerceSellers = () => {
    return (
        <>
            <PageTitle title="Sellers" items={[{ label: "Ecommerce" }, { label: "Sellers", active: true }]} />

            <div className="mt-6">
                <SellerTable />
            </div>
        </>
    );
};

export default EcommerceSellers;
