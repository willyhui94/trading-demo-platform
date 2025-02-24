import Box from "@mui/material/Box";
import { LatestUpdateCard } from "../components/LatestUpdateCard";
import Typography from "@mui/material/Typography";

import { TopFiveStockWinnerBarChart } from "../components/TopFiveStockWinnerBarChart";
import { TopFiveStockLoserBarChart } from "../components/TopFiveStockLoserBarChart";
import { TopFiveIndustryPieChart } from "../components/TopFiveIndustryPieChart";
import { CashFlowLineChart } from "../components/CashFlowLineChart";
import { PortfolioRadarChart } from "../components/PortfolioRadarChart";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { CategoryScale, LinearScale, BarElement, Title } from "chart.js";
// import { Pie } from "react-chartjs-2";
// import { Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
// const data = {
//   labels: [
//     "Financials",
//     "Information Technology",
//     "Healthcare",
//     "Manufacturing",
//     "Agriculture",
//   ],
//   datasets: [
//     {
//       label: "Precentage: ",
//       data: [50, 25, 10, 7, 6, 2],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// export const options = {
//   indexAxis: "y" as const,
//   elements: {
//     bar: {
//       borderWidth: 2,
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       display: false,
//     },
//     title: {
//       display: false,
//       text: "Chart.js Horizontal Bar Chart",
//     },
//     datasets: {
//       label: {
//         display: false,
//       },
//     },
//   },
// };

// const labels = [
//   "NVIDIA Corporation",
//   "Nu Holdings Ltd.",
//   "Palantir Technologies Inc.",
//   "NIO Inc.",
//   "Super Micro Computer",
// ];

// export const data1 = {
//   labels,
//   datasets: [
//     {
//       label: null,
//       data: [500, 400, 200, 100, 50],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//       ],
//     },
//   ],
// };

export const RiskManagement = () => {
  return (
    <Box padding={4}>
      <Box>
        <Typography variant="h5" gutterBottom>
          Risk Analytics Overview
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <LatestUpdateCard
            header={"Risk Status"}
            content={"Safe"}
            footer={"Safe / Moderate / Warning / Margin Call"}
          />
          <LatestUpdateCard
            header={"Net Assets"}
            content={"$ 100,000"}
            footer={"included cash and stock value"}
          />

          <LatestUpdateCard
            header={"Total Cash"}
            content={"$ 20,000"}
            footer={"included cash only"}
          />
          <LatestUpdateCard
            header={"Fund of Hold"}
            content={"$ 60,000"}
            footer={"hold for order execution"}
          />
          <LatestUpdateCard
            header={"Max Withdrawables"}
            content={"$ 50,000"}
            footer={"only included free cash balance"}
          />
          <LatestUpdateCard
            header={"Excess Liquidity"}
            content={"$ 60,000"}
            footer={"margin cushion"}
          />
          <LatestUpdateCard
            header={"Number of Pending Orders"}
            content={"200"}
            footer={"buy / sell order to be execute"}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <TopFiveStockWinnerBarChart />
        <TopFiveStockLoserBarChart />
        <TopFiveIndustryPieChart />
        <PortfolioRadarChart />
        <CashFlowLineChart />
      </Box>
    </Box>
  );
};
