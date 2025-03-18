import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Range - Forms",
};

const FormRangePage = () => {
    return (
        <>
            <PageTitle title="Range" items={[{ label: "Forms" }, { label: "Range", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4 flex flex-col gap-4">
                            <input
                                type="range"
                                aria-label="Range"
                                min="0"
                                max="100"
                                defaultValue={80}
                                className="range"
                            />
                            <input
                                type="range"
                                aria-label="Range"
                                min="0"
                                max="100"
                                defaultValue={80}
                                className="range"
                                disabled
                            />
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Step</div>
                        <div className="mt-4">
                            <div className="w-full max-w-xs">
                                <input
                                    type="range"
                                    aria-label="Range"
                                    min="0"
                                    max="100"
                                    defaultValue={25}
                                    className="range"
                                    step="25"
                                />
                                <div className="mt-2 flex justify-between px-2.5 text-xs">
                                    <span>|</span>
                                    <span>|</span>
                                    <span>|</span>
                                    <span>|</span>
                                    <span>|</span>
                                </div>
                                <div className="mt-2 flex justify-between px-2.5 text-xs">
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Color</div>
                        <div className="mt-4 flex flex-col gap-3">
                            <input
                                type="range"
                                aria-label="Range"
                                min="0"
                                max="100"
                                defaultValue={45}
                                className="range range-primary"
                            />
                            <input
                                type="range"
                                aria-label="Range"
                                min="0"
                                max="100"
                                defaultValue={45}
                                className="range range-secondary"
                            />
                            <input
                                type="range"
                                aria-label="Range"
                                min="0"
                                max="100"
                                defaultValue={45}
                                className="range range-accent"
                            />
                            <input
                                type="range"
                                aria-label="Range"
                                min="0"
                                max="100"
                                defaultValue={45}
                                className="range range-success"
                            />
                            <input
                                type="range"
                                aria-label="Range"
                                min="0"
                                max="100"
                                defaultValue={45}
                                className="range range-info"
                            />
                            <input
                                type="range"
                                aria-label="Range"
                                min="0"
                                max="100"
                                defaultValue={45}
                                className="range range-warning"
                            />
                            <input
                                type="range"
                                aria-label="Range"
                                min="0"
                                max="100"
                                defaultValue={45}
                                className="range range-error"
                            />
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Size</div>
                        <div className="mt-4 flex flex-col gap-4">
                            <input
                                type="range"
                                aria-label="Range"
                                min="0"
                                max="100"
                                defaultValue={55}
                                className="range range-xs"
                            />
                            <input
                                type="range"
                                aria-label="Range"
                                min="0"
                                max="100"
                                defaultValue={55}
                                className="range range-sm"
                            />
                            <input
                                type="range"
                                aria-label="Range"
                                min="0"
                                max="100"
                                defaultValue={55}
                                className="range"
                            />
                            <input
                                type="range"
                                aria-label="Range"
                                min="0"
                                max="100"
                                defaultValue={55}
                                className="range range-lg"
                            />
                            <input
                                type="range"
                                aria-label="Range"
                                min="0"
                                max="100"
                                defaultValue={55}
                                className="range range-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormRangePage;
