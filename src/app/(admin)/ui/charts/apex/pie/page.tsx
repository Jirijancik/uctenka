import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import { GradientDonutChart } from "./GradientDonutChart";
import { MonochromePieChart } from "./MonochromePieChart";
import { PatternDonutChart } from "./PatternDonutChart";
import { SimplePieChart } from "./SimplePieChart";

export const metadata: Metadata = {
    title: "Apex Pie Charts",
};

const ChartPage = () => {
    return (
        <>
            <PageTitle title="Pie Charts" items={[{ label: "Apex Charts" }, { label: "Pie", active: true }]} />
            <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Simple Pie</div>
                        <SimplePieChart />
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Monochrome Pie</div>
                        <MonochromePieChart />
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Gradient Donut</div>
                        <GradientDonutChart />
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Pattern Donut</div>
                        <PatternDonutChart />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChartPage;
