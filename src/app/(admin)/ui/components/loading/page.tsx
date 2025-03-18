import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Loading",
};

const LoadingPage = () => {
    return (
        <>
            <PageTitle title="Loading" items={[{ label: "Components" }, { label: "Loading", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4">
                            <span className="loading-spinner loading" />
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Color</div>
                        <div className="mt-4 flex flex-wrap items-center gap-4">
                            <span className="loading-spinner loading text-primary" />
                            <span className="loading-spinner loading text-secondary" />
                            <span className="loading-spinner loading text-success" />
                            <span className="loading-spinner loading text-warning" />
                            <span className="loading-spinner loading text-error" />
                            <span className="loading-spinner loading text-info" />
                            <span className="loading-spinner loading text-accent" />
                            <span className="loading-spinner loading text-ghost" />
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Size</div>
                        <div className="mt-4 flex flex-wrap items-center gap-4">
                            <span className="loading-spinner loading loading-xs" />
                            <span className="loading-spinner loading loading-sm" />
                            <span className="loading-spinner loading" />
                            <span className="loading-spinner loading loading-lg" />
                            <span className="loading-spinner loading loading-xl" />
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Variant</div>
                        <div className="mt-4 flex flex-wrap items-center gap-6">
                            <span className="loading-spinner loading" />
                            <span className="loading loading-ring" />
                            <span className="loading loading-ball" />
                            <span className="loading loading-bars" />
                            <span className="loading loading-infinity" />
                            <span className="loading loading-dots" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoadingPage;
