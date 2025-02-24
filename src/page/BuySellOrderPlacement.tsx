import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import OrderService from "../api/OrderService";

export const BuySellOrderPlacement = () => {
  const [stockCode, setStockCode] = useState<string>("");
  const [orderType, setOrderType] = useState<string>("");
  const [orderCategory, setOrderCategory] = useState<string>("");
  const [price, setPrice] = useState<number>(0.0);
  const [quantity, setQuantity] = useState<number>(0);
  const [expiredAt, setExpiredAt] = useState<Dayjs | null>(dayjs());

  const orderTypeOptions = [
    { value: "MARKET_ORDER", label: "MARKET_ORDER" },
    { value: "LIMIT_ORDER", label: "LIMIT_ORDER" },
  ];

  const orderCategoryOptions = [
    { value: "BUY", label: "BUY" },
    { value: "SELL", label: "SELL" },
  ];

  const stocks = [
    { value: "APPL", label: "Apple Inc (AAPL)" },
    { value: "GOOGLE", label: "Alphabet Inc Class C (GOOGLE)" },
    { value: "MSFT", label: "Microsoft Corp (MSFT)" },
    { value: "AMZN", label: "Amazon.com Inc (AMZN)" },
    { value: "META", label: "Meta Platforms Inc (META)" },
  ];

  const handlePlaceOrder = () => {
    console.log(stockCode);
    console.log(orderType);
    console.log(price);
    console.log(quantity);
    console.log(expiredAt?.format("YYYY-MM-D"));
    OrderService.placeOrder({
      stockCode,
      stockName: stocks.filter((stock) => stock.value === stockCode)[0].label,
      orderType,
      orderCategory,
      price,
      quantity,
      expiredAt,
    }).then((response) => {
      console.log(response);
      setStockCode("");
      setOrderType("");
      setOrderCategory("");
      setPrice(0);
      setQuantity(0);
      setExpiredAt(dayjs());
    });
  };

  return (
    <>
      <Box padding={4}>
        <Typography variant="h5" gutterBottom>
          Buy / Sell Order
        </Typography>
        <Box padding={4}>
          <Typography variant="body1">Stock Code</Typography>
          <TextField
            sx={{ width: "300px" }}
            select
            size="small"
            value={stockCode}
            onChange={(e) => setStockCode(e.target.value)}
          >
            {stocks.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Typography variant="body1">Order Type</Typography>
          <TextField
            sx={{ width: "300px" }}
            select
            size="small"
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
          >
            {orderTypeOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Typography variant="body1">Order Category</Typography>
          <TextField
            sx={{ width: "300px" }}
            select
            size="small"
            value={orderCategory}
            onChange={(e) => setOrderCategory(e.target.value)}
          >
            {orderCategoryOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Typography variant="body1">Price</Typography>
          <TextField
            sx={{ width: "300px" }}
            size="small"
            type="number"
            value={price}
            inputProps={{
              step: 0.01,
            }}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
          <Typography variant="body1">Quantity</Typography>
          <TextField
            sx={{ width: "300px" }}
            size="small"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <Typography variant="body1">Expired Date</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ width: "300px" }}
              value={expiredAt}
              onChange={(newValue) => setExpiredAt(newValue)}
            />
          </LocalizationProvider>

          <Box paddingY={4}>
            <Button
              sx={{ width: "300px" }}
              variant="contained"
              onClick={handlePlaceOrder}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
