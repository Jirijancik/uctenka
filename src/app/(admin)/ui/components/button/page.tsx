import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Button",
};

const ButtonPage = () => {
    return (
        <>
            <PageTitle title="Button" items={[{ label: "Components" }, { label: "Button", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4">
                            <button className="btn btn-primary">Click me</button>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Disabled</div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <button className="btn btn-disabled">Using class</button>
                            <button className="btn" disabled>
                                Using attribute
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Solid</div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <button className="btn btn-primary">Primary</button>
                            <button className="btn btn-secondary">Secondary</button>
                            <button className="btn btn-accent">Accent</button>
                            <button className="btn btn-success">Success</button>
                            <button className="btn btn-info">Info</button>
                            <button className="btn btn-warning">Warning</button>
                            <button className="btn btn-error">Error</button>
                            <button className="btn btn-neutral">Neutral</button>
                        </div>
                    </div>
                </div>

                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Soft</div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <button className="btn btn-soft btn-primary">Primary</button>
                            <button className="btn btn-soft btn-secondary">Secondary</button>
                            <button className="btn btn-soft btn-accent">Accent</button>
                            <button className="btn btn-soft btn-success">Success</button>
                            <button className="btn btn-soft btn-info">Info</button>
                            <button className="btn btn-soft btn-warning">Warning</button>
                            <button className="btn btn-soft btn-error">Error</button>
                            <button className="btn btn-soft btn-neutral">Neutral</button>
                        </div>
                    </div>
                </div>

                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Outline</div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <button className="btn btn-outline btn-primary">Primary</button>
                            <button className="btn btn-outline btn-secondary">Secondary</button>
                            <button className="btn btn-outline btn-accent">Accent</button>
                            <button className="btn btn-outline btn-success">Success</button>
                            <button className="btn btn-outline btn-info">Info</button>
                            <button className="btn btn-outline btn-warning">Warning</button>
                            <button className="btn btn-outline btn-error">Error</button>
                            <button className="btn btn-outline btn-neutral">Neutral</button>
                        </div>
                    </div>
                </div>

                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Dash</div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <button className="btn btn-dash btn-primary">Primary</button>
                            <button className="btn btn-dash btn-secondary">Secondary</button>
                            <button className="btn btn-dash btn-accent">Accent</button>
                            <button className="btn btn-dash btn-success">Success</button>
                            <button className="btn btn-dash btn-info">Info</button>
                            <button className="btn btn-dash btn-warning">Warning</button>
                            <button className="btn btn-dash btn-error">Error</button>
                            <button className="btn btn-dash btn-neutral">Neutral</button>
                        </div>
                    </div>
                </div>

                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Ghost & Link</div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <button className="btn btn-ghost">Default</button>
                            <button className="btn btn-ghost btn-primary">Primary</button>
                            <button className="btn btn-ghost btn-secondary">Secondary</button>
                            <button className="btn btn-ghost btn-accent">Accent</button>
                            <button className="btn btn-ghost btn-success">Success</button>
                            <button className="btn btn-ghost btn-info">Info</button>
                            <button className="btn btn-ghost btn-warning">Warning</button>
                            <button className="btn btn-ghost btn-error">Error</button>
                            <button className="btn btn-ghost btn-neutral">Neutral</button>
                            <button className="btn btn-link">Link</button>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Icon</div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <button className="btn btn-square gap-2" aria-label="Icon">
                                <span className="iconify lucide--heart size-4" />
                            </button>
                            <button className="btn gap-2">
                                <span className="iconify lucide--heart size-4" />
                                Like
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Rounded</div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <button className="btn btn-circle gap-2" aria-label="Icon">
                                <span className="iconify lucide--heart size-4" />
                            </button>
                            <button className="btn btn-circle gap-2" aria-label="Icon">
                                <span className="iconify lucide--settings-2 size-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Loading</div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <button className="btn btn-square gap-2" aria-label="Icon">
                                <span className="loading loading-spinner size-5"></span>
                            </button>
                            <button className="btn gap-2">
                                <span className="loading loading-spinner size-5"></span>
                                Loading
                            </button>
                            <button className="btn btn-square gap-2" disabled aria-label="Icon">
                                <span className="loading loading-spinner size-5"></span>
                            </button>
                            <button className="btn gap-2" disabled>
                                <span className="loading loading-spinner size-5"></span>
                                Loading
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ButtonPage;
