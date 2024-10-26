import React from "react";
import styles from "./HeaderLine.module.css";
const HeaderLine = (props) => {
  const { msg } = props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span className={styles.serviceheader}>{msg}</span>
      <span
        style={{ background: "black", width: "20vw", height: "1px" }}
      ></span>
    </div>
  );
};

export default HeaderLine;
