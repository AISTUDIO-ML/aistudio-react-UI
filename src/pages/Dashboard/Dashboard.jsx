import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPieChart,
  faAtom,
  faMapPin,
  faBell,
  faPerson,
  faPuzzlePiece,
  faBars,
  faEarth,
  faRocket,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { MainHeader } from "../../components";
import logo from "../../components/assets/images/logo.png";

import "./Dashboard.scss";
import { color } from "@chakra-ui/react";

const Dashboard = () => {
  const [menuBarVisible, setMenuBarVisible] = useState(false);

  const menubar_items = [
    {
      title: "dashboard",
      icon: faPieChart,
    },
    {
      title: "icons",
      icon: faAtom,
    },
    {
      title: "map",
      icon: faMapPin,
    },
    {
      title: "notifications",
      icon: faBell,
    },
    {
      title: "user profile",
      icon: faPerson,
    },
    {
      title: "table list",
      icon: faPuzzlePiece,
    },
    {
      title: "typography",
      icon: faBars,
    },
    {
      title: "rtl support",
      icon: faEarth,
    },
    {
      title: "upgrade to pro",
      icon: faRocket,
    },
  ];

  return (
    <motion.div className="app__dashboard-container">
      <MainHeader />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <FontAwesomeIcon
          id="toggleMenu-Btn"
          icon={menuBarVisible ? faTimes : faBars}
          onClick={() => setMenuBarVisible(!menuBarVisible)}
          style={{ color: menuBarVisible ? "white" : "black" }}
        />
        <h4
          style={{
            position: "relative",
            left: "40px",
            top: "32px",
            display: menuBarVisible ? "none" : "block",
          }}
        >
          DASHBOARD
        </h4>
      </div>
      <AnimatePresence>
        <motion.div
          className="app__dashboard-menu-container"
          style={{ display: menuBarVisible ? "block" : "none" }}
          whileInView={{ opacity: [0, 1], scaleX: [0.5, 1] }}
          exit={{ opacity: 0 }}
        >
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>

          <hr color="white" />

          {menubar_items.map((item, index) => (
            <div className="app__dashboard-item-container">
              <a href={`#${item.title}`}>
                <FontAwesomeIcon icon={item.icon} />
                <p> {item.title} </p>
              </a>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Dashboard;
