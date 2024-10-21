import React from "react";
import styles from "./NavigationBar.module.css";
import LOGO from "../res/Logo/Logo-white-text-removebg-preview.png";

import SVG from "react-inlinesvg";
import {
  email,
  mailSvg,
  phoneNumber,
  phoneSvg,
  wappSvg,
} from "../constant/examplePayload";
import useIsMobile from "../util/useIsMobile";
const NavigationBar = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.content}>
        <img src={LOGO} style={{ scale: ".9" }}></img>
        <div className={styles.linkContainer}>
          {!useIsMobile() && (
            <>
              <span>Home</span>
              <span>Services</span>
              <span>Portfolio</span>
              <span>Onboarding</span>
              <span>Contact Us</span>
            </>
          )}

          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <SVG
              src={wappSvg}
              style={{
                height: "20px",
                width: "20px",
              }}
            ></SVG>
            Get Us On Wapp
          </span>
        </div>
        <div className={styles.contactInfo}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              color: "white",
              fontSize: "0.8vw",
            }}
          >
            <SVG
              src={phoneSvg}
              style={{
                height: "20px",
                width: "20px",
              }}
            ></SVG>
            {phoneNumber}
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              color: "white",
              fontSize: "0.8vw",
            }}
          >
            <SVG
              src={mailSvg}
              style={{
                height: "20px",
                width: "20px",
              }}
            ></SVG>
            {email}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
