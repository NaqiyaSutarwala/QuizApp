import React from "react";
import styles from "./QuizDetails.module.css";
import library from "../../assets/library.png";

const QuizDetails = () => {
  return (
    <div className={styles.details}>
      <img className={styles.libraryImage} src={library} alt="Library" />
      <div>
        <div className={styles.innerDetails}>
          <span className={styles.detailsHeading}>Date:</span>
          <span className={styles.detailsData}>03/04/2024</span>
        </div>
        <div className={styles.innerDetails}>
          <span className={styles.detailsHeading}>Time Limit:</span>
          <span className={styles.detailsData}>30 Mins</span>
        </div>
        <div className={styles.innerDetails}>
          <span className={styles.detailsHeading}>Attempts:</span>
          <span className={styles.detailsData}>Once</span>
        </div>
        <div className={styles.innerDetails}>
          <span className={styles.detailsHeading}>Points:</span>
          <span className={styles.detailsData}>200 Points</span>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
