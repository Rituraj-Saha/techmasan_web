import React from "react";
import styles from "./FloatingChip.module.css";
import { motion } from "framer-motion";
const FloatingChip = (props) => {
  const { icon, msg } = props;
  return (
    <motion.div
      className={styles.floatingChipParent}
      whileHover={{ cursor: "pointer" }}
      //   initial={{ opacity: 0 }}
      //   whileInView={{ opacity: 1 }}
      animate={{
        // scale: [1, 2, 2, 1, 1],
        // rotate: [0, 2, 0, -2, 0],
        duration: 10,
        // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      //   transition={{ repeat: Infinity }}
    >
      <div className={styles.floatingButtonIcon}></div>
      <span className={styles.floatingButtonText}>{msg}</span>
    </motion.div>
  );
};

export default FloatingChip;
