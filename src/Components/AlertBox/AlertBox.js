import React from "react";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./AlertBos.module.css";
import { close } from "../../features/contactAlertBox/ContactAlertSlice";
const AlertBox = (props) => {
  const { children } = props;
  const status = useSelector((state) => state.contactAlertControll.status);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(close());
  };
  return (
    <>
      <Modal
        open={status}
        onClose={handleClose}
        sx={{
          border: "0px",
          outline: 0,
        }}
      >
        <div
          style={{
            padding: "1%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "0px solid transparent",
            outline: "0",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "50px",
              width: "50%",
              background:
                "linear-gradient(75deg, rgba(183,9,71,1) 8%, rgba(232,75,14,1) 49%, rgba(210,18,1,1) 87%)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
            }}
          >
            <CloseIcon
              sx={{
                position: "absolute",
                right: "25%",
                top: "4%",
                color: "white",
                background: "pink",
                borderRadius: "100%",
                padding: "2px",
              }}
              onClick={handleClose}
            ></CloseIcon>
            {children}
          </div>
        </div>
      </Modal>
      ;
    </>
  );
};

export default AlertBox;
