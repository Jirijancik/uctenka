import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Label - Forms",
};
const FormLabelPage = () => {
    return (
        <>
            <PageTitle title="Label" items={[{ label: "Forms" }, { label: "Label", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Prefix</div>
                        <div className="mt-4">
                            <label className="input">
                                <span className="label">https://</span>
                                <input type="text" placeholder="URL" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Suffix</div>
                        <div className="mt-4">
                            <label className="input">
                                <input type="text" placeholder="domain name" />
                                <span className="label">.com</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Select</div>
                        <div className="mt-4">
                            <label className="select">
                                <span className="label">Type</span>
                                <select>
                                    <option>Personal</option>
                                    <option>Business</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Date Input</div>
                        <div className="mt-4">
                            <label className="input">
                                <span className="label">Publish date</span>
                                <input type="date" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100 h-fit">
                    <div className="card-body">
                        <div className="card-title">Floating</div>
                        <div className="mt-4">
                            <label className="floating-label">
                                <span>Your name</span>
                                <input type="text" placeholder="Your name" className="input input-md" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Size</div>
                        <div className="mt-4 flex flex-col gap-4">
                            <label className="floating-label">
                                <input type="text" placeholder="" className="input input-xs" />
                                <span>Extra Small</span>
                            </label>
                            <label className="floating-label">
                                <input type="text" placeholder="" className="input input-sm" />
                                <span>Small</span>
                            </label>
                            <label className="floating-label">
                                <input type="text" placeholder="" className="input input-md" />
                                <span>Medium</span>
                            </label>
                            <label className="floating-label">
                                <input type="text" placeholder="" className="input input-lg" />
                                <span>Large</span>
                            </label>
                            <label className="floating-label">
                                <input type="text" placeholder="" className="input input-xl" />
                                <span>Extra Large</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormLabelPage;
