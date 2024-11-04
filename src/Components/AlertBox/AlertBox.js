import React from "react";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./AlertBos.module.css";
import { close } from "../../features/contactAlertBox/ContactAlertSlice";
import useIsMobile from "../../util/useIsMobile";
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
        <div className={styles.parent}>
          <div className={styles.content}>
            <CloseIcon
              sx={
                useIsMobile()
                  ? {
                      position: "absolute",
                      right: "5%",
                      top: "12%",
                      color: "white",
                      background: "pink",
                      borderRadius: "100%",
                      padding: "2px",
                    }
                  : {
                      position: "absolute",
                      right: "22%",
                      top: "12%",
                      color: "white",
                      background: "pink",
                      borderRadius: "100%",
                      padding: "2px",
                    }
              }
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
