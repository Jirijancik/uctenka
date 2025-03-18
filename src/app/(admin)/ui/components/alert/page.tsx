import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Alert",
};

const AlertPage = () => {
    return (
        <>
            <PageTitle title="Alert" items={[{ label: "Components" }, { label: "Alert", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4">
                            <div className="alert" role="alert">
                                <span className="iconify lucide--info text-info size-5" />
                                <span>12 unread messages. Tap to see.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Button</div>
                        <div className="mt-4">
                            <div className="alert" role="alert">
                                <span className="iconify lucide--cookie text-info size-5" />
                                <span>12 unread messages. Tap to see.</span>
                                <div className="space-x-2">
                                    <button className="btn btn-sm">Deny</button>
                                    <button className="btn btn-sm btn-primary">Accept</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Description</div>
                        <div className="mt-4">
                            <div className="alert" role="alert">
                                <span className="iconify lucide--message-square-dashed size-5" />
                                <div>
                                    <h3 className="font-medium">New message!</h3>
                                    <div className="text-base-content/70 text-xs">You have 1 unread message</div>
                                </div>
                                <button className="btn btn-sm">See</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Confirmation</div>
                        <div className="mt-4">
                            <div className="alert" role="alert">
                                <span className="iconify lucide--trash-2 text-error size-5" />
                                <div>
                                    <h3 className="font-bold">12.7 MB Saved</h3>
                                    <div className="text-xs">Some file removed</div>
                                </div>
                                <div className="space-x-2">
                                    <button className="btn btn-sm">Dismiss</button>
                                    <button className="btn btn-sm btn-primary">Restore</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Solid</div>
                        <div className="mt-4 space-y-3">
                            <div className="alert alert-success" role="alert">
                                <span className="iconify lucide--info size-5" />
                                <span>New software update available.</span>
                            </div>
                            <div className="alert alert-info" role="alert">
                                <span className="iconify lucide--info size-5" />
                                <span>New software update available.</span>
                            </div>
                            <div className="alert alert-warning" role="alert">
                                <span className="iconify lucide--info size-5" />
                                <span>New software update available.</span>
                            </div>
                            <div className="alert alert-error" role="alert">
                                <span className="iconify lucide--info size-5" />
                                <span>New software update available.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Soft</div>
                        <div className="mt-4 space-y-3">
                            <div className="alert alert-success alert-soft" role="alert">
                                <span className="iconify lucide--info size-5" />
                                <span>New software update available.</span>
                            </div>
                            <div className="alert alert-soft alert-info" role="alert">
                                <span className="iconify lucide--info size-5" />
                                <span>New software update available.</span>
                            </div>
                            <div className="alert alert-soft alert-warning" role="alert">
                                <span className="iconify lucide--info size-5" />
                                <span>New software update available.</span>
                            </div>
                            <div className="alert alert-error alert-soft" role="alert">
                                <span className="iconify lucide--info size-5" />
                                <span>New software update available.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Outline</div>
                        <div className="mt-4 space-y-3">
                            <div className="alert alert-success alert-outline" role="alert">
                                <span className="iconify lucide--info size-5" />
                                <span>New software update available.</span>
                            </div>
                            <div className="alert alert-outline alert-info" role="alert">
                                <span className="iconify lucide--info size-5" />
                                <span>New software update available.</span>
                            </div>
                            <div className="alert alert-outline alert-warning" role="alert">
                                <span className="iconify lucide--info size-5" />
                                <span>New software update available.</span>
                            </div>
                            <div className="alert alert-outline alert-error" role="alert">
                                <span className="iconify lucide--info size-5" />
                                <span>New software update available.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Dashed</div>
                        <div className="mt-4 space-y-3">
                            <div className="alert alert-success alert-dash" role="alert">
                                <span className="iconify lucide--info size-5" />
                                <span>New software update available.</span>
                            </div>
                            <div className="alert alert-dash alert-info" role="alert">
                                <span className="iconify lucide--info size-5" />
                                <span>New software update available.</span>
                            </div>
                            <div className="alert alert-dash alert-warning" role="alert">
                                <span className="iconify lucide--info size-5" />
                                <span>New software update available.</span>
                            </div>
                            <div className="alert alert-dash alert-error" role="alert">
                                <span className="iconify lucide--info size-5" />
                                <span>New software update available.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AlertPage;
