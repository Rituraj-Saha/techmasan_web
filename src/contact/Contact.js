import React from "react";
import styles from "./Contact.module.css";
import HeaderLine from "../Components/headerLine/HeaderLine";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <div className={styles.parent}>
      <HeaderLine msg={"Contact Us"} />
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          // -webkit-backdrop-filter: blur(5px),
          // background: "rgb(183,9,71)",
          background:
            "linear-gradient(75deg, rgba(183,9,71,1) 8%, rgba(232,75,14,1) 49%, rgba(210,18,1,1) 87%)",
          padding: "5%",
          paddingTop: "10%",
          borderTopRightRadius: "50%",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "30%",
            // border: "1px solid black",
            // background:"linear-gradient(75deg, rgba(183,9,71,1) 8%, rgba(232,75,14,1) 49%, rgba(210,18,1,1) 87%)",
            marginLeft: "60px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(5px)",
            padding: "50px",
            borderRadius: "25px",
          }}
        >
          <ContactForm />
        </div>
        <div style={{ flex: ".5" }}></div>
      </div>
    </div>
  );
};

export default Contact;
