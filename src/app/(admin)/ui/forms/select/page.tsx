import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Select - Forms",
};
const FormSelectPage = () => {
    return (
        <>
            <PageTitle title="File Input" items={[{ label: "Forms" }, { label: "File Input", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4 flex flex-col gap-3">
                            <select aria-label="Select" className="select" defaultValue="">
                                <option value="" disabled>
                                    Pick your favorite Simpson
                                </option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                            <select aria-label="Select" className="select" defaultValue="marge">
                                <option disabled>Pick your favorite Simpson</option>
                                <option value="homer">Homer</option>
                                <option value="marge">Marge</option>
                                <option value="bart">Bart</option>
                                <option value="lisa">Lisa</option>
                                <option value="maggie">Maggie</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Disabled</div>
                        <div className="mt-4 flex flex-col gap-3">
                            <select aria-label="Select" className="select" defaultValue="" disabled>
                                <option value="" disabled>
                                    Pick your favorite Simpson
                                </option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                            <select aria-label="Select" className="select" defaultValue="marge" disabled>
                                <option disabled>Pick your favorite Simpson</option>
                                <option value="homer">Homer</option>
                                <option value="marge">Marge</option>
                                <option value="bart">Bart</option>
                                <option value="lisa">Lisa</option>
                                <option value="maggie">Maggie</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Ghost</div>
                        <div className="mt-4 flex flex-col gap-3">
                            <select aria-label="Select" className="select select-ghost" defaultValue="">
                                <option value="" disabled>
                                    Select any ghost
                                </option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                            <select aria-label="Select" className="select select-ghost" defaultValue="marge" disabled>
                                <option disabled>Pick your favorite Simpson</option>
                                <option value="homer">Homer</option>
                                <option value="marge">Can&#39;t touch me, I&#39;m already selected</option>
                                <option value="bart">Bart</option>
                                <option value="lisa">Lisa</option>
                                <option value="maggie">Maggie</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Fieldset</div>
                        <div className="mt-4 flex flex-col gap-3">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Need any favourite simpson?</legend>
                                <select aria-label="Select" className="select" defaultValue="">
                                    <option value="" disabled>
                                        Pick your favorite Simpson
                                    </option>
                                    <option>Homer</option>
                                    <option>Marge</option>
                                    <option>Bart</option>
                                    <option>Lisa</option>
                                    <option>Maggie</option>
                                </select>
                                <p className="fieldset-label">* Optional</p>
                            </fieldset>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Color</div>
                        <div className="mt-4 flex flex-col gap-3">
                            <select aria-label="Select" className="select select-primary" defaultValue="">
                                <option value="" disabled>
                                    Pick your favorite Simpson
                                </option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                            <select aria-label="Select" className="select select-secondary" defaultValue="">
                                <option value="" disabled>
                                    Pick your favorite Simpson
                                </option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                            <select aria-label="Select" className="select select-accent" defaultValue="">
                                <option value="" disabled>
                                    Pick your favorite Simpson
                                </option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                            <select aria-label="Select" className="select select-success" defaultValue="">
                                <option value="" disabled>
                                    Pick your favorite Simpson
                                </option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                            <select aria-label="Select" className="select select-info" defaultValue="">
                                <option value="" disabled>
                                    Pick your favorite Simpson
                                </option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                            <select aria-label="Select" className="select select-warning" defaultValue="">
                                <option value="" disabled>
                                    Pick your favorite Simpson
                                </option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                            <select aria-label="Select" className="select select-error" defaultValue="">
                                <option value="" disabled>
                                    Pick your favorite Simpson
                                </option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                            <select aria-label="Select" className="select select-neutral" defaultValue="">
                                <option value="" disabled>
                                    Pick your favorite Simpson
                                </option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Size</div>
                        <div className="mt-4 flex flex-col gap-3">
                            <select aria-label="Select" className="select select-xs" defaultValue="">
                                <option value="" disabled>
                                    Pick your favorite Simpson
                                </option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>

                            <select aria-label="Select" className="select select-sm" defaultValue="">
                                <option value="" disabled>
                                    Pick your favorite Simpson
                                </option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>

                            <select aria-label="Select" className="select" defaultValue="">
                                <option value="" disabled>
                                    Pick your favorite Simpson
                                </option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>

                            <select aria-label="Select" className="select select-lg" defaultValue="">
                                <option value="" disabled>
                                    Pick your favorite Simpson
                                </option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>

                            <select aria-label="Select" className="select select-xl" defaultValue="">
                                <option value="" disabled>
                                    Pick your favorite Simpson
                                </option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormSelectPage;
