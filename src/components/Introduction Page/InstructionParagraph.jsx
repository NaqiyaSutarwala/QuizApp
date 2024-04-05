import React from "react";
import styles from "./InstructionParagraph.module.css";

const InstructionParagraph = () => {
  return (
    <>
      <div>
        <div className={styles.instruction}>Instructions</div>
        <p className={styles.paragraph} style={{ lineHeight: "35px" }}>
          This quiz consists of 5 multiple-choice questions. To be successful
          with the quizzes, it’s important to conversant with the topics.
          <br></br> Keep the following in mind: <br></br>
          Timing - You need to complete each of your attempts in one sitting, as
          you are allotted 30 minutes to each attempt.
          <br></br>
          Answers - You may review your answer and compare them to the correct
          answers after your final attempt.
          <br></br>
          To start, click the "Start" button. When finished, click the "Submit "
          button.
        </p>
      </div>
      <div style={{ clear: "both" }} />
    </>
  );
};

export default InstructionParagraph;
