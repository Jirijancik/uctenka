import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Menu",
};

const MenuPage = () => {
    return (
        <>
            <PageTitle title="Menu" items={[{ label: "Components" }, { label: "Menu", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4">
                            <ul className="menu bg-base-200 rounded-box w-40">
                                <li>
                                    <div>Item 1</div>
                                </li>
                                <li>
                                    <div>Item 2</div>
                                </li>
                                <li>
                                    <div>Item 3</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Boxed</div>
                        <div className="mt-4">
                            <ul className="menu rounded-box border-base-300 w-40 border">
                                <li>
                                    <div>Item 1</div>
                                </li>
                                <li>
                                    <div>Item 2</div>
                                </li>
                                <li>
                                    <div>Item 3</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Icons</div>
                        <div className="mt-4">
                            <ul className="menu rounded-box bg-base-200">
                                <li>
                                    <div>
                                        <span className="iconify lucide--users size-5" />
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="iconify lucide--folder size-5" />
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="iconify lucide--hard-drive size-5" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Icon with label</div>
                        <div className="mt-4">
                            <ul className="menu rounded-box bg-base-200 w-40">
                                <li>
                                    <div className="space-x-1">
                                        <span className="iconify lucide--users size-5" />
                                        <span>Peoples</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="space-x-1">
                                        <span className="iconify lucide--folder size-5" />
                                        <span>Folders</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="space-x-1">
                                        <span className="iconify lucide--hard-drive size-5" />
                                        <span>Storage</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Horizontal</div>
                        <div className="mt-4">
                            <ul className="menu rounded-box bg-base-200 menu-horizontal">
                                <li>
                                    <div>
                                        <span className="iconify lucide--users size-5" />
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="iconify lucide--folder size-5" />
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="iconify lucide--hard-drive size-5" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Horizontal label</div>
                        <div className="mt-4">
                            <ul className="menu rounded-box bg-base-200 menu-horizontal">
                                <li>
                                    <div className="space-x-1">
                                        <span className="iconify lucide--users size-5" />
                                        <span>Peoples</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="space-x-1">
                                        <span className="iconify lucide--folder size-5" />
                                        <span>Folders</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="space-x-1">
                                        <span className="iconify lucide--hard-drive size-5" />
                                        <span>Storage</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Title</div>
                        <div className="mt-4">
                            <ul className="menu bg-base-200 rounded-box w-40">
                                <li>
                                    <h2 className="menu-title">Main Item</h2>
                                    <ul>
                                        <li>
                                            <div>Item 1</div>
                                        </li>
                                        <li>
                                            <div>Item 2</div>
                                        </li>
                                        <li>
                                            <div>Item 3</div>
                                        </li>
                                        <li>
                                            <div>Item 4</div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Separator</div>
                        <div className="bg-base-200 rounded-box mt-4 w-40 p-1">
                            <h2 className="menu-title pb-1 font-medium">Menu 1</h2>

                            <ul className="menu w-full pt-0">
                                <li>
                                    <div>Item 1.a</div>
                                </li>
                                <li>
                                    <div>Item 1.b</div>
                                </li>
                            </ul>
                            <div className="bg-base-300 -mx-1 h-px" />
                            <h2 className="menu-title pb-1 font-medium">Menu 2</h2>
                            <ul className="menu w-full pt-0">
                                <li>
                                    <div>Item 2.a</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Sub Menu</div>
                        <ul className="menu bg-base-200 rounded-box mt-4 w-48">
                            <li>
                                <div>Item 1</div>
                            </li>
                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li>
                                            <div>Submenu 1</div>
                                        </li>
                                        <li>
                                            <div>Submenu 2</div>
                                        </li>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <div>Submenu 1</div>
                                                    </li>
                                                    <li>
                                                        <div>Submenu 2</div>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <div>Item 3</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Responsive</div>
                        <ul className="menu lg:menu-horizontal bg-base-200 rounded-box mt-4 min-w-48">
                            <li>
                                <div>Item 1</div>
                            </li>
                            <li>
                                <details open>
                                    <summary>Parent item</summary>
                                    <ul className="w-40">
                                        <li>
                                            <div>Submenu 1</div>
                                        </li>
                                        <li>
                                            <div>Submenu 2</div>
                                        </li>
                                        <li>
                                            <details open>
                                                <summary>Parent</summary>
                                                <ul>
                                                    <li>
                                                        <div>item 1</div>
                                                    </li>
                                                    <li>
                                                        <div>item 2</div>
                                                    </li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <div>Item 3</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuPage;
