import { MetaData } from "@/components/MetaData";
import { PageTitle } from "@/components/PageTitle";

import { GroupedBarChart } from "./GroupedBarChart";
import { MarkerWithBarChart } from "./MarkerWithBarChart";
import { NegativeValueBarChart } from "./NegativeValueBarChart";
import { StackedBarChart } from "./StackedBarChart";

const ChartPage = () => {
    return (
        <>
            <MetaData title="Apex Bar Charts" />
            <PageTitle title="Bar Charts" items={[{ label: "Apex Charts" }, { label: "Bar", active: true }]} />
            <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Bar With Markers</div>
                        <MarkerWithBarChart />
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Grouped Bar</div>
                        <GroupedBarChart />
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Stacked Bar</div>
                        <StackedBarChart />
                    </div>
                </div>
                <div className="card card-border bg-base-100">
                    <div className="card-body gap-3 pb-0">
                        <div className="card-title">Negative Value</div>
                        <NegativeValueBarChart />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChartPage;
