import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Fieldset - Forms",
};
const FormLabelPage = () => {
    return (
        <>
            <PageTitle title="Fieldset" items={[{ label: "Forms" }, { label: "Fieldset", active: true }]} />
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Legend & Label</div>
                        <div className="mt-3">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Form Title</legend>
                                <input type="text" className="input" placeholder="My awesome page" aria-label="Input" />
                                <p className="fieldset-label">You can edit page title later on from settings</p>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Background & Border</div>
                        <div className="mt-3">
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box max-w-xs border p-4">
                                <legend className="fieldset-legend bg-base-100 px-1.5 pb-0 font-medium">
                                    Form Title
                                </legend>
                                <input type="text" className="input" placeholder="My awesome page" aria-label="Input" />
                                <p className="fieldset-label">You can edit page title later on from settings</p>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Multi field</div>
                        <div className="mt-3">
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box max-w-xs border p-4">
                                <legend className="fieldset-legend bg-base-100 px-1.5 pb-0 font-medium">
                                    Fill information
                                </legend>

                                <label htmlFor="information-title" className="fieldset-label">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    id="information-title"
                                    className="input"
                                    placeholder="My awesome page"
                                />

                                <label htmlFor="information-slug" className="fieldset-label">
                                    Slug
                                </label>
                                <input
                                    type="text"
                                    className="input"
                                    id="information-slug"
                                    placeholder="my-awesome-page"
                                />

                                <label htmlFor="information-author" className="fieldset-label">
                                    Author
                                </label>
                                <input type="text" className="input" id="information-author" placeholder="Name" />
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Login</div>
                        <div className="mt-3">
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box max-w-xs border p-4">
                                <legend className="fieldset-legend bg-base-100 px-1.5 pb-0 font-medium">
                                    Write your details
                                </legend>

                                <label className="fieldset-label" htmlFor="detail-email">
                                    Email
                                </label>
                                <input type="email" className="input" id="detail-email" placeholder="Email" />

                                <label htmlFor="detail-password" className="fieldset-label">
                                    Password
                                </label>
                                <input type="password" className="input" id="detail-password" placeholder="Password" />

                                <button className="btn btn-primary mt-4">Login</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormLabelPage;
