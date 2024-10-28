import React from "react";
import styles from "./Contact.module.css";
import HeaderLine from "../Components/headerLine/HeaderLine";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <div className={styles.parent}>
      <HeaderLine msg={"Contact Us"} />
      <div className={styles.parentContent}>
        <div className={styles.contactFormContainer}>
          <ContactForm />
        </div>
        <div style={{ flex: ".5" }}></div>
      </div>
    </div>
  );
};

export default Contact;
