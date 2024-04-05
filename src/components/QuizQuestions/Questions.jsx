import React from "react";
import styles from "./Questions.module.css";
import { useSelector } from "react-redux";

const Questions = () => {
  const questionsData = useSelector((state) => state.questionsData);
  const currentIndex = useSelector((state) => state.currentIndex);

  return (
    <div className={styles.questionMain}>
      <span className={styles.questionCount}>
        Question : {currentIndex + 1}/{questionsData.length}
      </span>

      <div style={{ clear: "both" }}></div>
      <div className={styles.question}>
        <br />
        {questionsData[currentIndex].question}
      </div>
    </div>
  );
};

export default Questions;
