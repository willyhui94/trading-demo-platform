import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { faker } from "@faker-js/faker";

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = [
  "Financials",
  "Information Technology",
  "Healthcare",
  "Manufacturing",
  "Agriculture",
];

const amounts = labels.map(() => faker.number.int({ min: 0, max: 100 }));
const total = amounts.reduce((acc, label) => acc + label) as number;
const percentage = amounts.map((amounts) => amounts / total);

const data = {
  labels: [
    "Financials",
    "Information Technology",
    "Healthcare",
    "Manufacturing",
    "Agriculture",
  ],
  datasets: [
    {
      label: "Precentage: ",
      data: percentage,
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
      borderWidth: 1,
    },
  ],
};
export const TopFiveIndustryPieChart = () => {
  return (
    <Box
      sx={{ border: 1, borderRadius: 2 }}
      padding={4}
      marginRight={4}
      marginBottom={4}
    >
      <Typography variant="h5" gutterBottom>
        Top 5 Industry Invested
      </Typography>
      <Pie data={data} height={"600px"} width={"600px"} />
    </Box>
  );
};
