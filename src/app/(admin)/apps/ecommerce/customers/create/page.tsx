import { Metadata } from "next";
import React from "react";

import { PageTitle } from "@/components/PageTitle";

import { CreateCustomerForm } from "./CreateCustomerForm";

export const metadata: Metadata = {
    title: "Create Customer",
};

const CreateCustomerPage = () => {
    return (
        <>
            <PageTitle
                title="Create Customer"
                items={[
                    { label: "Customers", path: "/apps/ecommerce/customers" },
                    { label: "Create", active: true },
                ]}
            />
            <div className="mt-6">
                <CreateCustomerForm />
            </div>
        </>
    );
};

export default CreateCustomerPage;
