import React from "react";
import styles from "./Hero.module.css";
import { heroSection } from "../constant/examplePayload";
import { TypeAnimation } from "react-type-animation";
import ShinyBtn from "../Components/shinyBtn/ShinyBtn";
import Lottie from "react-lottie";
const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heroSection.heroSectionAnimationJson,
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "70vh",
      }}
    >
      <div
        style={{
          minWidth: "100%",
          position: "absolute",
          background: "rgb(246,138,138)",
          background:
            "linear-gradient(75deg, rgba(255,50,50,1) 8%, rgba(238,142,78,1) 46%, rgba(133,49,117,1) 87%)",
          height: "70%",
          borderBottomLeftRadius: "40%",
          zIndex: -1,
        }}
      ></div>
      <div
        className="left"
        style={{
          display: "flex",
          flex: ".5",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "15%",
        }}
      >
        <span
          style={{
            fontSize: "3vw",
            fontWeight: "600",
            color: "white",
          }}
        >
          {heroSection.heroSectionMsg.brandText}
        </span>
        <span style={{ color: "white" }}>
          {heroSection.heroSectionMsg.title}
        </span>
        <div
          style={{
            marginTop: "40px",
            marginBottom: "20px",
            color: "white",
          }}
        >
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "We produce food for Mice",
              1000,
              "We produce food for Hamsters",
              1000,
              "We produce food for Guinea Pigs",
              1000,
              "We produce food for Chinchillas",
              1000,
            ]}
            speed={50}
            style={{
              fontSize: "2em",
              display: "block",
            }}
            repeat={Infinity}
          />
        </div>

        <span style={{ fontSize: "1.2em", color: "white" }}>
          {heroSection.heroSectionMsg.subTitle}
        </span>
        <span
          style={{
            display: "flex",
            // border: "1px solid black",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <ShinyBtn btnText={heroSection.heroSectionMsg.buttonText} />
        </span>
      </div>
      <div className="right" style={{ display: "flex", flex: ".5" }}>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </div>
  );
};

export default Hero;
