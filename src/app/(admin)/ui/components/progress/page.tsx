import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Progress",
};

const ProgressPage = () => {
    return (
        <>
            <PageTitle title="Progress" items={[{ label: "Components" }, { label: "Progress", active: true }]} />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4 flex flex-col gap-y-3">
                            <progress className="progress w-56" value="0" max="100"></progress>
                            <progress className="progress w-56" value="15" max="100"></progress>
                            <progress className="progress w-56" value="30" max="100"></progress>
                            <progress className="progress w-56" value="40" max="100"></progress>
                            <progress className="progress w-56" value="75" max="100"></progress>
                            <progress className="progress w-56" value="100" max="100"></progress>
                            <progress className="progress w-56"></progress>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Color</div>
                        <div className="mt-4 flex flex-col gap-y-3">
                            <progress className="progress progress-primary w-56" value="20" max="100"></progress>
                            <progress className="progress progress-secondary w-56" value="30" max="100"></progress>
                            <progress className="progress progress-accent w-56" value="40" max="100"></progress>
                            <progress className="progress progress-success w-56" value="50" max="100"></progress>
                            <progress className="progress progress-info w-56" value="60" max="100"></progress>
                            <progress className="progress progress-warning w-56" value="70" max="100"></progress>
                            <progress className="progress progress-error w-56" value="80" max="100"></progress>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Radial</div>
                        <div className="mt-4 flex flex-wrap gap-4">
                            <div
                                aria-label="Radial progress"
                                className="radial-progress"
                                style={{ "--value": 20, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={20}
                                role="progressbar">
                                20%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress"
                                style={{ "--value": 40, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={40}
                                role="progressbar">
                                40%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress"
                                style={{ "--value": 60, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={60}
                                role="progressbar">
                                60%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress"
                                style={{ "--value": 80, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={80}
                                role="progressbar">
                                80%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress"
                                style={{ "--value": 95, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={95}
                                role="progressbar">
                                95%
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Radial: Size</div>
                        <div className="mt-4 flex gap-4">
                            <div
                                aria-label="Radial progress"
                                className="radial-progress text-xs"
                                style={{ "--value": 75, "--thickness": "2px", "--size": "2rem" }}
                                aria-valuenow={75}
                                role="progressbar">
                                75%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress text-sm"
                                style={{ "--value": 75, "--thickness": "3px", "--size": "3rem" }}
                                aria-valuenow={75}
                                role="progressbar">
                                75%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress"
                                style={{ "--value": 75, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={75}
                                role="progressbar">
                                75%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress"
                                style={{ "--value": 75, "--thickness": "5px", "--size": "5rem" }}
                                aria-valuenow={75}
                                role="progressbar">
                                75%
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Radial: Color</div>
                        <div className="mt-4 flex flex-wrap gap-4">
                            <div
                                aria-label="Radial progress"
                                className="radial-progress text-primary"
                                style={{ "--value": 80, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={80}
                                role="progressbar">
                                80%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress text-secondary"
                                style={{ "--value": 80, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={80}
                                role="progressbar">
                                80%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress text-accent"
                                style={{ "--value": 80, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={80}
                                role="progressbar">
                                80%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress text-success"
                                style={{ "--value": 80, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={80}
                                role="progressbar">
                                80%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress text-info"
                                style={{ "--value": 80, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={80}
                                role="progressbar">
                                80%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress text-warning"
                                style={{ "--value": 80, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={80}
                                role="progressbar">
                                80%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress text-error"
                                style={{ "--value": 80, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={80}
                                role="progressbar">
                                80%
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Radial: Soft</div>
                        <div className="mt-4 flex flex-wrap gap-4">
                            <div
                                aria-label="Radial progress"
                                className="radial-progress text-primary outline-primary/15 outline-4 -outline-offset-4"
                                style={{ "--value": 65, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={65}
                                role="progressbar">
                                65%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress text-secondary outline-secondary/15 outline-4 -outline-offset-4"
                                style={{ "--value": 65, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={65}
                                role="progressbar">
                                65%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress text-accent outline-accent/15 outline-4 -outline-offset-4"
                                style={{ "--value": 65, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={65}
                                role="progressbar">
                                65%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress text-success outline-success/15 outline-4 -outline-offset-4"
                                style={{ "--value": 65, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={65}
                                role="progressbar">
                                65%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress text-info outline-info/15 outline-4 -outline-offset-4"
                                style={{ "--value": 65, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={65}
                                role="progressbar">
                                65%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress text-warning outline-warning/15 outline-4 -outline-offset-4"
                                style={{ "--value": 65, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={65}
                                role="progressbar">
                                65%
                            </div>
                            <div
                                aria-label="Radial progress"
                                className="radial-progress text-error outline-error/15 outline-4 -outline-offset-4"
                                style={{ "--value": 65, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={65}
                                role="progressbar">
                                65%
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Background</div>
                        <div className="mt-4 flex gap-4">
                            <div
                                aria-label="Radial progress"
                                className="radial-progress border-primary bg-primary text-primary-content border-4"
                                style={{ "--value": 75, "--thickness": "4px", "--size": "4rem" }}
                                aria-valuenow={75}
                                role="progressbar">
                                75%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProgressPage;
