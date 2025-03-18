import { Metadata } from "next";
import React from "react";

import { PageTitle } from "@/components/PageTitle";

import { EditCustomerForm } from "./EditCustomerForm";

export const metadata: Metadata = {
    title: "Edit Customer",
};

const EditCustomerPage = () => {
    return (
        <>
            <PageTitle
                title="Edit Customer"
                items={[
                    { label: "Customers", path: "/apps/ecommerce/customers" },
                    { label: "Edit", active: true },
                ]}
            />
            <div className="mt-6">
                <EditCustomerForm />
            </div>
        </>
    );
};

export default EditCustomerPage;
