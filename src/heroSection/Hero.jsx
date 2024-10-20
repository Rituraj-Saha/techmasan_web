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
    <div className={styles.heroContainer}>
      <div className={styles.backgroundGradient}></div>

      <div className={styles.leftContainer}>
        <span className={styles.brandText}>
          {heroSection.heroSectionMsg.brandText}
        </span>
        <span className={styles.title}>{heroSection.heroSectionMsg.title}</span>

        <div className={styles.animationText}>
          <TypeAnimation
            sequence={[
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
