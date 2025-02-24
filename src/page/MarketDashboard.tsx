import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LatestUpdateCard } from "../components/LatestUpdateCard";
import TradingViewWidget from "../components/TradingViewWidget";
import Button from "@mui/material/Button";
import { socket } from "../util/socket";

const stocks = [
  { value: "APPL", label: "Apple Inc (AAPL)" },
  { value: "GOOGLE", label: "Alphabet Inc Class C (GOOGLE)" },
  { value: "MSFT", label: "Microsoft Corp (MSFT)" },
  { value: "AMZN", label: "Amazon.com Inc (AMZN)" },
  { value: "META", label: "Meta Platforms Inc (META)" },
];

export type StockPriceFeed = {
  AAPL: number;
  GOOGLE: number;
  MSFT: number;
  AMZN: number;
  META: number;
};

export const MarketDashboard = () => {
  const [stockPriceFeed, setStockPriceFeed] = useState<StockPriceFeed>({
    AAPL: 0,
    GOOGLE: 0,
    MSFT: 0,
    AMZN: 0,
    META: 0,
  });

  useEffect(() => {
    socket.on("test", (message) => {
      console.log(message);
    });

    socket.on("stock-feed", (message) => {
      // console.log(message);
      setStockPriceFeed(message);
    });
  }, []);

  // const handleTest = () => {
  //   console.log("handleTest");

  //   socket.emit("stock-feed-request", "1111", (message) => {
  //     console.log(message);
  //   });
  // };

  return (
    <>
      {/* <Box padding={4}>
        <Button onClick={handleTest}>test</Button>
      </Box> */}
      <Box padding={4}>
        <Typography variant="h5" gutterBottom>
          Custom Stock Price Feed
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <LatestUpdateCard
            header={"AAPL"}
            content={"$" + stockPriceFeed.AAPL.toFixed(2)}
            footer={`Raised by ${(stockPriceFeed.AAPL / 500).toFixed(4)} %`}
          />
          <LatestUpdateCard
            header={"GOOGLE"}
            content={"$" + stockPriceFeed.GOOGLE.toFixed(2)}
            footer={`Raised by ${(stockPriceFeed.GOOGLE / 500).toFixed(4)} %`}
          />
          <LatestUpdateCard
            header={"MSFT"}
            content={"$" + stockPriceFeed.MSFT.toFixed(2)}
            footer={`Raised by ${(stockPriceFeed.MSFT / 500).toFixed(4)} %`}
          />
          <LatestUpdateCard
            header={"AMZN"}
            content={"$" + stockPriceFeed.AMZN.toFixed(2)}
            footer={`Raised by ${(stockPriceFeed.AMZN / 500).toFixed(4)} %`}
          />
          <LatestUpdateCard
            header={"META"}
            content={"$" + stockPriceFeed.META.toFixed(2)}
            footer={`Raised by ${(stockPriceFeed.META / 500).toFixed(4)} %`}
          />
        </Box>
      </Box>
      <Box paddingX={4}>
        <Typography variant="h5" gutterBottom>
          Stock Market Search
        </Typography>
        <Box height={"600px"}>
          <TradingViewWidget />
        </Box>
      </Box>
    </>
  );
};
