import React from "react";
import styles from "./Steps.module.css";
import HeaderLine from "../Components/headerLine/HeaderLine";
import { oursteps } from "../constant/examplePayload";

import SVG from "react-inlinesvg";
import { Avatar, Paper } from "@mui/material";

function Steps() {
  return (
    <div className={styles.parent}>
      <HeaderLine msg="Grow with Us" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {oursteps.map((item, index) => {
          return (
            <Paper
              key={index}
              elevation={3}
              sx={{ width: "20%", height: "180px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: "15px",
                }}
              >
                {/* <div
                  style={{
                    display: "flex",
                  }}
                > */}
                <SVG
                  src={item.avtarSvg}
                  style={{
                    height: "30px",
                    width: "30px",
                    // border: "1px solid black",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px",
                    borderRadius: "100%",

                    background:
                      " linear-gradient(75deg, rgba(220,74,74,1) 8%, rgba(247,146,78,1) 46%, rgba(234,51,34,1) 87%)",
                  }}
                />
                {/* </div> */}
                <span>{item.title}</span>
                <span>{item.description}</span>
              </div>
            </Paper>
          );
        })}
      </div>
    </div>
  );
}

export default Steps;
