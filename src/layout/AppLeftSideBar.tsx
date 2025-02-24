import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PixIcon from "@mui/icons-material/Pix";
import HistoryIcon from "@mui/icons-material/History";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import InsightsIcon from "@mui/icons-material/Insights";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink, useLocation } from "react-router";

const NAVIGATIONS = [
  {
    title: "Market",
    icon: <ShowChartIcon />,
    path: "/market",
  },
  // {
  //   title: "Portfolio",
  //   icon: <PixIcon />,
  //   path: "/portfolio",
  // },
  {
    title: "Buy / Sell",
    icon: <CurrencyExchangeIcon />,
    path: "/order",
  },
  {
    title: "Order History",
    icon: <HistoryIcon />,
    path: "/order-history",
  },
  {
    title: "Risk Analytics",
    icon: <InsightsIcon />,
    path: "/analytics",
  },
];

export const AppLeftSideBar = () => {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List>
        {NAVIGATIONS.map((navigation, index) => (
          <NavLink to={navigation.path} key={navigation.title + index}>
            <ListItem disablePadding>
              <ListItemButton selected={navigation.path == location.pathname}>
                <ListItemIcon>{navigation.icon}</ListItemIcon>
                <ListItemText primary={navigation.title} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
};
