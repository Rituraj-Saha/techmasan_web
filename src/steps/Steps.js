import React from "react";
import styles from "./Steps.module.css";
import HeaderLine from "../Components/headerLine/HeaderLine";
import { oursteps } from "../constant/examplePayload";

import SVG from "react-inlinesvg";
import { Avatar, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { handleOpenAlertContact } from "../util/util";

function Steps() {
  const dispatch = useDispatch();
  return (
    <div className={styles.parent}>
      <HeaderLine msg="Grow with Us" />
      <div className={styles.content}>
        {oursteps.map((item, index) => {
          return (
            <Paper
              key={index}
              elevation={3}
              sx={{
                display: "flex",
                width: "60vw",
                marginLeft: index % 2 != 0 ? "20%" : "5%",
                borderRadius: "25px",
                boxShadow:
                  "rgba(255, 0, 225, 0.15) 0px 5px 5px,rgba(243, 62, 62, 0.12) 0px -5px 5px, rgba(0, 0, 0, 0.12) 0px 4px 6px,rgba(245, 7, 7, 0.17) 0px 5px 3px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: "15px",
                }}
                onClick={() => {
                  handleOpenAlertContact(dispatch);
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
                <span
                  style={{
                    fontSize: "1.8vw",
                    fontWeight: "600",
                    color: "#3d3c3c",
                  }}
                >
                  {item.title}
                </span>
                <span
                  style={{
                    fontSize: "1vw",
                    fontWeight: "400",
                    color: "#020202",
                  }}
                >
                  {item.description}
                </span>
              </div>
            </Paper>
          );
        })}
      </div>
    </div>
  );
}

export default Steps;
