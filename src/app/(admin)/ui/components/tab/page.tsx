import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Tab",
};

const TabPage = () => {
    return (
        <>
            <PageTitle title="Tab" items={[{ label: "Components" }, { label: "Tab", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4">
                            <div role="tablist" className="tabs">
                                <a role="tab" className="tab">
                                    Tab 1
                                </a>
                                <a role="tab" className="tab tab-active">
                                    Tab 2
                                </a>
                                <a role="tab" className="tab">
                                    Tab 3
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Border</div>
                        <div className="mt-4">
                            <div role="tablist" className="tabs tabs-border">
                                <a role="tab" className="tab">
                                    Tab 1
                                </a>
                                <a role="tab" className="tab tab-active text-primary">
                                    Tab 2
                                </a>
                                <a role="tab" className="tab">
                                    Tab 3
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Lift</div>
                        <div className="mt-4">
                            <div role="tablist" className="tabs tabs-lift">
                                <a role="tab" className="tab">
                                    Tab 1
                                </a>
                                <a role="tab" className="tab tab-active">
                                    Tab 2
                                </a>
                                <a role="tab" className="tab">
                                    Tab 3
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Box</div>
                        <div className="mt-4 w-fit">
                            <div role="tablist" className="tabs tabs-box">
                                <a role="tab" className="tab">
                                    Tab 1
                                </a>
                                <a role="tab" className="tab tab-active">
                                    Tab 2
                                </a>
                                <a role="tab" className="tab">
                                    Tab 3
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Radio Button</div>
                        <div className="mt-4">
                            <div role="tablist" className="tabs tabs-lift">
                                <input
                                    type="radio"
                                    name="demo-tabs-radio"
                                    role="tab"
                                    className="tab"
                                    aria-label="Tab 1"
                                />
                                <div className="tab-content border-base-200 bg-base-100 p-6">Tab content 1</div>

                                <input
                                    type="radio"
                                    name="demo-tabs-radio"
                                    role="tab"
                                    className="tab"
                                    aria-label="Tab 2"
                                    defaultChecked
                                />
                                <div className="tab-content border-base-200 bg-base-100 p-6">Tab content 2</div>

                                <input
                                    type="radio"
                                    name="demo-tabs-radio"
                                    role="tab"
                                    className="tab"
                                    aria-label="Tab 3"
                                />
                                <div className="tab-content border-base-200 bg-base-100 p-6">Tab content 3</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Bottom Tab</div>
                        <div className="mt-4">
                            <div role="tablist" className="tabs tabs-lift tabs-bottom">
                                <input
                                    type="radio"
                                    name="demo-tabs-bottom-radio"
                                    role="tab"
                                    className="tab"
                                    aria-label="Tab 1"
                                />
                                <div className="tab-content border-base-200 bg-base-100 p-6">Tab content 1</div>

                                <input
                                    type="radio"
                                    name="demo-tabs-bottom-radio"
                                    role="tab"
                                    className="tab"
                                    aria-label="Tab 2"
                                    defaultChecked
                                />
                                <div className="tab-content border-base-200 bg-base-100 p-6">Tab content 2</div>

                                <input
                                    type="radio"
                                    name="demo-tabs-bottom-radio"
                                    role="tab"
                                    className="tab"
                                    aria-label="Tab 3"
                                />
                                <div className="tab-content border-base-200 bg-base-100 p-6">Tab content 3</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Disabled</div>
                        <div className="mt-4">
                            <div role="tablist" className="tabs tabs-lift">
                                <input
                                    type="radio"
                                    name="demo-tabs-disabled-radio"
                                    role="tab"
                                    className="tab"
                                    aria-label="Tab 1"
                                    defaultChecked
                                />
                                <div className="tab-content border-base-200 bg-base-100 p-6">Tab content 1</div>

                                <input
                                    type="radio"
                                    name="demo-tabs-disabled-radio"
                                    role="tab"
                                    className="tab"
                                    aria-label="Tab 2"
                                    disabled
                                />
                                <div className="tab-content border-base-200 bg-base-100 p-6">Tab content 2</div>

                                <input
                                    type="radio"
                                    name="demo-tabs-disabled-radio"
                                    role="tab"
                                    className="tab"
                                    aria-label="Tab 3"
                                />
                                <div className="tab-content border-base-200 bg-base-100 p-6">Tab content 3</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Size</div>
                        <div className="mt-4 flex flex-col items-center gap-2">
                            <div role="tablist" className="tabs tabs-xs">
                                <a role="tab" className="tab">
                                    Tab 1
                                </a>
                                <a role="tab" className="tab tab-active">
                                    Tab 2
                                </a>
                                <a role="tab" className="tab">
                                    Tab 3
                                </a>
                            </div>
                            <div role="tablist" className="tabs tabs-sm">
                                <a role="tab" className="tab">
                                    Tab 1
                                </a>
                                <a role="tab" className="tab tab-active">
                                    Tab 2
                                </a>
                                <a role="tab" className="tab">
                                    Tab 3
                                </a>
                            </div>
                            <div role="tablist" className="tabs">
                                <a role="tab" className="tab">
                                    Tab 1
                                </a>
                                <a role="tab" className="tab tab-active">
                                    Tab 2
                                </a>
                                <a role="tab" className="tab">
                                    Tab 3
                                </a>
                            </div>
                            <div role="tablist" className="tabs tabs-lg">
                                <a role="tab" className="tab">
                                    Tab 1
                                </a>
                                <a role="tab" className="tab tab-active">
                                    Tab 2
                                </a>
                                <a role="tab" className="tab">
                                    Tab 3
                                </a>
                            </div>
                            <div role="tablist" className="tabs tabs-xl">
                                <a role="tab" className="tab">
                                    Tab 1
                                </a>
                                <a role="tab" className="tab tab-active">
                                    Tab 2
                                </a>
                                <a role="tab" className="tab">
                                    Tab 3
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TabPage;
