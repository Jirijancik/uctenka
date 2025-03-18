import { Metadata } from "next";
import React from "react";

import { PageTitle } from "@/components/PageTitle";

import { EditSellerForm } from "./EditSellerForm";

export const metadata: Metadata = {
    title: "Edit Seller",
};

const EditSellerPage = () => {
    return (
        <>
            <PageTitle
                title="Edit Seller"
                items={[
                    { label: "Sellers", path: "/apps/ecommerce/sellers" },
                    { label: "Edit", active: true },
                ]}
            />
            <div className="mt-6">
                <EditSellerForm />
            </div>
        </>
    );
};

export default EditSellerPage;
