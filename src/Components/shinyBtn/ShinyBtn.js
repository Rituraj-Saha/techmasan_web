import React from "react";
import styles from "./ShinyBtn.module.css";
import { useDispatch } from "react-redux";
import { open } from "../../features/contactAlertBox/ContactAlertSlice";

const ShinyBtn = (props) => {
  const { btnText } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(open());
    return;
  };

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
      onClick={handleClick}
    >
      {btnText}
      <i></i>
    </span>
  );
};

export default ShinyBtn;
