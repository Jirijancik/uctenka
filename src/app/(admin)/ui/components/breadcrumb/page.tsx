import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Breadcrumb",
};

const BreadcrumbPage = () => {
    return (
        <>
            <PageTitle title="Breadcrumb" items={[{ label: "Components" }, { label: "Breadcrumb", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="breadcrumbs mt-2 text-sm">
                            <ul>
                                <li>
                                    <a href="#home">Home</a>
                                </li>
                                <li>
                                    <a href="#shops">Shops</a>
                                </li>
                                <li>Add Shop</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Icon</div>
                        <div className="breadcrumbs mt-2 text-sm">
                            <ul>
                                <li>
                                    <a href="#home">
                                        <span className="iconify lucide--home" />
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#shops">
                                        <span className="iconify lucide--store" />
                                        Shops
                                    </a>
                                </li>
                                <li>Add Shop</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Dropdown</div>
                        <div className="breadcrumbs mt-2 overflow-x-visible text-sm">
                            <ul>
                                <li>
                                    <a href="#home">
                                        <span className="iconify lucide--home" />
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <details className="dropdown dropdown-center dropdown-bottom">
                                        <summary className="btn btn-xs hover:no-undeline mx-1">•••</summary>
                                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm">
                                            <li>
                                                <a href="#store">
                                                    <span className="iconify lucide--store" />
                                                    Stores
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#users">
                                                    <span className="iconify lucide--users" />
                                                    Users
                                                </a>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>Add Shop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreadcrumbPage;
