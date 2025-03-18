import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import IndeterminateCheckboxExample from "./IndeterminateCheckboxExample";

export const metadata: Metadata = {
    title: "Checkbox - Forms",
};

const FormCheckboxPage = () => {
    return (
        <>
            <PageTitle title="Checkbox" items={[{ label: "Forms" }, { label: "Checkbox", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <input type="checkbox" className="checkbox" aria-label="Checkbox example" />
                            <input type="checkbox" className="checkbox" defaultChecked aria-label="Checkbox example" />
                            <input type="checkbox" className="checkbox" aria-label="Checkbox example" disabled />
                            <input
                                type="checkbox"
                                className="checkbox"
                                aria-label="Checkbox example"
                                disabled
                                checked
                            />
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Color</div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-primary"
                                defaultChecked
                                aria-label="Checkbox example"
                            />
                            <input
                                type="checkbox"
                                className="checkbox checkbox-secondary"
                                defaultChecked
                                aria-label="Checkbox example"
                            />
                            <input
                                type="checkbox"
                                className="checkbox checkbox-accent"
                                defaultChecked
                                aria-label="Checkbox example"
                            />
                            <input
                                type="checkbox"
                                className="checkbox checkbox-success"
                                defaultChecked
                                aria-label="Checkbox example"
                            />
                            <input
                                type="checkbox"
                                className="checkbox checkbox-info"
                                defaultChecked
                                aria-label="Checkbox example"
                            />
                            <input
                                type="checkbox"
                                className="checkbox checkbox-warning"
                                defaultChecked
                                aria-label="Checkbox example"
                            />
                            <input
                                type="checkbox"
                                className="checkbox checkbox-error"
                                defaultChecked
                                aria-label="Checkbox example"
                            />
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Size</div>
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-xl"
                                defaultChecked
                                aria-label="Checkbox example"
                            />
                            <input
                                type="checkbox"
                                className="checkbox checkbox-lg"
                                defaultChecked
                                aria-label="Checkbox example"
                            />
                            <input type="checkbox" className="checkbox" defaultChecked aria-label="Checkbox example" />
                            <input
                                type="checkbox"
                                className="checkbox checkbox-sm"
                                defaultChecked
                                aria-label="Checkbox example"
                            />
                            <input
                                type="checkbox"
                                className="checkbox checkbox-xs"
                                defaultChecked
                                aria-label="Checkbox example"
                            />
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Form Control</div>
                        <form className="form-control bg-base-200 rounded-box mt-4 w-64 p-3 px-4">
                            <label className="label flex">
                                <span className="label-text grow cursor-pointer">Remember me</span>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </form>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Indeterminate</div>
                        <div className="mt-4">
                            <IndeterminateCheckboxExample />
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Custom</div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <input
                                type="checkbox"
                                defaultChecked
                                aria-label="Checkbox example"
                                className="checkbox border-red-300 bg-red-100 text-red-600 checked:border-red-600 checked:bg-red-200"
                            />
                            <input
                                type="checkbox"
                                defaultChecked
                                aria-label="Checkbox example"
                                className="checkbox border-blue-300 bg-blue-100 text-blue-600 checked:border-blue-600 checked:bg-blue-200"
                            />
                            <input
                                type="checkbox"
                                defaultChecked
                                aria-label="Checkbox example"
                                className="checkbox border-blue-300 bg-linear-to-br from-blue-500 to-purple-500 [background-size:inherit] text-white checked:border-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormCheckboxPage;
