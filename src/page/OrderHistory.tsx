import { useState, useEffect } from "react";
import { red, green, grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import OrderService from "../api/OrderService";

export type Order = {
  id: string;
  stockCode: string;
  stockName: string;
  orderType: string;
  orderCategory: string;
  price: number;
  quantity: number;
  status: string;
  orderedAt: string;
  executedAt: string;
  expiredAt: string;
};

export const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);
  const [open, setOpen] = useState(false);
  const [toBeCancelOrder, setToBeCancelOrder] = useState<Order | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setToBeCancelOrder(null);
    setOpen(false);
  };

  useEffect(() => {
    OrderService.getAllOrders().then((response) => {
      console.log(response);
      setOrderHistory(response.data);
    });
  }, []);

  const handleConfirmCancelOrder = (orderId: string) => {
    OrderService.cancelOrder(orderId)
      .then((response) => {
        console.log(response);
        setToBeCancelOrder(null);
        setOpen(false);
      })
      .then(() => {
        OrderService.getAllOrders().then((response) => {
          console.log(response);
          setOrderHistory(response.data);
        });
      });
  };

  return (
    <>
      <>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Please confirm to cancel the order for
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography>
                <b>Stock Code:</b> {toBeCancelOrder?.stockCode}
              </Typography>
              <Typography>
                <b>Stock Name:</b> {toBeCancelOrder?.stockName}
              </Typography>
              <Typography>
                <b>Order Type:</b> {toBeCancelOrder?.orderType}
              </Typography>
              <Typography>
                <b>Order Category:</b> {toBeCancelOrder?.orderCategory}
              </Typography>
              <Typography>
                <b>Price:</b> ${toBeCancelOrder?.price}
              </Typography>
              <Typography>
                <b>Quantity:</b> {toBeCancelOrder?.quantity}
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Go Back</Button>
            <Button
              onClick={() => handleConfirmCancelOrder(toBeCancelOrder.id)}
              autoFocus
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </>

      <Box padding={4}>
        <Typography variant="h5" gutterBottom>
          Order History
        </Typography>
        {/* <Box sx={{ bgcolor: blue[50] }} padding={4}> */}
        <TableContainer component={Paper} sx={{ maxHeight: 800 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {/* <TableCell sx={{ fontWeight: "bolder" }}>Order ID</TableCell> */}
                <TableCell sx={{ fontWeight: "bolder" }}>Date</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>Stock Code</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>Stock Name</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>Price</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>Quantity</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>Buy/Sell</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>Order Type</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>status</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>Executed At</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>Expired At</TableCell>
                <TableCell sx={{ fontWeight: "bolder" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderHistory.map((order) => {
                const textColor =
                  order.status === "CANCELED"
                    ? grey[600]
                    : order.orderCategory === "SELL"
                      ? red[600]
                      : green[600];
                return (
                  <TableRow
                    key={order.id}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                    // style={{
                    //   backgroundColor:
                    //     order.orderCategory === "SELL" ? red[50] : green[50],
                    // }}
                  >
                    <TableCell
                      style={{
                        color: textColor,
                      }}
                    >
                      {order.orderedAt}
                    </TableCell>
                    <TableCell
                      style={{
                        color: textColor,
                      }}
                    >
                      {order.stockCode}
                    </TableCell>
                    <TableCell
                      style={{
                        color: textColor,
                      }}
                    >
                      {order.stockName}
                    </TableCell>
                    <TableCell
                      style={{
                        color: textColor,
                      }}
                    >
                      $ {order.price.toFixed(2)}
                    </TableCell>
                    <TableCell
                      style={{
                        color: textColor,
                      }}
                    >
                      {order.quantity}
                    </TableCell>
                    <TableCell
                      style={{
                        color: textColor,
                      }}
                    >
                      {order.orderCategory}
                    </TableCell>
                    <TableCell
                      style={{
                        color: textColor,
                      }}
                    >
                      {order.orderType}
                    </TableCell>
                    <TableCell
                      style={{
                        color: textColor,
                      }}
                    >
                      {order.status}
                    </TableCell>
                    <TableCell
                      style={{
                        color: textColor,
                      }}
                    >
                      {order.executedAt}
                    </TableCell>
                    <TableCell
                      style={{
                        color: textColor,
                      }}
                    >
                      {order.expiredAt}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bolder" }}>
                      <Button
                        variant="outlined"
                        startIcon={<CancelIcon />}
                        disabled={order.status !== "PENDING"}
                        onClick={() => {
                          setToBeCancelOrder(order);
                          handleClickOpen();
                        }}
                      >
                        Cancel Order
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {/* </Box> */}
      </Box>
    </>
  );
};
