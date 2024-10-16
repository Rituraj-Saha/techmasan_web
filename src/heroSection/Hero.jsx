import React from "react";
import styles from "./Hero.module.css";
import { heroSection } from "../constant/examplePayload";
const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "60vh",
        border: "1px solid black",
      }}
    >
      <div
        className="left"
        style={{
          display: "flex",
          flex: ".5",
          border: "1px solid black",
          flexDirection: "column",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        <span style={{ border: "1px solid black" }}>
          {heroSection.heroSectionMsg.brandText}
        </span>
        <span style={{ border: "1px solid black" }}>
          {heroSection.heroSectionMsg.title}
        </span>
        <span style={{ border: "1px solid black" }}>
          {heroSection.heroSectionMsg.subTitle}
        </span>
        <span
          style={{
            border: "1px solid black",
            width: "30%",
            marginInline: "auto",
            textAlign: "center",
            padding: "10px",
            borderRadius: "50px",
          }}
          className={styles.shiny}
        >
          {heroSection.heroSectionMsg.buttonText}
          <i></i>
        </span>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Hero;
