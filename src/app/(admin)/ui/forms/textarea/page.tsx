import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Textarea - Forms",
};

const FormTextareaPage = () => {
    return (
        <>
            <PageTitle title="Textarea" items={[{ label: "Forms" }, { label: "Textarea", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4 flex flex-col gap-3">
                            <textarea placeholder="Type here" className="textarea" />
                            <textarea
                                defaultValue="I have already written something for you"
                                className="textarea"
                                aria-label="Textarea"
                            />
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Disabled</div>
                        <div className="mt-4 flex flex-col gap-3">
                            <textarea placeholder="Type here" className="textarea" disabled />
                            <textarea
                                defaultValue="I have already written something for you"
                                className="textarea"
                                aria-label="Textarea"
                                disabled
                            />
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Ghost</div>
                        <div className="mt-4 flex flex-col gap-3">
                            <textarea placeholder="Touch to write" className="textarea textarea-ghost" />
                            <textarea
                                defaultValue="I'm ghost, you can't touch me 👻"
                                className="textarea"
                                disabled
                                aria-label="Textarea"
                            />
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Fieldset</div>
                        <div className="mt-4 flex flex-col gap-3">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">What is your bio?</legend>
                                <textarea className="textarea" placeholder="Type here" aria-label="Textarea" />
                                <p className="fieldset-label">Don&#39;t worry, we never share anything with others</p>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Color</div>
                        <div className="mt-4 grid gap-6 *:w-full md:grid-cols-2">
                            <textarea placeholder="Type here" className="textarea textarea-primary" />
                            <textarea
                                placeholder="Type here"
                                aria-label="Textarea"
                                className="textarea textarea-secondary"
                            />
                            <textarea placeholder="Type here" className="textarea textarea-accent" />
                            <textarea placeholder="Type here" className="textarea textarea-success" />
                            <textarea placeholder="Type here" className="textarea textarea-warning" />
                            <textarea placeholder="Type here" className="textarea textarea-info" />
                            <textarea placeholder="Type here" className="textarea textarea-error" />
                            <textarea placeholder="Type here" className="textarea textarea-neutral" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormTextareaPage;
