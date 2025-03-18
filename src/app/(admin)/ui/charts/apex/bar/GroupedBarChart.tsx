"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

import { LoadingEffect } from "@/components/LoadingEffect";

const ApexCharts = dynamic(() => import("react-apexcharts"), {
    ssr: false,
    loading: () => <LoadingEffect height={chartOptions.chart?.height} />,
});

const chartOptions: ApexOptions = {
    xaxis: {
        categories: ["Atlas", "Phoenix", "Zenith", "Forge"],
        title: {
            text: "Expense Breakdown",
            style: { fontWeight: "500" },
        },
        labels: {
            formatter: (value) => value + "K",
        },
    },
    grid: {
        show: false,
    },
    stroke: {
        show: true,
        width: 1,
        colors: ["var(--color-base-100)"],
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: (value) => value + "K",
        },
    },
    chart: {
        type: "bar",
        height: 380,
        toolbar: {
            show: true,
        },
        background: "transparent",
    },
    colors: ["#167bff", "#FDA403", "#FB6D48", "#8E7AB5"],
    fill: {
        type: "solid",
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: 14,
        },
    },
    series: [
        {
            name: "Labor",
            data: [122, 215, 180, 210],
        },
        {
            name: "Material",
            data: [158, 169, 143, 133],
        },
        {
            name: "Marketing",
            data: [146, 98, 123, 111],
        },
        {
            name: "Travel",
            data: [59, 42, 71, 28],
        },
    ],
};

export const GroupedBarChart = () => {
    return (
        <ApexCharts
            options={chartOptions}
            type={chartOptions.chart?.type}
            height={chartOptions.chart?.height}
            series={chartOptions.series}
        />
    );
};
