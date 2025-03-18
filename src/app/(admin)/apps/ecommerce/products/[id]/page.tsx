import { Metadata } from "next";
import React from "react";

import { PageTitle } from "@/components/PageTitle";

import { EditProductForm } from "./EditProductForm";

export const metadata: Metadata = {
    title: "Edit Product",
};

const EditProductPage = () => {
    return (
        <>
            <PageTitle
                title="Edit Product"
                items={[
                    { label: "Products", path: "/apps/ecommerce/products" },
                    { label: "Edit", active: true },
                ]}
            />
            <div className="mt-6">
                <EditProductForm />
            </div>
        </>
    );
};

export default EditProductPage;
