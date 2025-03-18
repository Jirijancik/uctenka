import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Tooltip",
};

const TooltipPage = () => {
    return (
        <>
            <PageTitle title="Tooltip" items={[{ label: "Components" }, { label: "Tooltip", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <div className="tooltip" data-tip="It's tooltip">
                                <button className="btn">Hover me</button>
                            </div>
                            <div className="tooltip tooltip-open" data-tip="I'm never go">
                                <button className="btn">Always</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Position</div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <div className="tooltip tooltip-left" data-tip="Left">
                                <button className="btn">Left</button>
                            </div>
                            <div className="tooltip tooltip-top" data-tip="Top">
                                <button className="btn">Top</button>
                            </div>
                            <div className="tooltip tooltip-right" data-tip="Right">
                                <button className="btn">Right</button>
                            </div>
                            <div className="tooltip tooltip-bottom" data-tip="Bottom">
                                <button className="btn">Bottom</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Color</div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <div className="tooltip tooltip-primary" data-tip="Primary">
                                <button className="btn btn-primary">Primary</button>
                            </div>
                            <div className="tooltip tooltip-secondary" data-tip="Secondary">
                                <button className="btn btn-secondary">Secondary</button>
                            </div>
                            <div className="tooltip tooltip-accent" data-tip="Accent">
                                <button className="btn btn-accent">Accent</button>
                            </div>
                            <div className="tooltip tooltip-success" data-tip="Success">
                                <button className="btn btn-success">Success</button>
                            </div>
                            <div className="tooltip tooltip-info" data-tip="Info">
                                <button className="btn btn-info">Info</button>
                            </div>
                            <div className="tooltip tooltip-warning" data-tip="Warning">
                                <button className="btn btn-warning">Warning</button>
                            </div>
                            <div className="tooltip tooltip-error" data-tip="Error">
                                <button className="btn btn-error">Error</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Custom</div>
                        <div className="mt-4">
                            <div className="tooltip">
                                <div className="tooltip-content bg-transparent p-0">
                                    <div className="card card-border bg-base-100 text-base-content shadow-sm">
                                        <div className="card-body p-3">
                                            <div className="card-title">Card title</div>
                                            <p>you can use any element as a tooltip</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn">Information</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TooltipPage;
