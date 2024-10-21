import React from "react";
import styles from "./Contact.module.css";
import HeaderLine from "../Components/headerLine/HeaderLine";
const Contact = () => {
  return (
    <div className={styles.parent}>
      <HeaderLine msg={"Contact Us"} />
      <div></div>
    </div>
  );
};

export default Contact;
