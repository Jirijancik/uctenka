import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Step",
};

const StepPage = () => {
    return (
        <>
            <PageTitle title="Step" items={[{ label: "Components" }, { label: "Step", active: true }]} />
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100 overflow-auto">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4 overflow-auto">
                            <ul className="steps">
                                <li className="step step-primary">Register</li>
                                <li className="step step-primary">Choose plan</li>
                                <li className="step">Purchase</li>
                                <li className="step">Receive Product</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100 overflow-auto">
                    <div className="card-body">
                        <div className="card-title">Responsive</div>
                        <div className="mt-4 overflow-auto">
                            <ul className="steps steps-vertical lg:steps-horizontal">
                                <li className="step step-primary">Register</li>
                                <li className="step step-primary">Choose plan</li>
                                <li className="step">Purchase</li>
                                <li className="step">Receive Product</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100 overflow-auto">
                    <div className="card-body">
                        <div className="card-title">Icon</div>
                        <div className="mt-4 overflow-auto">
                            <ul className="steps">
                                <li data-content="?" className="step">
                                    Step 1
                                </li>
                                <li data-content="!" className="step">
                                    Step 2
                                </li>
                                <li data-content="✓" className="step">
                                    Step 3
                                </li>
                                <li data-content="✕" className="step">
                                    Step 4
                                </li>
                                <li data-content="★" className="step">
                                    Step 5
                                </li>
                                <li data-content="" className="step">
                                    Step 6
                                </li>
                                <li data-content="●" className="step">
                                    Step 7
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100 overflow-auto">
                    <div className="card-body">
                        <div className="card-title">Color</div>
                        <div className="mt-4 overflow-auto">
                            <ul className="steps">
                                <li className="step step-info">Travel to Mars</li>
                                <li className="step step-info">Establish a base</li>
                                <li className="step step-info">Collect samples</li>
                                <li className="step step-error" data-content="?">
                                    Return safely
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StepPage;
