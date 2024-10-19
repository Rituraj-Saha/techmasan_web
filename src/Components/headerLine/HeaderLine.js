import React from "react";
import styles from "./HeaderLine.module.css";
const HeaderLine = (props) => {
  const { msg } = props;
  return <span className={styles.serviceheader}>{msg}</span>;
};

export default HeaderLine;
