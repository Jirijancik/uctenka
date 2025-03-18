import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Drawer",
};

const DrawerPage = () => {
    return (
        <>
            <PageTitle title="Drawer" items={[{ label: "Components" }, { label: "Drawer", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4">
                            <div className="drawer">
                                <input id="demo-drawer" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    <label htmlFor="demo-drawer" className="btn drawer-button">
                                        Open
                                    </label>
                                </div>
                                <div className="drawer-side z-[50]">
                                    <label
                                        htmlFor="demo-drawer"
                                        aria-label="close sidebar"
                                        className="drawer-overlay"
                                    />
                                    <ul className="menu bg-base-100 text-base-content min-h-full w-80 p-4">
                                        <li>
                                            <a>Sidebar Item 1</a>
                                        </li>
                                        <li>
                                            <a>Sidebar Item 2</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Right Drawer</div>
                        <div className="mt-4">
                            <div className="drawer drawer-end">
                                <input id="demo-end-drawer" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    <label htmlFor="demo-end-drawer" className="btn drawer-button">
                                        Open
                                    </label>
                                </div>
                                <div className="drawer-side z-[50]">
                                    <label
                                        htmlFor="demo-end-drawer"
                                        aria-label="close sidebar"
                                        className="drawer-overlay"
                                    />
                                    <ul className="menu bg-base-100 text-base-content min-h-full w-80 p-4">
                                        <li>
                                            <a>Sidebar Item 1</a>
                                        </li>
                                        <li>
                                            <a>Sidebar Item 2</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Close Button</div>
                        <div className="mt-4">
                            <div className="drawer">
                                <input id="demo-drawer-close" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    <label htmlFor="demo-drawer-close" className="btn drawer-button">
                                        Open
                                    </label>
                                </div>
                                <div className="drawer-side z-[50]">
                                    <label
                                        htmlFor="demo-drawer-close"
                                        aria-label="close sidebar"
                                        className="drawer-overlay"
                                    />
                                    <div className="bg-base-100 min-h-full w-80 p-4">
                                        <div className="flex items-center justify-between">
                                            <p className="text-lg font-medium">Drawer Title</p>
                                            <label
                                                htmlFor="demo-drawer-close"
                                                className="btn btn-ghost btn-circle drawer-button">
                                                <span className="iconify lucide--x" />
                                            </label>
                                        </div>
                                        <p className="mt-2">Contents place here</p>
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

export default DrawerPage;
