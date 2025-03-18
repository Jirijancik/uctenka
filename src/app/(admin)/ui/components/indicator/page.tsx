import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Indicator",
};

const IndicatorPage = () => {
    return (
        <>
            <PageTitle title="Indicator" items={[{ label: "Components" }, { label: "Indicator", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4">
                            <div className="indicator">
                                <div className="badge indicator-item badge-secondary" />
                                <div className="bg-base-200 rounded-box grid size-24 place-items-center">content</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Text</div>
                        <div className="mt-4">
                            <div className="indicator">
                                <div className="badge indicator-item badge-primary">New</div>
                                <div className="bg-base-200 rounded-box grid size-24 place-items-center">content</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Button</div>
                        <div className="mt-5">
                            <div className="indicator">
                                <div className="badge badge-sm indicator-item badge-success">+99</div>
                                <button className="btn">Inbox</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Avatar</div>
                        <div className="mt-4">
                            <div className="indicator">
                                <div className="badge badge-sm indicator-item badge-ghost indicator-bottom">•••</div>
                                <div className="avatar">
                                    <div className="bg-secondary/20 mask-squircle mask w-16">
                                        <img src="/images/avatars/3.png" alt="Avatar" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndicatorPage;
