import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Toggle - Forms",
};

const FormTogglePage = () => {
    return (
        <>
            <PageTitle title="Toggle" items={[{ label: "Forms" }, { label: "Toggle", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4 flex flex-wrap gap-4">
                            <input aria-label="Checkbox" type="checkbox" className="toggle" />
                            <input aria-label="Checkbox" type="checkbox" defaultChecked className="toggle" />
                            <input aria-label="Checkbox" type="checkbox" disabled className="toggle" />
                            <input aria-label="Checkbox" type="checkbox" defaultChecked disabled className="toggle" />
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Color</div>
                        <div className="mt-4 flex flex-wrap gap-4">
                            <input
                                aria-label="Checkbox"
                                type="checkbox"
                                className="toggle toggle-primary"
                                defaultChecked
                            />
                            <input
                                aria-label="Checkbox"
                                type="checkbox"
                                className="toggle toggle-secondary"
                                defaultChecked
                            />
                            <input
                                aria-label="Checkbox"
                                type="checkbox"
                                className="toggle toggle-accent"
                                defaultChecked
                            />
                            <input
                                aria-label="Checkbox"
                                type="checkbox"
                                className="toggle toggle-success"
                                defaultChecked
                            />
                            <input
                                aria-label="Checkbox"
                                type="checkbox"
                                className="toggle toggle-info"
                                defaultChecked
                            />
                            <input
                                aria-label="Checkbox"
                                type="checkbox"
                                className="toggle toggle-warning"
                                defaultChecked
                            />
                            <input
                                aria-label="Checkbox"
                                type="checkbox"
                                className="toggle toggle-error"
                                defaultChecked
                            />
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Size</div>
                        <div className="mt-4 flex flex-wrap items-center gap-4">
                            <input aria-label="Checkbox" type="checkbox" defaultChecked className="toggle toggle-xs" />
                            <input aria-label="Checkbox" type="checkbox" defaultChecked className="toggle toggle-sm" />
                            <input aria-label="Checkbox" type="checkbox" defaultChecked className="toggle" />
                            <input aria-label="Checkbox" type="checkbox" defaultChecked className="toggle toggle-lg" />
                            <input aria-label="Checkbox" type="checkbox" defaultChecked className="toggle toggle-xl" />
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Icon</div>
                        <div className="mt-4 flex flex-wrap items-center gap-4">
                            <label className="toggle text-base-content toggle-xl">
                                <input aria-label="Checkbox" type="checkbox" />
                                <span
                                    className="iconify lucide--x m-1 flex size-3.5 items-center"
                                    aria-label="disabled"
                                />
                                <span
                                    className="iconify lucide--check m-1 flex size-3.5 items-center"
                                    aria-label="enabled"
                                />
                            </label>
                            <label className="toggle text-base-content toggle-xl">
                                <input aria-label="Checkbox" type="checkbox" />
                                <span
                                    className="iconify lucide--sun m-1 flex size-3.5 items-center"
                                    aria-label="disabled"
                                />
                                <span
                                    className="iconify lucide--moon m-1 flex size-3.5 items-center"
                                    aria-label="enabled"
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Custom</div>
                        <div className="mt-4 flex flex-wrap items-center gap-4">
                            <input
                                type="checkbox"
                                defaultChecked
                                aria-label="Checkbox"
                                className="toggle border-orange-300 bg-orange-200 text-orange-600 checked:border-orange-600 checked:bg-orange-600 checked:text-white"
                            />
                            <input
                                type="checkbox"
                                defaultChecked
                                aria-label="Checkbox"
                                className="toggle border-blue-300 bg-linear-to-br from-blue-300 to-purple-300 text-blue-800 checked:border-blue-500 checked:from-blue-500 checked:to-purple-500 checked:text-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormTogglePage;
