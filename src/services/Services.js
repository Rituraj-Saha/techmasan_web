import React from "react";
import { serviceSection } from "../constant/examplePayload";
import Lottie from "react-lottie";
import styles from "./Services.module.css";
import FloatingChip from "../Components/floatingChip/FloatingChip";
import ShinyBtn from "../Components/shinyBtn/ShinyBtn";
import HeaderLine from "../Components/headerLine/HeaderLine";
import useIsMobile from "../util/useIsMobile";
import { tr } from "framer-motion/client";
function Services() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: serviceSection.serviceJson,
  };
  const isMobile = useIsMobile();

  return (
    <div className={styles.serviceParent}>
      <HeaderLine msg={"Services"} />
      <div className={styles.serviceContainer}>
        <div className={styles.left}>
          <Lottie options={defaultOptions} height={400} width={300} />
        </div>
        <div className={styles.right}>
          {/* <FloatingChip msg={"sample msg"} /> */}
          {serviceSection.services.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  marginRight: !isMobile
                    ? index % 2 != 0
                      ? "25%"
                      : "5%"
                    : "0",
                  // index % 2 != 0 ? "25%" : "5%",
                  marginTop: "20px",
                }}
              >
                <FloatingChip msg={item.title} />
              </div>
            );
          })}
        </div>
      </div>
      <span className={styles.engagementSection}>
        <ShinyBtn btnText={"Get a quote"} />
      </span>
    </div>
  );
}

export default Services;
