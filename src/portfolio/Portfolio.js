import React from "react";
import styles from "./Portfolio.module.css";
import { portfolio } from "../constant/examplePayload";
import HeaderLine from "../Components/headerLine/HeaderLine";
const Portfolio = () => {
  return (
    <div className={styles.portfolioParent}>
      <HeaderLine msg={"Portfolio"} />
      {portfolio.map((item, index) => {
        return (
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.back}></div>
            </div>
            <div className={styles.right}>
              <span className={styles.title}>{item.title}</span>
              <span className={styles.description}>{item.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
