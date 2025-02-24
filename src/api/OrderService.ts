import axios from "axios";
import { Dayjs } from "dayjs";

export const getAllOrders = () => {
  return axios.get("http://localhost:8081/orders");
};

export const cancelOrder = (orderId: string) => {
  return axios.put(`http://localhost:8081/orders/${orderId}`);
};

export type AuthUser = {
  stockCode: string;
  stockName: string;
  orderType: string;
  orderCategory: string;
  price: number;
  quantity: number;
  expiredAt: Dayjs;
};

export const placeOrder = ({
  stockCode,
  stockName,
  orderType,
  orderCategory,
  price,
  quantity,
  expiredAt,
}: AuthUser) => {
  return axios.post(`http://localhost:8081/orders`, {
    stockCode,
    stockName,
    orderType,
    orderCategory,
    price,
    quantity,
    expiredAt: expiredAt.format("YYYY-MM-D"),
  });
};

export default {
  getAllOrders,
  cancelOrder,
  placeOrder,
};
