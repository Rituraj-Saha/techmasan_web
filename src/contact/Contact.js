import React from "react";
import styles from "./Contact.module.css";
import HeaderLine from "../Components/headerLine/HeaderLine";
import ContactForm from "./ContactForm";
import { Element } from "react-scroll";
const Contact = () => {
  return (
    <div className={styles.parent}>
      <HeaderLine msg={"Contact Us"} />
      <Element name="Contact">
        <div className={styles.parentContent}>
          <div className={styles.contactFormContainer}>
            <ContactForm />
          </div>
          <div style={{ flex: ".5" }}></div>
        </div>
      </Element>
    </div>
  );
};

export default Contact;
