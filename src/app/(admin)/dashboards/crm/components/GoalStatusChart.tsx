"use client";

import type { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

import { LoadingEffect } from "@/components/LoadingEffect";

const ApexCharts = dynamic(() => import("react-apexcharts"), {
    ssr: false,
    loading: () => <LoadingEffect height={129} />,
});

const chartOptions: ApexOptions = {
    series: [76],
    chart: {
        height: 258,
        type: "radialBar",
        offsetY: -20,
        background: "transparent",
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        lineCap: "round",
    },
    colors: ["#167bff"],
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "var(--color-base-200)",
                strokeWidth: "75%",
                margin: 8,
                dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    color: "#999",
                    opacity: 1,
                    blur: 4,
                },
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    offsetY: -2,
                    fontSize: "22px",
                },
            },
        },
    },
    grid: {
        padding: {
            top: -10,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
        },
    },
    labels: ["Average Results"],
};

export const GoalStatusChart = () => {
    return (
        <ApexCharts
            options={chartOptions}
            height={chartOptions.chart?.height}
            type="radialBar"
            series={chartOptions.series}></ApexCharts>
    );
};
