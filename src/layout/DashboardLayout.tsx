import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { AppTopBar } from "./AppTopBar";
import { AppLeftSideBar } from "./AppLeftSideBar";
import Toolbar from "@mui/material/Toolbar";
import { Routes, Route } from "react-router";
import { ProtectedRoute } from "../util/Protection";
import { Home } from "../page/Home";
import { MarketDashboard } from "../page/MarketDashboard";
import { RiskManagement } from "../page/RiskManagement";
import { useAppSelector } from "../hooks/hooks";
import { OrderHistory } from "../page/OrderHistory";
import { grey } from "@mui/material/colors";
import { BuySellOrderPlacement } from "../page/BuySellOrderPlacement";

export const DashboardLayout = () => {
  const authUser = useAppSelector((state) => state.authUser);

  return (
    <Box sx={{ display: "flex", bgcolor: grey[50] }} height="100%">
      <CssBaseline />
      <AppTopBar />
      <AppLeftSideBar />
      <Box component="main" sx={{ flexGrow: 1 }} height="100%">
        <Toolbar />
        <Routes>
          <Route index element={<MarketDashboard />} />
          <Route element={<ProtectedRoute isAllowed={!!authUser.id} />}>
            <Route path="/market" element={<MarketDashboard />} />
            <Route path="/order" element={<BuySellOrderPlacement />} />
            <Route path="/portfolio" element={<Home />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/analytics" element={<RiskManagement />} />
          </Route>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Box>
    </Box>
  );
};
