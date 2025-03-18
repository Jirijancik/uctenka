import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
    title: "Timeline",
};

const TimelinePage = () => {
    return (
        <>
            <PageTitle title="Timeline" items={[{ label: "Components" }, { label: "Timeline", active: true }]} />
            <div className="mt-6 grid gap-6 xl:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Default</div>
                        <div className="mt-4 overflow-auto">
                            <ul className="timeline">
                                <li>
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>
                                    <div className="timeline-end timeline-box">First Macintosh computer</div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>
                                    <div className="timeline-end timeline-box">iMac</div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>
                                    <div className="timeline-end timeline-box">iPod</div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>
                                    <div className="timeline-end timeline-box">iPhone</div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>
                                    <div className="timeline-end timeline-box">Apple Watch</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Top side</div>
                        <div className="mt-4 overflow-auto">
                            <ul className="timeline">
                                <li>
                                    <div className="timeline-start timeline-box">First Macintosh computer</div>
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>

                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-start timeline-box">iMac</div>
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>

                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-start timeline-box">iPod</div>
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>

                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-start timeline-box">iPhone</div>
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>

                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-start timeline-box">Apple Watch</div>
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Label</div>
                        <div className="mt-4 overflow-auto">
                            <ul className="timeline">
                                <li>
                                    <div className="timeline-start">1984</div>
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>
                                    <div className="timeline-end timeline-box">First Macintosh computer</div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-start">1998</div>
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>
                                    <div className="timeline-end timeline-box">iMac</div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-start">2001</div>
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>
                                    <div className="timeline-end timeline-box">iPod</div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-start">2007</div>
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>
                                    <div className="timeline-end timeline-box">iPhone</div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-start">2015</div>
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>
                                    <div className="timeline-end timeline-box">Apple Watch</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100">
                    <div className="card-body">
                        <div className="card-title">Different side</div>
                        <div className="mt-4 overflow-auto">
                            <ul className="timeline">
                                <li>
                                    <div className="timeline-start timeline-box">First Macintosh computer</div>
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>

                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>
                                    <div className="timeline-end timeline-box">iMac</div>

                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-start timeline-box">iPod</div>
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>

                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>
                                    <div className="timeline-end timeline-box">iPhone</div>

                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-start timeline-box">Apple Watch</div>
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="card card-border bg-base-100">
                        <div className="card-body">
                            <div className="card-title">Color</div>
                            <div className="mt-4 overflow-auto">
                                <ul className="timeline">
                                    <li>
                                        <div className="timeline-start timeline-box">First Macintosh computer</div>
                                        <div className="timeline-middle">
                                            <div className="text-primary-content bg-primary grid place-items-center rounded-full p-1">
                                                <span className="iconify lucide--check size-3.5" />
                                            </div>
                                        </div>

                                        <hr className="from-primary to-secondary bg-linear-to-r" />
                                    </li>
                                    <li>
                                        <hr className="bg-secondary" />
                                        <div className="timeline-middle">
                                            <div className="bg-secondary text-secondary-content grid place-items-center rounded-full p-1">
                                                <span className="iconify lucide--check size-3.5" />
                                            </div>
                                        </div>
                                        <div className="timeline-end timeline-box">iMac</div>

                                        <hr className="from-secondary to-info bg-linear-to-r" />
                                    </li>
                                    <li>
                                        <hr className="bg-info" />
                                        <div className="timeline-start timeline-box">iPod</div>
                                        <div className="timeline-middle">
                                            <div className="bg-info text-info-content grid place-items-center rounded-full p-1">
                                                <span className="iconify lucide--check size-3.5" />
                                            </div>
                                        </div>

                                        <hr className="from-success to-success bg-linear-to-r" />
                                    </li>
                                    <li>
                                        <hr className="bg-success" />
                                        <div className="timeline-middle">
                                            <div className="bg-success text-success-content grid place-items-center rounded-full p-1">
                                                <span className="iconify lucide--check size-3.5" />
                                            </div>
                                        </div>
                                        <div className="timeline-end timeline-box">iPhone</div>

                                        <hr className="from-success to-base-300 bg-linear-to-r" />
                                    </li>
                                    <li>
                                        <hr />
                                        <div className="timeline-start timeline-box">Apple Watch</div>
                                        <div className="timeline-middle">
                                            <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                                <span className="iconify lucide--check size-3.5" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="card card-border bg-base-100">
                        <div className="card-body">
                            <div className="card-title">Without icon</div>
                            <div className="mt-4 overflow-auto">
                                <ul className="timeline">
                                    <li>
                                        <div className="timeline-start timeline-box">First Macintosh computer</div>

                                        <hr />
                                    </li>
                                    <li>
                                        <hr />

                                        <div className="timeline-end timeline-box">iMac</div>

                                        <hr />
                                    </li>
                                    <li>
                                        <hr />
                                        <div className="timeline-start timeline-box">iPod</div>

                                        <hr />
                                    </li>
                                    <li>
                                        <hr />

                                        <div className="timeline-end timeline-box">iPhone</div>

                                        <hr />
                                    </li>
                                    <li>
                                        <hr />
                                        <div className="timeline-start timeline-box">Apple Watch</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-border bg-base-100 h-fit">
                    <div className="card-body">
                        <div className="card-title">Vertical</div>
                        <div className="mt-4 overflow-auto">
                            <ul className="timeline timeline-vertical">
                                <li>
                                    <div className="timeline-start timeline-box">First Macintosh computer</div>
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>
                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>
                                    <div className="timeline-end timeline-box">iMac</div>

                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-start timeline-box">iPod</div>
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>

                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>
                                    <div className="timeline-end timeline-box">iPhone</div>

                                    <hr />
                                </li>
                                <li>
                                    <hr />
                                    <div className="timeline-start timeline-box">Apple Watch</div>
                                    <div className="timeline-middle">
                                        <div className="bg-base-200 grid place-items-center rounded-full p-1">
                                            <span className="iconify lucide--check size-3.5" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimelinePage;
