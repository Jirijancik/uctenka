"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

import { LoadingEffect } from "@/components/LoadingEffect";

const ApexCharts = dynamic(() => import("react-apexcharts"), {
    ssr: false,
    loading: () => <LoadingEffect height={chartOptions.chart?.height} />,
});

const xAxisLabel = ["Aug", "Sep", "Oct", "Nov", "Dec"];
const yAxisUsers = [
    [3, 5],
    [2, 6],
    [4, 6],
    [3, 7],
    [2, 7],
];
const yAxisPremiumSubscriber = [
    [2, 3],
    [2, 4],
    [2, 4],
    [1, 5],
    [1, 3],
];

const chartOptions: ApexOptions = {
    xaxis: {
        title: {
            text: "Customer Churn Rate (%)",
            style: { fontWeight: "500" },
        },
    },
    yaxis: {
        min: 0,
    },
    tooltip: {
        y: {
            formatter: (val) => val + "%",
        },
    },
    legend: {
        position: "top",
    },
    grid: {
        show: false,
    },
    stroke: {
        show: true,
        width: 1,
        colors: ["var(--color-base-100)"],
    },
    chart: {
        height: 380,
        toolbar: {
            show: true,
        },
        type: "rangeBar",
        background: "transparent",
    },
    colors: ["#167bff", "#FDA403"],
    fill: {
        type: "solid",
    },
    plotOptions: {
        bar: {
            columnWidth: 40,
        },
    },
    dataLabels: {
        enabled: true,
        formatter: (val, opts) => {
            const dataValue = opts.w.config.series[opts.seriesIndex].data[opts.dataPointIndex].y;
            return dataValue[1] - dataValue[0] + "%";
        },
    },
    series: [
        {
            name: "User",
            data: xAxisLabel.map((label, index) => ({
                x: label,
                y: yAxisUsers[index],
            })),
        },
        {
            name: "Premium Subscriber",
            data: xAxisLabel.map((label, index) => ({
                x: label,
                y: yAxisPremiumSubscriber[index],
            })),
        },
    ],
};

export const RangeColumnChart = () => {
    return (
        <ApexCharts
            options={chartOptions}
            type={chartOptions.chart?.type}
            height={chartOptions.chart?.height}
            series={chartOptions.series}
        />
    );
};
