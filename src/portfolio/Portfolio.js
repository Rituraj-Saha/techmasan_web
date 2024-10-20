import React from "react";
import styles from "./Portfolio.module.css";
import { portfolio } from "../constant/examplePayload";
import HeaderLine from "../Components/headerLine/HeaderLine";
import { Paper } from "@mui/material";

const Portfolio = () => {
  return (
    <div className={styles.portfolioParent}>
      <HeaderLine msg={"Portfolio"} />
      <div className={styles.portFoliogrid}>
        {portfolio.map((item, index) => {
          return (
            <Paper
              elevation={5}
              sx={{
                background: "transparent",
              }}
            >
              <div key={index} className={styles.content}>
                <div
                  className={item.requireTxt ? styles.left : styles.onlyLeft}
                >
                  <div className={styles.back}>
                    <img src={item.sample} className={styles.bannerImage} />
                  </div>
                </div>
                {item.requireTxt && (
                  <div className={styles.right}>
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.description}>
                      {item.description}
                    </span>
                  </div>
                )}
              </div>
            </Paper>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
