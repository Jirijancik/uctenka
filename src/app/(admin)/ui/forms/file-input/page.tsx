import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "File Input - Forms",
};

const FormFileInputPage = () => {
    return (
        <>
            <PageTitle title="File Input" items={[{ label: "Forms" }, { label: "File Input", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4 flex flex-col gap-4">
                            <input type="file" aria-label="File" className="file-input" />
                            <input type="file" aria-label="File" className="file-input" disabled />
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Ghost</div>
                        <div className="mt-4 flex flex-col gap-4">
                            <input type="file" aria-label="File" className="file-input file-input-ghost" />
                            <input type="file" aria-label="File" className="file-input file-input-ghost" disabled />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="card card-border bg-base-100">
                        <div className="card-body">
                            <div className="card-title">Fieldset</div>
                            <div className="mt-1">
                                <fieldset className="fieldset gap-1">
                                    <legend className="fieldset-legend">Pick a file</legend>
                                    <input type="file" aria-label="File" className="file-input" />
                                    <span className="fieldset-label">Max size 2MB</span>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div className="card card-border bg-base-100">
                        <div className="card-body">
                            <div className="card-title">Size</div>
                            <div className="mt-4 flex flex-col gap-3">
                                <input type="file" aria-label="File" className="file-input file-input-xs" />
                                <input type="file" aria-label="File" className="file-input file-input-sm" />
                                <input type="file" aria-label="File" className="file-input" />
                                <input type="file" aria-label="File" className="file-input file-input-lg" />
                                <input type="file" aria-label="File" className="file-input file-input-xl" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Color</div>
                        <div className="mt-4 flex flex-col gap-3">
                            <input type="file" aria-label="File" className="file-input file-input-primary" />
                            <input type="file" aria-label="File" className="file-input file-input-secondary" />
                            <input type="file" aria-label="File" className="file-input file-input-accent" />
                            <input type="file" aria-label="File" className="file-input file-input-success" />
                            <input type="file" aria-label="File" className="file-input file-input-info" />
                            <input type="file" aria-label="File" className="file-input file-input-warning" />
                            <input type="file" aria-label="File" className="file-input file-input-error" />
                            <input type="file" aria-label="File" className="file-input file-input-neutral" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormFileInputPage;
