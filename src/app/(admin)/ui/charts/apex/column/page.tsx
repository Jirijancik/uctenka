import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import { DumbbellColumnChart } from "./DumbbellColumnChart";
import { NegativeValuesColumnChart } from "./NegativeValuesColumnChart";
import { RangeColumnChart } from "./RangeColumnChart";
import { StackedColumnChart } from "./StackedColumnChart";

export const metadata: Metadata = {
    title: "Apex Column Charts",
};

const ChartPage = () => {
    return (
        <>
            <PageTitle title="Column Charts" items={[{ label: "Apex Charts" }, { label: "Column", active: true }]} />
            <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Stacked Column</div>
                        <StackedColumnChart />
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Dumbbell Column</div>
                        <DumbbellColumnChart />
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Range Column</div>
                        <RangeColumnChart />
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Negative Values Column</div>
                        <NegativeValuesColumnChart />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChartPage;
