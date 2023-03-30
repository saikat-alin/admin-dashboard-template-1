import React, { useState } from "react";
import "./sidebar.scss";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { useSelector } from "react-redux";
import { RiDashboardLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { GoPrimitiveDot } from "react-icons/go";
import { ListItem } from "@mui/material";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import BadgeIcon from "@mui/icons-material/Badge";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ApartmentIcon from "@mui/icons-material/Apartment";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar() {
  const open = useSelector((state) => state.NavSidebar.open);

  const [dropFirst, setDropFirst] = useState(
    JSON.parse(sessionStorage.getItem("clicked")) || false
  );
  const [dropSecond, setDropSecond] = useState(
    JSON.parse(sessionStorage.getItem("clicked1")) || false
  );
  const [dropThird, setDropThird] = useState(
    JSON.parse(sessionStorage.getItem("clicked2")) || false
  );
  const [dropFourth, setDropFourth] = useState(
    JSON.parse(sessionStorage.getItem("clicked3")) || false
  );
  const [dropFifth, setDropFifth] = useState(
    JSON.parse(sessionStorage.getItem("clicked4")) || false
  );
  const [dropSixth, setDropSixth] = useState(
    JSON.parse(sessionStorage.getItem("clicked5")) || false
  );

  const handleFirst = () => {
    if (!dropFirst) {
      sessionStorage.setItem("clicked", JSON.stringify(true));
      sessionStorage.setItem("clicked1", JSON.stringify(false));
      sessionStorage.setItem("clicked2", JSON.stringify(false));
      sessionStorage.setItem("clicked3", JSON.stringify(false));
      sessionStorage.setItem("clicked4", JSON.stringify(false));
      sessionStorage.setItem("clicked5", JSON.stringify(false));
      setDropFirst(true);
      setDropSecond(false);
      setDropThird(false);
      setDropFourth(false);
      setDropFifth(false);
      setDropSixth(false);
    } else {
      setDropFirst(false);
      sessionStorage.setItem("clicked", JSON.stringify(false));
    }
  };
  const handleSecond = () => {
    if (!dropSecond) {
      sessionStorage.setItem("clicked1", JSON.stringify(true));
      sessionStorage.setItem("clicked", JSON.stringify(false));
      sessionStorage.setItem("clicked2", JSON.stringify(false));
      sessionStorage.setItem("clicked3", JSON.stringify(false));
      sessionStorage.setItem("clicked4", JSON.stringify(false));
      sessionStorage.setItem("clicked5", JSON.stringify(false));
      setDropSecond(true);
      setDropFirst(false);
      setDropThird(false);
      setDropFourth(false);
      setDropFifth(false);
      setDropSixth(false);
    } else {
      setDropSecond(false);
      sessionStorage.setItem("clicked1", JSON.stringify(false));
    }
  };
  const handleThird = () => {
    if (!dropThird) {
      sessionStorage.setItem("clicked2", JSON.stringify(true));
      sessionStorage.setItem("clicked", JSON.stringify(false));
      sessionStorage.setItem("clicked1", JSON.stringify(false));
      sessionStorage.setItem("clicked3", JSON.stringify(false));
      sessionStorage.setItem("clicked4", JSON.stringify(false));
      sessionStorage.setItem("clicked5", JSON.stringify(false));
      setDropThird(true);
      setDropFirst(false);
      setDropSecond(false);
      setDropFourth(false);
      setDropFifth(false);
      setDropSixth(false);
    } else {
      setDropThird(false);
      sessionStorage.setItem("clicked2", JSON.stringify(false));
    }
  };
  const handleFourth = () => {
    if (!dropFourth) {
      sessionStorage.setItem("clicked3", JSON.stringify(true));
      sessionStorage.setItem("clicked", JSON.stringify(false));
      sessionStorage.setItem("clicked1", JSON.stringify(false));
      sessionStorage.setItem("clicked2", JSON.stringify(false));
      sessionStorage.setItem("clicked4", JSON.stringify(false));
      sessionStorage.setItem("clicked5", JSON.stringify(false));
      setDropFourth(true);
      setDropFirst(false);
      setDropSecond(false);
      setDropThird(false);
      setDropFifth(false);
      setDropSixth(false);
    } else {
      setDropFourth(false);
      sessionStorage.setItem("clicked3", JSON.stringify(false));
    }
  };
  const handleFifth = () => {
    if (!dropFifth) {
      sessionStorage.setItem("clicked4", JSON.stringify(true));
      sessionStorage.setItem("clicked", JSON.stringify(false));
      sessionStorage.setItem("clicked1", JSON.stringify(false));
      sessionStorage.setItem("clicked2", JSON.stringify(false));
      sessionStorage.setItem("clicked3", JSON.stringify(false));
      sessionStorage.setItem("clicked5", JSON.stringify(false));
      setDropFifth(true);
      setDropFirst(false);
      setDropSecond(false);
      setDropThird(false);
      setDropFourth(false);
      setDropSixth(false);
    } else {
      setDropFifth(false);
      sessionStorage.setItem("clicked4", JSON.stringify(false));
    }
  };
  const handleSixth = () => {
    if (!dropSixth) {
      sessionStorage.setItem("clicked5", JSON.stringify(true));
      sessionStorage.setItem("clicked", JSON.stringify(false));
      sessionStorage.setItem("clicked1", JSON.stringify(false));
      sessionStorage.setItem("clicked2", JSON.stringify(false));
      sessionStorage.setItem("clicked3", JSON.stringify(false));
      sessionStorage.setItem("clicked4", JSON.stringify(false));
      setDropSixth(true);
      setDropFirst(false);
      setDropSecond(false);
      setDropThird(false);
      setDropFourth(false);
      setDropFifth(false);
    } else {
      setDropSixth(false);
      sessionStorage.setItem("clicked5", JSON.stringify(false));
    }
  };

  const generalUser = localStorage.getItem("Role") === "generaluser";

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
      className="sidebar"
    >
      <DrawerHeader
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <img
          src={`${process.env.PUBLIC_URL}/assets/ati-logo.png`}
          alt={"Logo"}
          style={{
            height: "35px",
            width: "auto",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        /> */}
        <h3 style={{ color:"white" }}>
         Template 1
        </h3>

      </DrawerHeader>
      <List className="sidebar-list-container">
        <NavLink to="/">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <RiDashboardLine className="icon" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        <ListItemButton className="nested-list" onClick={handleFirst}>
          <ListItemIcon>
            <VaccinesIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary="Request" />
          {dropFirst ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={dropFirst} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            className="sidebar-list-container"
          >
            <NavLink to="/medicine-request">
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <GoPrimitiveDot className="drop-icon" />
                  </ListItemIcon>
                  <ListItemText primary="Request list" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        </Collapse>

        <ListItemButton className="nested-list" onClick={handleFifth}>
          <ListItemIcon>
            <FactCheckIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary="Receive" />
          {dropFifth ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={dropFifth} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            className="sidebar-list-container"
          >
            <NavLink to="/receive">
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <GoPrimitiveDot className="drop-icon" />
                  </ListItemIcon>
                  <ListItemText primary="Receive" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        </Collapse>

        {generalUser ? (
          ""
        ) : (
          <ListItemButton className="nested-list" onClick={handleThird}>
            <ListItemIcon>
              <BadgeIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="Employee" />
            {dropThird ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        )}
        <Collapse in={dropThird} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            className="sidebar-list-container"
          >
            <NavLink to="/teachers-list">
              <ListItem>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <GoPrimitiveDot className="drop-icon" />
                  </ListItemIcon>
                  <ListItemText primary="Teachers List" />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="/adnimistrative-staff">
              <ListItem>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <GoPrimitiveDot className="drop-icon" />
                  </ListItemIcon>
                  <ListItemText primary="Administrative Staff" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        </Collapse>

        <ListItemButton className="nested-list" onClick={handleFourth}>
          <ListItemIcon>
            <HowToRegIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary="Order" />
          {dropFourth ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={dropFourth} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            className="sidebar-list-container"
          >
            <NavLink to="/order-list">
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <GoPrimitiveDot className="drop-icon" />
                  </ListItemIcon>
                  <ListItemText primary="Order List" />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to="/approve-list">
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <GoPrimitiveDot className="drop-icon" />
                  </ListItemIcon>
                  <ListItemText primary="Approve List" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        </Collapse>

        <ListItemButton className="nested-list" onClick={handleSixth}>
          <ListItemIcon>
            <ApartmentIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary="HO" />
          {dropSixth ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={dropSixth} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            className="sidebar-list-container"
          >
            <NavLink to="/ho-request-list">
              <ListItem>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <GoPrimitiveDot className="drop-icon" />
                  </ListItemIcon>
                  <ListItemText primary="Request list" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        </Collapse>

        <ListItemButton className="nested-list" onClick={handleSecond}>
          <ListItemIcon>
            <ListAltIcon className="icon" />
          </ListItemIcon>
          <ListItemText primary="Distribution" />
          {dropSecond ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={dropSecond} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            className="sidebar-list-container"
          >
            <NavLink to="/receive-medicine">
              <ListItem>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <GoPrimitiveDot className="drop-icon" />
                  </ListItemIcon>
                  <ListItemText primary="Medicine Receive" />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="/distribution-list">
              <ListItem>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <GoPrimitiveDot className="drop-icon" />
                  </ListItemIcon>
                  <ListItemText primary="Distribution list" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
}
