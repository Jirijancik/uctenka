import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import { ProductTable } from "./ProductTable";

export const metadata: Metadata = {
    title: "Products - Ecommerce",
};

const EcommerceProducts = () => {
    return (
        <>
            <PageTitle title="Products" items={[{ label: "Ecommerce" }, { label: "Products", active: true }]} />

            <div className="mt-6">
                <ProductTable />
            </div>
        </>
    );
};

export default EcommerceProducts;
