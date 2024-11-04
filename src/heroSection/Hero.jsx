import React from "react";
import styles from "./Hero.module.css";
import { heroSection } from "../constant/examplePayload";
import { TypeAnimation } from "react-type-animation";
import ShinyBtn from "../Components/shinyBtn/ShinyBtn";
import Lottie from "react-lottie";
import logo from "../res/Logo/Logo-white-text-removebg-preview.png";
import { Element } from "react-scroll";
const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heroSection.heroSectionAnimationJson,
  };

  return (
    <div className={styles.heroContainer}>
      <Element name="Home" />
      <div className={styles.backgroundGradient}></div>

      <div className={styles.leftContainer}>
        <img src={logo} style={{ height: "80px", width: "80%" }} />
        {/* <span className={styles.brandText}>
          {heroSection.heroSectionMsg.brandText}
        </span> */}
        {/* <span className={styles.title}>{heroSection.heroSectionMsg.title}</span> */}

        <div className={styles.animationText}>
          <TypeAnimation
            sequence={[
              "We deliver tech support to business",
              1000,
              "We deliver attractive-animated landing page",
              1000,
              "We deliver portfolio website for professional",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        <span className={styles.subTitle}>
          {heroSection.heroSectionMsg.subTitle}
        </span>

        <div className={styles.buttonContainer}>
          <ShinyBtn btnText={heroSection.heroSectionMsg.buttonText} />
        </div>
      </div>

      <div className={styles.rightContainer}>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </div>
  );
};

export default Hero;
