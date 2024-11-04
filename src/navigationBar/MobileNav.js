import React from "react";
import styles from "./MobileNav.module.css";
import { bottomNavForMobile } from "../constant/examplePayload";
import { Link } from "react-scroll";

import SVG from "react-inlinesvg";
const MobileNav = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.content}>
        {bottomNavForMobile.map((item, key) => {
          return (
            <Link to={item.title} smooth={true} offset={-70} duration={500}>
              <span
                key={key}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <SVG
                  src={item.icon}
                  style={{
                    height: "20px",
                    width: "20px",
                  }}
                ></SVG>
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
