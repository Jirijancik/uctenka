import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Accordion",
};
const AccordionPage = () => {
    return (
        <>
            <PageTitle title="Accordion" items={[{ label: "Components" }, { label: "Accordion", active: true }]} />

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default (Single)</div>
                        <div className="mt-4 space-y-1">
                            <div className="bg-base-200 rounded-box collapse">
                                <input
                                    aria-label="Collapse trigger"
                                    type="radio"
                                    name="accordion-default"
                                    defaultChecked
                                />
                                <div className="collapse-title text-lg font-medium">Accordion #1</div>
                                <div className="collapse-content">
                                    Here are some hidden content, which is now public
                                </div>
                            </div>
                            <div className="bg-base-200 rounded-box collapse">
                                <input aria-label="Collapse trigger" type="radio" name="accordion-default" />
                                <div className="collapse-title text-lg font-medium">Accordion #2</div>
                                <div className="collapse-content">
                                    Here are some hidden content, which is now public
                                </div>
                            </div>
                            <div className="bg-base-200 rounded-box collapse">
                                <input aria-label="Collapse trigger" type="radio" name="accordion-default" />
                                <div className="collapse-title text-lg font-medium">Accordion #3</div>
                                <div className="collapse-content">
                                    Here are some hidden content, which is now public
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Multiple</div>
                        <div className="mt-4 space-y-1">
                            <div className="bg-base-200 rounded-box collapse">
                                <input
                                    aria-label="Collapse trigger"
                                    type="checkbox"
                                    name="accordion-multiple"
                                    defaultChecked
                                />
                                <div className="collapse-title text-lg font-medium">Accordion #1</div>
                                <div className="collapse-content">
                                    Here are some hidden content, which is now public
                                </div>
                            </div>
                            <div className="bg-base-200 rounded-box collapse">
                                <input aria-label="Collapse trigger" type="checkbox" name="accordion-multiple" />
                                <div className="collapse-title text-lg font-medium">Accordion #2</div>
                                <div className="collapse-content">
                                    Here are some hidden content, which is now public
                                </div>
                            </div>
                            <div className="bg-base-200 rounded-box collapse">
                                <input aria-label="Collapse trigger" type="checkbox" name="accordion-multiple" />
                                <div className="collapse-title text-lg font-medium">Accordion #3</div>
                                <div className="collapse-content">
                                    Here are some hidden content, which is now public
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Icon: Arrow</div>
                        <div className="mt-4 space-y-1">
                            <div className="bg-base-200 collapse-arrow rounded-box collapse">
                                <input
                                    aria-label="Collapse trigger"
                                    type="radio"
                                    name="accordion-arrow"
                                    defaultChecked
                                />
                                <div className="collapse-title text-lg font-medium">Accordion #1</div>
                                <div className="collapse-content">
                                    Here are some hidden content, which is now public
                                </div>
                            </div>
                            <div className="bg-base-200 collapse-arrow rounded-box collapse">
                                <input aria-label="Collapse trigger" type="radio" name="accordion-arrow" />
                                <div className="collapse-title text-lg font-medium">Accordion #2</div>
                                <div className="collapse-content">
                                    Here are some hidden content, which is now public
                                </div>
                            </div>
                            <div className="bg-base-200 collapse-arrow rounded-box collapse">
                                <input aria-label="Collapse trigger" type="radio" name="accordion-arrow" />
                                <div className="collapse-title text-lg font-medium">Accordion #3</div>
                                <div className="collapse-content">
                                    Here are some hidden content, which is now public
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Icon: Plus/Minus</div>
                        <div className="mt-4 space-y-1">
                            <div className="bg-base-200 collapse-plus rounded-box collapse">
                                <input
                                    aria-label="Collapse trigger"
                                    type="radio"
                                    name="accordion-plus"
                                    defaultChecked
                                />
                                <div className="collapse-title text-lg font-medium">Accordion #1</div>
                                <div className="collapse-content">
                                    Here are some hidden content, which is now public
                                </div>
                            </div>
                            <div className="bg-base-200 collapse-plus rounded-box collapse">
                                <input aria-label="Collapse trigger" type="radio" name="accordion-plus" />
                                <div className="collapse-title text-lg font-medium">Accordion #2</div>
                                <div className="collapse-content">
                                    Here are some hidden content, which is now public
                                </div>
                            </div>
                            <div className="bg-base-200 collapse-plus rounded-box collapse">
                                <input aria-label="Collapse trigger" type="radio" name="accordion-plus" />
                                <div className="collapse-title text-lg font-medium">Accordion #3</div>
                                <div className="collapse-content">
                                    Here are some hidden content, which is now public
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Join</div>
                        <div className="join join-vertical mt-4">
                            <div className="join-item border-base-300 collapse border">
                                <input
                                    aria-label="Collapse trigger"
                                    type="radio"
                                    name="accordion-join"
                                    defaultChecked
                                />
                                <div className="collapse-title text-lg font-medium">Accordion #1</div>
                                <div className="collapse-content">
                                    Here are some hidden content, which is now public
                                </div>
                            </div>
                            <div className="join-item border-base-300 collapse border">
                                <input aria-label="Collapse trigger" type="radio" name="accordion-join" />
                                <div className="collapse-title text-lg font-medium">Accordion #2</div>
                                <div className="collapse-content">
                                    Here are some hidden content, which is now public
                                </div>
                            </div>
                            <div className="join-item border-base-300 collapse border">
                                <input aria-label="Collapse trigger" type="radio" name="accordion-join" />
                                <div className="collapse-title text-lg font-medium">Accordion #3</div>
                                <div className="collapse-content">
                                    Here are some hidden content, which is now public
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccordionPage;
