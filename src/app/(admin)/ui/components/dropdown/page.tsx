import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Dropdown",
};

const DropdownPage = () => {
    return (
        <>
            <PageTitle title="Dropdown" items={[{ label: "Components" }, { label: "Dropdown", active: true }]} />
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="bg-base-100 card card-border">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4 flex flex-wrap gap-4">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn">
                                    Click
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                                    <li>
                                        <a>Item 1</a>
                                    </li>
                                    <li>
                                        <a>Item 2</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="btn">
                                    Hover
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                                    <li>
                                        <a>Item 1</a>
                                    </li>
                                    <li>
                                        <a>Item 2</a>
                                    </li>
                                </ul>
                            </div>
                            <details className="dropdown">
                                <summary className="btn">Stick</summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                                    <li>
                                        <a>Item 1</a>
                                    </li>
                                    <li>
                                        <a>Item 2</a>
                                    </li>
                                </ul>
                            </details>
                            <details className="dropdown">
                                <summary className="btn btn-disabled">Disabled</summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                                    <li>
                                        <a>Item 1</a>
                                    </li>
                                    <li>
                                        <a>Item 2</a>
                                    </li>
                                </ul>
                            </details>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Card</div>
                        <div className="mt-4 flex flex-wrap gap-4">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn">
                                    Information
                                </div>
                                <div
                                    tabIndex={0}
                                    className="dropdown-content card rounded-box bg-base-100 card-border my-2 w-60 shadow-sm">
                                    <div className="card-body p-4">
                                        <div className="card-title">Card title!</div>
                                        <p>you can use any element as a dropdown</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="card card-border bg-base-100">
                        <div className="card-body">
                            <div className="card-title">Side</div>
                            <div className="mt-4 flex flex-wrap gap-4">
                                <div className="dropdown dropdown-top dropdown-center">
                                    <div tabIndex={0} role="button" className="btn">
                                        Top
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm">
                                        <li>
                                            <a>Item 1</a>
                                        </li>
                                        <li>
                                            <a>Item 2</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="dropdown dropdown-bottom dropdown-center">
                                    <div tabIndex={0} role="button" className="btn">
                                        Bottom
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm">
                                        <li>
                                            <a>Item 1</a>
                                        </li>
                                        <li>
                                            <a>Item 2</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="dropdown dropdown-left dropdown-center">
                                    <div tabIndex={0} role="button" className="btn">
                                        Bottom
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm">
                                        <li>
                                            <a>Item 1</a>
                                        </li>
                                        <li>
                                            <a>Item 2</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="dropdown dropdown-right dropdown-center">
                                    <div tabIndex={0} role="button" className="btn">
                                        Right
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm">
                                        <li>
                                            <a>Item 1</a>
                                        </li>
                                        <li>
                                            <a>Item 2</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-border bg-base-100">
                        <div className="card-body">
                            <div className="card-title">Align</div>
                            <div className="mt-4 flex flex-wrap gap-4">
                                <div className="dropdown dropdown-top dropdown-start">
                                    <div tabIndex={0} role="button" className="btn">
                                        Start
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm">
                                        <li>
                                            <a>Item 1</a>
                                        </li>
                                        <li>
                                            <a>Item 2</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="dropdown dropdown-top dropdown-center">
                                    <div tabIndex={0} role="button" className="btn">
                                        Center
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm">
                                        <li>
                                            <a>Item 1</a>
                                        </li>
                                        <li>
                                            <a>Item 2</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="dropdown dropdown-top dropdown-end">
                                    <div tabIndex={0} role="button" className="btn">
                                        Right
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm">
                                        <li>
                                            <a>Item 1</a>
                                        </li>
                                        <li>
                                            <a>Item 2</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Playground</div>
                        <div className="grid place-items-center py-6">
                            <div className="grid grid-cols-3 place-items-center gap-4">
                                <div className="dropdown dropdown-top dropdown-end">
                                    <div
                                        tabIndex={0}
                                        aria-label="Dropdown"
                                        role="button"
                                        className="btn btn-square btn-sm">
                                        <span className="iconify lucide--arrow-up -rotate-45"></span>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        className="dropdown-content bg-base-100 card card-border z-1 m-1 w-36 p-3 text-sm shadow-xs hover:shadow-sm">
                                        <p>Side: Top</p>
                                        <p>Align: End</p>
                                    </div>
                                </div>
                                <div className="dropdown dropdown-top dropdown-center">
                                    <div
                                        tabIndex={0}
                                        aria-label="Dropdown"
                                        role="button"
                                        className="btn btn-square btn-sm">
                                        <span className="iconify lucide--arrow-up"></span>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        className="dropdown-content bg-base-100 card card-border z-1 m-1 w-36 p-3 text-sm shadow-xs hover:shadow-sm">
                                        <p>Side: Top</p>
                                        <p>Align: Center</p>
                                    </div>
                                </div>
                                <div className="dropdown dropdown-top dropdown-start">
                                    <div
                                        tabIndex={0}
                                        aria-label="Dropdown"
                                        role="button"
                                        className="btn btn-square btn-sm">
                                        <span className="iconify lucide--arrow-up rotate-45"></span>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        className="dropdown-content bg-base-100 card card-border z-1 m-1 w-36 p-3 text-sm shadow-xs hover:shadow-sm">
                                        <p>Side: Top</p>
                                        <p>Align: Start</p>
                                    </div>
                                </div>
                                <div className="dropdown dropdown-left dropdown-center">
                                    <div
                                        tabIndex={0}
                                        aria-label="Dropdown"
                                        role="button"
                                        className="btn btn-square btn-sm">
                                        <span className="iconify lucide--arrow-up -rotate-90"></span>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        className="dropdown-content bg-base-100 card card-border z-1 m-1 w-36 p-3 text-sm shadow-xs hover:shadow-sm">
                                        <p>Side: Left</p>
                                        <p>Align: Center</p>
                                    </div>
                                </div>
                                <div className="bg-base-200 size-5 rounded-full"></div>
                                <div className="dropdown dropdown-right dropdown-center">
                                    <div
                                        tabIndex={0}
                                        aria-label="Dropdown"
                                        role="button"
                                        className="btn btn-square btn-sm">
                                        <span className="iconify lucide--arrow-up rotate-90"></span>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        className="dropdown-content bg-base-100 card card-border z-1 m-1 w-36 p-3 text-sm shadow-xs hover:shadow-sm">
                                        <p>Side: Right</p>
                                        <p>Align: Center</p>
                                    </div>
                                </div>
                                <div className="dropdown dropdown-bottom dropdown-end">
                                    <div
                                        tabIndex={0}
                                        aria-label="Dropdown"
                                        role="button"
                                        className="btn btn-square btn-sm">
                                        <span className="iconify lucide--arrow-up -rotate-135"></span>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        className="dropdown-content bg-base-100 card card-border z-1 m-1 w-36 p-3 text-sm shadow-xs hover:shadow-sm">
                                        <p>Side: Bottom</p>
                                        <p>Align: End</p>
                                    </div>
                                </div>
                                <div className="dropdown dropdown-bottom dropdown-center">
                                    <div
                                        tabIndex={0}
                                        aria-label="Dropdown"
                                        role="button"
                                        className="btn btn-square btn-sm">
                                        <span className="iconify lucide--arrow-up rotate-180"></span>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        className="dropdown-content bg-base-100 card card-border z-1 m-1 w-36 p-3 text-sm shadow-xs hover:shadow-sm">
                                        <p>Side: Bottom</p>
                                        <p>Align: Center</p>
                                    </div>
                                </div>
                                <div className="dropdown dropdown-bottom dropdown-start">
                                    <div
                                        tabIndex={0}
                                        aria-label="Dropdown"
                                        role="button"
                                        className="btn btn-square btn-sm">
                                        <span className="iconify lucide--arrow-up rotate-135"></span>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        className="dropdown-content bg-base-100 card card-border z-1 m-1 w-36 p-3 text-sm shadow-xs hover:shadow-sm">
                                        <p>Side: Bottom</p>
                                        <p>Align: Start</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">In Text</div>
                        <div className="mt-2 flex flex-wrap items-center gap-1">
                            <span className="text-sm">A normal text and a helper dropdown</span>
                            <div className="dropdown dropdown-top dropdown-center">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-circle btn-xs btn-ghost"
                                    aria-label="Dropdown">
                                    <span className="iconify lucide--info text-base-content/80 size-4" />
                                </div>
                                <div
                                    tabIndex={0}
                                    className="dropdown-content card rounded-box bg-base-100 card-border my-1 w-44 shadow-sm">
                                    <div className="card-body gap-1 p-3">
                                        <div className="card-title">Need more info?</div>
                                        <p className="text-sm">Here is a description!</p>
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

export default DropdownPage;
