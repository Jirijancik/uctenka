import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Toast",
};

const ToastPage = () => {
    return (
        <>
            <PageTitle title="Toast" items={[{ label: "Components" }, { label: "Toast", active: true }]} />

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4">
                            <input type="checkbox" aria-label="Show" className="btn peer" />
                            <div className="opacity-0 transition-all peer-checked:opacity-100">
                                <div className="toast">
                                    <div className="alert alert-info">
                                        <span>New message arrived.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Multiple</div>
                        <div className="mt-4">
                            <input type="checkbox" aria-label="Show" className="btn peer" />
                            <div className="opacity-0 transition-all peer-checked:opacity-100">
                                <div className="toast">
                                    <div className="alert alert-info">
                                        <span>New mail arrived.</span>
                                    </div>
                                    <div className="alert alert-success">
                                        <span>Message sent successfully.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Playground</div>
                        <div className="grid place-items-center py-6">
                            <div className="-mb-16 grid grid-cols-3 place-items-center gap-4">
                                <input type="checkbox" aria-label="Top start" className="btn peer/top-start w-fit" />
                                <input type="checkbox" aria-label="Top center" className="btn peer/top-center w-fit" />
                                <input type="checkbox" aria-label="Top end" className="btn peer/top-end w-fit" />
                                <input
                                    type="checkbox"
                                    aria-label="Middle start"
                                    className="btn peer/middle-start w-fit"
                                />
                                <input
                                    type="checkbox"
                                    aria-label="Middle center"
                                    className="btn peer/middle-center w-fit"
                                />
                                <input type="checkbox" aria-label="Middle end" className="btn peer/middle-end w-fit" />
                                <input
                                    type="checkbox"
                                    aria-label="Bottom start"
                                    className="btn peer/bottom-start w-fit"
                                />
                                <input
                                    type="checkbox"
                                    aria-label="Bottom center"
                                    className="btn peer/bottom-center w-fit"
                                />
                                <input type="checkbox" aria-label="Bottom end" className="btn peer/bottom-end w-fit" />

                                <div className="z-[-1] opacity-0 transition-all peer-checked/top-start:z-[50] peer-checked/top-start:opacity-100">
                                    <div className="toast toast-top toast-start">
                                        <div className="alert alert-info">
                                            <span>New message arrived.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="z-[-1] opacity-0 transition-all peer-checked/top-center:z-[50] peer-checked/top-center:opacity-100">
                                    <div className="toast toast-top toast-center">
                                        <div className="alert alert-info">
                                            <span>New message arrived.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="z-[-1] opacity-0 transition-all peer-checked/top-end:z-[50] peer-checked/top-end:opacity-100">
                                    <div className="toast toast-top toast-end">
                                        <div className="alert alert-info">
                                            <span>New message arrived.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="z-[-1] opacity-0 transition-all peer-checked/middle-start:z-[50] peer-checked/middle-start:opacity-100">
                                    <div className="toast toast-middle toast-start">
                                        <div className="alert alert-info">
                                            <span>New message arrived.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="z-[-1] opacity-0 transition-all peer-checked/middle-center:z-[50] peer-checked/middle-center:opacity-100">
                                    <div className="toast toast-middle toast-center">
                                        <div className="alert alert-info">
                                            <span>New message arrived.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="z-[-1] opacity-0 transition-all peer-checked/middle-end:z-[50] peer-checked/middle-end:opacity-100">
                                    <div className="toast toast-middle toast-end">
                                        <div className="alert alert-info">
                                            <span>New message arrived.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="z-[-1] opacity-0 transition-all peer-checked/bottom-start:z-[50] peer-checked/bottom-start:opacity-100">
                                    <div className="toast toast-bottom toast-start">
                                        <div className="alert alert-info">
                                            <span>New message arrived.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="z-[-1] opacity-0 transition-all peer-checked/bottom-center:z-[50] peer-checked/bottom-center:opacity-100">
                                    <div className="toast toast-bottom toast-center">
                                        <div className="alert alert-info">
                                            <span>New message arrived.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="z-[-1] opacity-0 transition-all peer-checked/bottom-end:z-[50] peer-checked/bottom-end:opacity-100">
                                    <div className="toast toast-bottom toast-end">
                                        <div className="alert alert-info">
                                            <span>New message arrived.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToastPage;
