import { ApexOptions } from "apexcharts";
import ApexCharts from "react-apexcharts";

const chartOptions: ApexOptions = {
    chart: {
        height: 380,
        type: "pie",
        toolbar: {
            show: false,
        },
        background: "transparent",
    },
    stroke: {
        show: true,
        width: 1,
        colors: ["var(--color-base-100)"],
    },
    title: {
        text: "Website Traffic",
        style: { fontWeight: "500" },
        align: "right",
    },
    tooltip: {
        enabled: true,
        y: {
            formatter: (value) => value + " Visitors",
        },
    },
    labels: ["Search", "Direct", "Referral", "Social", "Webinars", "Advertisement"],
    colors: ["#167bff", "#FDA403", "#FB6D48", "#A25772", "#8E7AB5", "#FFA299"],
    series: [428, 180, 88, 209, 91, 52],
};

export const SimplePieChart = () => {
    return (
        <ApexCharts
            options={chartOptions}
            type={chartOptions.chart?.type}
            height={chartOptions.chart?.height}
            series={chartOptions.series}
        />
    );
};
