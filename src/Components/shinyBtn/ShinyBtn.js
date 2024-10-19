import React from "react";
import styles from "./ShinyBtn.module.css";
const ShinyBtn = (props) => {
  const { btnText } = props;
  return (
    <span
      style={{
        // width: "30%",
        // marginInline: "auto",
        textAlign: "center",
        padding: "10px 25px 10px 25px",
        borderRadius: "50px",
      }}
      className={styles.shiny}
    >
      {btnText}
      <i></i>
    </span>
  );
};

export default ShinyBtn;
