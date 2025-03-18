import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";

import { IrregularTimeSeriesAreaChart } from "./IrregularTimeSeriesAreaChart";
import { NegativeValueAreaChart } from "./NegativeValueAreaChart";
import { SelectionAreaChart } from "./SelectionAreaChart";
import { SplineAreaChart } from "./SplineAreaChart";

export const metadata: Metadata = {
    title: "Apex Area Charts",
};

const ChartPage = () => {
    return (
        <>
            <PageTitle title="Area Charts" items={[{ label: "Apex Charts" }, { label: "Area", active: true }]} />

            <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Spline Area</div>
                        <SplineAreaChart />
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Negative Value Area</div>
                        <NegativeValueAreaChart />
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Irregular Time Series Area</div>
                        <IrregularTimeSeriesAreaChart />
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Selection Area</div>
                        <SelectionAreaChart />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChartPage;
