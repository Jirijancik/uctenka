import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import { OrderTable } from "./OrderTable";

export const metadata: Metadata = {
    title: "Orders - Ecommerce",
};

const EcommerceOrdersPage = () => {
    return (
        <>
            <PageTitle title="Orders" items={[{ label: "Ecommerce" }, { label: "Orders", active: true }]} />
            <div className="mt-6">
                <OrderTable />
            </div>
        </>
    );
};

export default EcommerceOrdersPage;
