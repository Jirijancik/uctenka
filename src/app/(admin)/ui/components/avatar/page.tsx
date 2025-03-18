import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Avatar",
};

const AvatarPage = () => {
    return (
        <>
            <PageTitle title="Avatar" items={[{ label: "Components" }, { label: "Avatar", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4">
                            <div className="avatar">
                                <div className="bg-base-200 rounded-box w-20">
                                    <img src="/images/avatars/1.png" alt="Avatar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Rounded</div>
                        <div className="mt-4 flex flex-wrap items-center gap-4">
                            <div className="avatar">
                                <div className="bg-base-200 w-20 rounded-xl">
                                    <img src="/images/avatars/1.png" alt="Avatar" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="bg-base-200 w-20 rounded-full">
                                    <img src="/images/avatars/2.png" alt="Avatar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Size</div>
                        <div className="mt-4 flex flex-wrap items-center gap-4">
                            <div className="avatar">
                                <div className="bg-base-200 rounded-box w-24">
                                    <img src="/images/avatars/4.png" alt="Avatar" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="bg-base-200 rounded-box w-20">
                                    <img src="/images/avatars/3.png" alt="Avatar" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="bg-base-200 rounded-box w-16">
                                    <img src="/images/avatars/2.png" alt="Avatar" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="bg-base-200 rounded-box w-12">
                                    <img src="/images/avatars/1.png" alt="Avatar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Mask</div>
                        <div className="mt-4 flex flex-wrap items-center gap-4">
                            <div className="avatar">
                                <div className="bg-base-200 mask mask-squircle w-20">
                                    <img src="/images/avatars/4.png" alt="Avatar" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="bg-base-200 mask mask-hexagon w-20">
                                    <img src="/images/avatars/5.png" alt="Avatar" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="bg-base-200 mask mask-hexagon-2 w-20">
                                    <img src="/images/avatars/7.png" alt="Avatar" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="bg-base-200 mask mask-diamond w-20">
                                    <img src="/images/avatars/6.png" alt="Avatar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Group</div>
                        <div className="mt-4">
                            <div className="avatar-group -space-x-5">
                                <div className="avatar">
                                    <div className="bg-base-200 w-12 rounded-full">
                                        <img src="/images/avatars/4.png" alt="Avatar" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="bg-base-200 w-12 rounded-full">
                                        <img src="/images/avatars/5.png" alt="Avatar" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="bg-base-200 w-12 rounded-full">
                                        <img src="/images/avatars/7.png" alt="Avatar" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="bg-base-200 w-12 rounded-full">
                                        <img src="/images/avatars/8.png" alt="Avatar" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Counter</div>
                        <div className="mt-4">
                            <div className="avatar-group -space-x-5">
                                <div className="avatar">
                                    <div className="bg-base-200 w-12 rounded-full">
                                        <img src="/images/avatars/4.png" alt="Avatar" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="bg-base-200 w-12 rounded-full">
                                        <img src="/images/avatars/5.png" alt="Avatar" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="bg-base-200 w-12 rounded-full">
                                        <img src="/images/avatars/7.png" alt="Avatar" />
                                    </div>
                                </div>
                                <div className="avatar avatar-placeholder">
                                    <div className="bg-base-300 w-12 rounded-full">+99</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Ring</div>
                        <div className="mt-4">
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="avatar">
                                    <div className="bg-primary/25 ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                        <img src="/images/avatars/1.png" alt="Avatar" />
                                    </div>
                                </div>

                                <div className="avatar">
                                    <div className="bg-secondary/25 ring-secondary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                        <img src="/images/avatars/2.png" alt="Avatar" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="bg-accent/25 ring-accent ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                        <img src="/images/avatars/3.png" alt="Avatar" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="bg-success/25 ring-success ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                        <img src="/images/avatars/4.png" alt="Avatar" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="bg-info/25 ring-info ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                        <img src="/images/avatars/5.png" alt="Avatar" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="bg-warning/25 ring-warning ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                        <img src="/images/avatars/6.png" alt="Avatar" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="bg-error/25 ring-error ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                        <img src="/images/avatars/7.png" alt="Avatar" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="bg-neutral/25 ring-neutral ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                        <img src="/images/avatars/8.png" alt="Avatar" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Presence</div>
                        <div className="mt-4 flex flex-wrap items-center gap-4">
                            <div className="avatar avatar-online">
                                <div className="bg-base-200 w-12 rounded-full">
                                    <img src="/images/avatars/1.png" alt="Avatar" />
                                </div>
                            </div>

                            <div className="avatar avatar-offline">
                                <div className="bg-base-200 w-12 rounded-full">
                                    <img src="/images/avatars/2.png" alt="Avatar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Placeholder</div>
                        <div className="mt-4">
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="avatar avatar-placeholder">
                                    <div className="bg-primary text-primary-content ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                        N
                                    </div>
                                </div>
                                <div className="avatar avatar-placeholder">
                                    <div className="bg-secondary text-secondary-content ring-secondary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                        E
                                    </div>
                                </div>
                                <div className="avatar avatar-placeholder">
                                    <div className="bg-success text-success-content ring-success ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                        X
                                    </div>
                                </div>
                                <div className="avatar avatar-placeholder">
                                    <div className="bg-warning text-warning-content ring-warning ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                        U
                                    </div>
                                </div>
                                <div className="avatar avatar-placeholder">
                                    <div className="bg-error text-error-content ring-error ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                        S
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

export default AvatarPage;
