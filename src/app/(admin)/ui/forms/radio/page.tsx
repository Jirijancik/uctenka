import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Radio - Forms",
};

const FormRadioPage = () => {
    return (
        <>
            <PageTitle title="Radio" items={[{ label: "Forms" }, { label: "Radio", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4 flex flex-wrap gap-4">
                            <input type="radio" aria-label="Radio" name="demo-radio-default" className="radio" />
                            <input
                                type="radio"
                                aria-label="Radio"
                                name="demo-radio-default"
                                className="radio"
                                defaultChecked
                            />
                            <input
                                type="radio"
                                aria-label="Radio"
                                name="demo-radio-disabled"
                                className="radio"
                                disabled
                            />
                            <input
                                type="radio"
                                aria-label="Radio"
                                name="demo-radio-disabled"
                                className="radio"
                                defaultChecked
                                disabled
                            />
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Color</div>
                        <div className="mt-4 flex flex-wrap gap-4">
                            <input
                                type="radio"
                                aria-label="Radio"
                                name="radio-primary"
                                defaultChecked
                                className="radio radio-primary"
                            />
                            <input
                                type="radio"
                                name="radio-secondary"
                                aria-label="Radio"
                                defaultChecked
                                className="radio radio-secondary"
                            />
                            <input
                                type="radio"
                                aria-label="Radio"
                                name="radio-accent"
                                defaultChecked
                                className="radio radio-accent"
                            />
                            <input
                                type="radio"
                                aria-label="Radio"
                                name="radio-success"
                                defaultChecked
                                className="radio radio-success"
                            />
                            <input
                                type="radio"
                                aria-label="Radio"
                                name="radio-info"
                                defaultChecked
                                className="radio radio-info"
                            />
                            <input
                                type="radio"
                                aria-label="Radio"
                                name="radio-warning"
                                defaultChecked
                                className="radio radio-warning"
                            />
                            <input
                                type="radio"
                                aria-label="Radio"
                                name="radio-error"
                                defaultChecked
                                className="radio radio-error"
                            />
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Size</div>
                        <div className="mt-4 flex flex-wrap items-center gap-4">
                            <input
                                type="radio"
                                aria-label="Radio"
                                name="radio-xl"
                                defaultChecked
                                className="radio radio-xl"
                            />
                            <input
                                type="radio"
                                aria-label="Radio"
                                name="radio-lg"
                                defaultChecked
                                className="radio radio-lg"
                            />
                            <input type="radio" aria-label="Radio" name="radio-md" defaultChecked className="radio" />
                            <input
                                type="radio"
                                aria-label="Radio"
                                name="radio-sm"
                                defaultChecked
                                className="radio radio-sm"
                            />
                            <input
                                type="radio"
                                aria-label="Radio"
                                name="radio-xs"
                                defaultChecked
                                className="radio radio-xs"
                            />
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Custom</div>
                        <div className="mt-4 flex flex-wrap items-center gap-4">
                            <input
                                type="radio"
                                name="demo-radio-custom"
                                aria-label="Radio"
                                defaultChecked
                                className="radio border-red-300 bg-red-100 text-red-600 checked:border-red-600 checked:bg-red-200"
                            />
                            <input
                                type="radio"
                                name="demo-radio-custom"
                                aria-label="Radio"
                                className="radio border-blue-300 bg-blue-100 text-blue-600 checked:border-blue-600 checked:bg-blue-200"
                            />
                            <input
                                type="radio"
                                name="demo-radio-custom"
                                aria-label="Radio"
                                className="radio border-blue-300 bg-linear-to-br from-blue-500 to-purple-500 text-white checked:border-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormRadioPage;
