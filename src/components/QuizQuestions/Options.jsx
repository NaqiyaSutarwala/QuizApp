import React, { useState } from "react";
import styles from "./Options.module.css";
import { useDispatch, useSelector } from "react-redux";
import { currentOption } from "../../Redux/Slices/QuizSlice";

const Options = () => {
  const questionsData = useSelector((state) => state.questionsData);
  const currentIndex = useSelector((state) => state.currentIndex);

  const selectedAnswer = useSelector(
    (state) => state.questionsData[state.currentIndex].selectedAnswer
  );
  const status = useSelector((state) => state.status);

  const options = questionsData[currentIndex].options;

  return (
    <div className={styles.optionsHeading}>
      <span>Choose Answer:</span> {}{" "}
      {status === "review" && selectedAnswer === "" && (
        <span className={styles.notAnswered}>Not answered</span>
      )}
      <DisplayOptions option={options} />
      <div style={{ clear: "both" }} />
    </div>
  );
};

const DisplayOptions = ({ option }) => {
  const status = useSelector((state) => state.status);
  const selectedAnswer = useSelector(
    (state) => state.questionsData[state.currentIndex].selectedAnswer
  );
  const correctAnswer = useSelector(
    (state) => state.questionsData[state.currentIndex].correctAnswer
  );

  const [selectedOption, setSelectedOption] = useState("");
  let show = true;
  const dispatch = useDispatch();
  return (
    <>
      {option.map((option) => {
        return (
          <div key={option} className={styles.optionDisplay}>
            <input
              disabled={status === "review"}
              checked={option === selectedAnswer}
              type="radio"
              name="option"
              value={option}
              onChange={(e) => {
                setSelectedOption(e.target.value);
                dispatch(currentOption(e.target.value));
              }}
              selected
              className={styles.radio}
            />
            {option}

            {status === "review" &&
              option === selectedAnswer &&
              option === correctAnswer && (
                <span className={styles.correctAnswer}>
                  {(show = false)}
                  {option === selectedAnswer && "Your Answer was correct"}
                </span>
              )}

            {status === "review" && (
              <span className={styles.correctAnswer}>
                {option === correctAnswer && show && "Correct Answer"}
              </span>
            )}
            {status === "review" && show && (
              <span className={styles.wrongAnswer}>
                {option === selectedAnswer && "Your Answer"}
              </span>
            )}
          </div>
        );
      })}
      <div style={{ marginBottom: "50px" }}></div>
    </>
  );
};

export default Options;
