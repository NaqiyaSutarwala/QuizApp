import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, position, onClick }) => {
  return (
    <button
      className={styles.button}
      style={{ float: `${position}` }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
