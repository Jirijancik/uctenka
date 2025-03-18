import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import { AnnotationLineChart } from "./AnnotationLineChart";
import { LabelLineChart } from "./LabelLineChart";
import { StepLineChart } from "./StepLineChart";
import { SyncingLineChart } from "./SyncingLineChart";

export const metadata: Metadata = {
    title: "Apex Line Charts",
};

const ChartPage = () => {
    return (
        <>
            <PageTitle title="Line Charts" items={[{ label: "Apex Charts" }, { label: "Line", active: true }]} />
            <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Label Line</div>
                        <LabelLineChart />
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Step Line</div>
                        <StepLineChart />
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Syncing Line</div>
                        <SyncingLineChart />
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Annotation Line</div>
                        <AnnotationLineChart />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChartPage;
