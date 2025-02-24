import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { signin, signout } from "../redux/authUserSlice";

export const AppTopBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const authUser = useAppSelector((state) => state.authUser);
  const dispatch = useAppDispatch();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    dispatch(
      signin({
        id: "1",
        name: "robin",
        permissions: ["analyze"],
        roles: ["admin"],
      })
    );
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(signout());
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Trading Dashboard
        </Typography>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            {authUser.id === "" ? (
              <MenuItem onClick={handleLogin}>
                <Typography>Login</Typography>
                <LoginIcon sx={{ flexGrow: 1 }} />
              </MenuItem>
            ) : (
              <MenuItem onClick={handleLogout}>
                <Typography>Logout</Typography>
                <LogoutIcon sx={{ flexGrow: 1 }} />
              </MenuItem>
            )}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};
