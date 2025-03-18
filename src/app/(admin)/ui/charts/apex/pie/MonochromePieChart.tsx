"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

import { LoadingEffect } from "@/components/LoadingEffect";

const ApexCharts = dynamic(() => import("react-apexcharts"), {
    ssr: false,
    loading: () => <LoadingEffect height={chartOptions.chart?.height} />,
});

const chartOptions: ApexOptions = {
    chart: {
        type: "pie",
        height: 380,
        toolbar: {
            show: false,
        },
        background: "transparent",
    },
    theme: {
        monochrome: {
            enabled: true,
            color: "#167bff",
            shadeTo: "light",
            shadeIntensity: 0.8,
        },
    },
    stroke: {
        show: true,
        width: 1,
        colors: ["var(--color-base-100)"],
    },
    title: {
        text: "App Downloads",
        style: { fontWeight: "500" },
        align: "right",
    },
    tooltip: {
        enabled: true,
        y: {
            formatter: (value) => value + " Downloads",
        },
    },
    labels: ["Android", "iOS", "Windows", "MacOS", "Amazon FireOS"],
    series: [39243, 22187, 6947, 3375, 2688],
};

export const MonochromePieChart = () => {
    return (
        <ApexCharts
            options={chartOptions}
            type={chartOptions.chart?.type}
            height={chartOptions.chart?.height}
            series={chartOptions.series}
        />
    );
};
