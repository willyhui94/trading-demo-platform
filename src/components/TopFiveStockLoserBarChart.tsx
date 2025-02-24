import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import {} from "chart.js";
import { Bar } from "react-chartjs-2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Horizontal Bar Chart",
    },
    datasets: {
      label: {
        display: false,
      },
    },
  },
};

const labels = [
  "Globant S.A.",
  "Hims & Hers Health, Inc.",
  "Akamai Technologies, Inc.",
  "Glaukos Corporation",
  "CarGurus, Inc.",
];

export const data = {
  labels,
  datasets: [
    {
      label: "$",
      data: labels
        .map(() => faker.number.int({ min: 40000, max: 100000 }))
        .sort()
        .reverse(),
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
    },
  ],
};

export const TopFiveStockLoserBarChart = () => {
  return (
    <Box
      sx={{ border: 1, borderRadius: 2 }}
      padding={4}
      marginRight={4}
      marginBottom={4}
    >
      <Typography variant="h5" gutterBottom>
        Top 5 Losers
      </Typography>
      <Bar options={options} data={data} height={"400px"} width={"800px"} />
    </Box>
  );
};
