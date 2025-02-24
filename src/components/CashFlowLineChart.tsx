import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
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
};

const labels = [
  "01 Feb",
  "02 Feb",
  "03 Feb",
  "04 Feb",
  "05 Feb",
  "06 Feb",
  "07 Feb",
];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.number.int({ min: 40000, max: 100000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const CashFlowLineChart = () => {
  return (
    <Box
      sx={{ border: 1, borderRadius: 2 }}
      padding={4}
      marginRight={4}
      marginBottom={4}
    >
      <Typography variant="h5" gutterBottom>
        Cash Flow
      </Typography>
      <Line options={options} data={data} height={"400px"} width={"800px"} />
    </Box>
  );
};
