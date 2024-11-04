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
import { Link } from "react-scroll";
const NavigationBar = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <img
            src={LOGO}
            style={{
              scale: useIsMobile() ? ".6" : "1",
              height: "100%",
              width: useIsMobile() ? "100%" : "70%",
              // border: "1px solid black",
            }}
          ></img>
        </div>
        <div className={styles.linkContainer}>
          {!useIsMobile() && (
            <>
              <Link to="Home">
                <span>Home</span>
              </Link>
              <Link to="Services">
                <span>Services</span>
              </Link>
              <Link to="Portfolio">
                <span>Portfolio</span>
              </Link>
              <Link to="Onboarding">
                <span>Onboarding</span>
              </Link>
              <Link to="Contact">
                <span>Contact Us</span>
              </Link>
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
            {useIsMobile() ? "" : "Get Us On Wapp"}
          </span>
        </div>
        <div className={styles.contactInfo}>
          <span className={styles.contactSpan}>
            <SVG
              src={phoneSvg}
              style={{
                height: "20px",
                width: "20px",
              }}
            ></SVG>
            {phoneNumber}
          </span>
          <span className={styles.contactSpan}>
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
