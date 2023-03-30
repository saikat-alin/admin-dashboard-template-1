import React from "react";
import "./navbar.scss";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { handleDrawer } from "../../reducer/NavSidebarSlice";
import { Button, Menu, MenuItem } from "@mui/material";
import { Stack } from "@mui/system";
import { FaUserCircle } from "react-icons/fa";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Navbar() {
  const open = useSelector((state) => state.NavSidebar.open);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.removeItem("UserId");
    localStorage.removeItem("Role");
    window.location = "/";
  };

  return (
    <>
      <AppBar position="fixed" open={open} className="appbar">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={() => {
              dispatch(handleDrawer());
            }}
            edge="start"
            sx={{ mr: 3, color: "white" }}
          >
            <MenuIcon />
          </IconButton>

          {/* <img
            src={`${process.env.PUBLIC_URL}/assets/ati-logo.png`}
            alt={"Logo"}
            style={{
              height: "35px",
              width: "auto",
              ...(open && { display: "none" }),
            }}
          /> */}

          <h3 style={{ width: "100%", ...(open && { display: "none" }) }}>
            Template 1
          </h3>

          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
            width="100%"
          >
            <div>
              <Button
                aria-controls={menuOpen ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={menuOpen ? "true" : undefined}
                onClick={handleClick}
                sx={{ color: "white", fontSize: "1.75rem" }}
              >
                {<FaUserCircle />}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{ padding: "10px !important" }}
                className="profile-menu"
              >
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
