import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import { CustomerTable } from "./CustomerTable";

export const metadata: Metadata = {
    title: "Customers - Ecommerce",
};

const EcommerceCustomers = () => {
    return (
        <>
            <PageTitle title="Customers" items={[{ label: "Ecommerce" }, { label: "Customers", active: true }]} />
            <div className="mt-6">
                <CustomerTable />
            </div>
        </>
    );
};

export default EcommerceCustomers;
