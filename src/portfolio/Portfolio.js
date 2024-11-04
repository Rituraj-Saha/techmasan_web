import React from "react";
import styles from "./Portfolio.module.css";
import { portfolio } from "../constant/examplePayload";
import HeaderLine from "../Components/headerLine/HeaderLine";
import { Paper } from "@mui/material";
import { handleOpenAlertContact } from "../util/util";
import { useDispatch } from "react-redux";
import { Element } from "react-scroll";

const Portfolio = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.portfolioParent}>
      <Element name="Portfolio">
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
                <div
                  key={index}
                  className={styles.content}
                  onClick={() => {
                    handleOpenAlertContact(dispatch);
                  }}
                >
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
      </Element>
    </div>
  );
};

export default Portfolio;
