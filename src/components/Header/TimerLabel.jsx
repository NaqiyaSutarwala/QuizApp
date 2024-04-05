import React from "react";
import styles from "./Timer.module.css";
import { useSelector } from "react-redux";

const TimerLabel = () => {
  const secondsRemaining = useSelector((state) => state.secondsRemaining);

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = Math.floor(secondsRemaining % 60);

  return (
    <div className={styles.timer}>
      {mins < 10 && "0"}
      {mins} : {seconds < 10 && "0"}
      {seconds}
    </div>
  );
};

export default TimerLabel;
