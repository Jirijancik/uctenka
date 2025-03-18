import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Badge",
};

const BadgePage = () => {
    return (
        <>
            <PageTitle title="Badge" items={[{ label: "Components" }, { label: "Badge", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <div className="badge">Badge</div>
                            <div className="badge badge-ghost">Ghost</div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Empty</div>
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                            <div className="badge badge-primary badge-xl"></div>
                            <div className="badge badge-primary badge-lg"></div>
                            <div className="badge badge-primary badge-md"></div>
                            <div className="badge badge-primary badge-sm"></div>
                            <div className="badge badge-primary badge-xs"></div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Solid</div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <div className="badge badge-primary">Primary</div>
                            <div className="badge badge-secondary">Secondary</div>
                            <div className="badge badge-accent">Accent</div>
                            <div className="badge badge-success">Success</div>
                            <div className="badge badge-info">Info</div>
                            <div className="badge badge-warning">Warning</div>
                            <div className="badge badge-error">Error</div>
                            <div className="badge badge-neutral">Neutral</div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Soft</div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <div className="badge badge-soft badge-primary">Primary</div>
                            <div className="badge badge-soft badge-secondary">Secondary</div>
                            <div className="badge badge-soft badge-accent">Accent</div>
                            <div className="badge badge-soft badge-success">Success</div>
                            <div className="badge badge-soft badge-info">Info</div>
                            <div className="badge badge-soft badge-warning">Warning</div>
                            <div className="badge badge-soft badge-error">Error</div>
                            <div className="badge badge-soft badge-neutral">Neutral</div>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Outline</div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <div className="badge badge-outline badge-primary">Primary</div>
                            <div className="badge badge-outline badge-secondary">Secondary</div>
                            <div className="badge badge-outline badge-accent">Accent</div>
                            <div className="badge badge-outline badge-success">Success</div>
                            <div className="badge badge-outline badge-info">Info</div>
                            <div className="badge badge-outline badge-warning">Warning</div>
                            <div className="badge badge-outline badge-error">Error</div>
                            <div className="badge badge-outline badge-neutral">Neutral</div>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Dash</div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <div className="badge badge-dash badge-primary">Primary</div>
                            <div className="badge badge-dash badge-secondary">Secondary</div>
                            <div className="badge badge-dash badge-accent">Accent</div>
                            <div className="badge badge-dash badge-success">Success</div>
                            <div className="badge badge-dash badge-info">Info</div>
                            <div className="badge badge-dash badge-warning">Warning</div>
                            <div className="badge badge-dash badge-error">Error</div>
                            <div className="badge badge-dash badge-neutral">Neutral</div>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Icon</div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <div className="badge badge-success">
                                <span className="iconify lucide--info" />
                                Success
                            </div>
                            <div className="badge badge-info">
                                <span className="iconify lucide--circle-alert" />
                                Info
                            </div>
                            <div className="badge badge-warning">
                                <span className="iconify lucide--triangle-alert" />
                                Warning
                            </div>
                            <div className="badge badge-error">
                                <span className="iconify lucide--ban" />
                                Error
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Size</div>
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                            <div className="badge badge-xl">Extra Large</div>
                            <div className="badge badge-lg">Large</div>
                            <div className="badge badge-md">Medium</div>
                            <div className="badge badge-sm">Small</div>
                            <div className="badge badge-xs">Extra Small</div>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Button</div>
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                            <button className="btn">
                                Inbox <span className="badge badge-sm">+99</span>
                            </button>
                            <button className="btn">
                                Inbox <span className="badge badge-primary badge-sm">+99</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BadgePage;
