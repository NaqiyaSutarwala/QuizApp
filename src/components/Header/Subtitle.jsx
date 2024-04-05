import React from "react";
import styles from "./Subtitle.module.css";

const Subtitle = ({ children }) => {
  return <p className={styles.instruction}>{children}</p>;
};

export default Subtitle;
