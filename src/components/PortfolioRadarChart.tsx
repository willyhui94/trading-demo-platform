import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scale: {
    min: 0,
    max: 10,
  },
};

const labels = ["ROI", "Cost", "Volatility", "Liquidity", "Diversification"];

export const data = {
  labels: labels,
  datasets: [
    {
      label: "# of Votes",
      data: labels.map(() => faker.number.int({ min: 4, max: 9 })),
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
      fill: true,
    },
  ],
};

export const PortfolioRadarChart = () => {
  return (
    <Box
      sx={{ border: 1, borderRadius: 2 }}
      padding={4}
      marginRight={4}
      marginBottom={4}
    >
      <Typography variant="h5" gutterBottom>
        Overall Risk Performance
      </Typography>
      <Radar options={options} data={data} height={"400px"} width={"800px"} />
    </Box>
  );
};
