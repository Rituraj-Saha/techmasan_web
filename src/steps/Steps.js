import React from "react";
import styles from "./Steps.module.css";
import HeaderLine from "../Components/headerLine/HeaderLine";
import { oursteps } from "../constant/examplePayload";
import { Paper } from "@mui/material";

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
            <Paper elevation={3} sx={{ width: "20%", height: "250px" }}>
              {item.description}
            </Paper>
          );
        })}
      </div>
    </div>
  );
}

export default Steps;
