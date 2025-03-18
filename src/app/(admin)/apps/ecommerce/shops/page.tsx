import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import { ShopTable } from "./ShopTable";

export const metadata: Metadata = {
    title: "Shops - Ecommerce",
};

const EcommerceShops = () => {
    return (
        <>
            <PageTitle title="Shops" items={[{ label: "Ecommerce" }, { label: "Shops", active: true }]} />

            <div className="mt-6">
                <ShopTable />
            </div>
        </>
    );
};

export default EcommerceShops;
