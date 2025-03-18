import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Pagination",
};

const PaginationPage = () => {
    return (
        <>
            <PageTitle title="Pagination" items={[{ label: "Components" }, { label: "Pagination", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4">
                            <div className="join">
                                <button className="btn join-item btn-square">1</button>
                                <button className="btn join-item btn-square btn-active">2</button>
                                <button className="btn join-item btn-square">3</button>
                                <button className="btn join-item btn-square">4</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Disabled</div>
                        <div className="mt-4">
                            <div className="join">
                                <button className="btn join-item btn-square">1</button>
                                <button className="btn join-item btn-square">2</button>
                                <button className="btn join-item btn-square" disabled>
                                    ...
                                </button>
                                <button className="btn join-item btn-square">8</button>
                                <button className="btn join-item btn-square">9</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Control: Arrow</div>
                        <div className="mt-4">
                            <div className="join">
                                <button className="btn btn-square join-item" aria-label="Pagination controls">
                                    <span className="iconify lucide--chevrons-left" />
                                </button>
                                <button className="btn join-item btn-square">1</button>
                                <button className="btn join-item btn-square btn-active">2</button>
                                <button className="btn join-item btn-square">3</button>
                                <button className="btn btn-square join-item" aria-label="Pagination controls">
                                    <span className="iconify lucide--chevrons-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Control: Button</div>
                        <div className="mt-4">
                            <div className="join">
                                <button className="btn join-item">Previous</button>
                                <button className="btn join-item btn-square">1</button>
                                <button className="btn join-item btn-square btn-active">2</button>
                                <button className="btn join-item btn-square">3</button>
                                <button className="btn join-item">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Variant: Ghost</div>
                        <div className="mt-4">
                            <div className="flex gap-1">
                                <button className="btn btn-square btn-ghost join-item" aria-label="Pagination controls">
                                    <span className="iconify lucide--chevrons-left" />
                                </button>
                                <button className="btn join-item btn-ghost btn-square">1</button>
                                <button className="btn join-item btn-ghost btn-square btn-active">2</button>
                                <button className="btn join-item btn-ghost btn-square">3</button>
                                <button className="btn btn-square btn-ghost join-item" aria-label="Pagination controls">
                                    <span className="iconify lucide--chevrons-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Variant: Soft</div>
                        <div className="mt-4">
                            <div className="flex gap-1">
                                <button
                                    className="btn btn-square btn-soft join-item btn-primary"
                                    aria-label="Pagination controls">
                                    <span className="iconify lucide--chevrons-left" />
                                </button>
                                <button className="btn join-item btn-soft btn-square btn-primary">1</button>
                                <button className="btn join-item btn-soft btn-square btn-active btn-primary">2</button>
                                <button className="btn join-item btn-soft btn-square btn-primary">3</button>
                                <button
                                    className="btn btn-square btn-soft join-item btn-primary"
                                    aria-label="Pagination controls">
                                    <span className="iconify lucide--chevrons-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Variant: Outline</div>
                        <div className="mt-4">
                            <div className="join">
                                <button
                                    className="btn btn-square btn-outline join-item btn-primary"
                                    aria-label="Pagination controls">
                                    <span className="iconify lucide--chevrons-left" />
                                </button>
                                <button className="btn join-item btn-outline btn-square btn-primary">1</button>
                                <button className="btn join-item btn-outline btn-square btn-active btn-primary">
                                    2
                                </button>
                                <button className="btn join-item btn-outline btn-square btn-primary">3</button>
                                <button
                                    className="btn btn-square btn-outline join-item btn-primary"
                                    aria-label="Pagination controls">
                                    <span className="iconify lucide--chevrons-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Shape: Circle</div>
                        <div className="mt-4">
                            <div className="flex gap-1">
                                <button className="btn btn-circle btn-ghost join-item" aria-label="Pagination controls">
                                    <span className="iconify lucide--chevrons-left" />
                                </button>
                                <button className="btn join-item btn-ghost btn-circle">1</button>
                                <button className="btn join-item btn-ghost btn-circle btn-active">2</button>
                                <button className="btn join-item btn-ghost btn-circle">3</button>
                                <button className="btn btn-circle btn-ghost join-item" aria-label="Pagination controls">
                                    <span className="iconify lucide--chevrons-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Orientation: Vertical</div>
                        <div className="mt-4">
                            <div className="join join-vertical">
                                <button className="btn btn-square join-item" aria-label="Pagination controls">
                                    <span className="iconify lucide--chevrons-up" />
                                </button>
                                <button className="btn join-item btn-square">1</button>
                                <button className="btn join-item btn-square btn-active">2</button>
                                <button className="btn join-item btn-square">...</button>
                                <button className="btn join-item btn-square">8</button>
                                <button className="btn btn-square join-item" aria-label="Pagination controls">
                                    <span className="iconify lucide--chevrons-down" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Size</div>
                        <div className="mt-4 flex flex-col items-center gap-3">
                            <div className="join">
                                <button className="btn join-item btn-square btn-xs">1</button>
                                <button className="btn join-item btn-square btn-xs btn-active">2</button>
                                <button className="btn join-item btn-square btn-xs">3</button>
                                <button className="btn join-item btn-square btn-xs">4</button>
                            </div>
                            <div className="join">
                                <button className="btn join-item btn-square btn-sm">1</button>
                                <button className="btn join-item btn-square btn-sm btn-active">2</button>
                                <button className="btn join-item btn-square btn-sm">3</button>
                                <button className="btn join-item btn-square btn-sm">4</button>
                            </div>
                            <div className="join">
                                <button className="btn join-item btn-square">1</button>
                                <button className="btn join-item btn-square btn-active">2</button>
                                <button className="btn join-item btn-square">3</button>
                                <button className="btn join-item btn-square">4</button>
                            </div>
                            <div className="join">
                                <button className="btn join-item btn-square btn-lg">1</button>
                                <button className="btn join-item btn-square btn-lg btn-active">2</button>
                                <button className="btn join-item btn-square btn-lg">3</button>
                                <button className="btn join-item btn-square btn-lg">4</button>
                            </div>
                            <div className="join">
                                <button className="btn join-item btn-square btn-xl">1</button>
                                <button className="btn join-item btn-square btn-xl btn-active">2</button>
                                <button className="btn join-item btn-square btn-xl">3</button>
                                <button className="btn join-item btn-square btn-xl">4</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaginationPage;
