import { Metadata } from "next";
import React from "react";

import { PageTitle } from "@/components/PageTitle";

import { CreateSellerForm } from "./CreateSellerForm";

export const metadata: Metadata = {
    title: "Create Seller",
};

const CreateSellerPage = () => {
    return (
        <>
            <PageTitle
                title="Create Seller"
                items={[
                    { label: "Sellers", path: "/apps/ecommerce/sellers" },
                    { label: "Create", active: true },
                ]}
            />
            <div className="mt-6">
                <CreateSellerForm />
            </div>
        </>
    );
};

export default CreateSellerPage;
