import React, { useEffect, useRef } from "react";
import styles from "./Timer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { restartQuiz, timer, timerEnded } from "../../Redux/Slices/QuizSlice";

const Timer = () => {
  const dispatch = useDispatch();

  const secondsRemaining = useSelector((state) => state.secondsRemaining);
  const status = useSelector((state) => state.status);

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = Math.floor(secondsRemaining % 60);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(timer());
    }, 1000);

    secondsRemaining <= 0 && dispatch(timerEnded());

    return () => {
      clearInterval(id);
    };
  }, [dispatch, secondsRemaining, status]);

  return (
    <div className={styles.timer}>
      {mins < 10 && "0"}
      {mins} : {seconds < 10 && "0"}
      {seconds}
    </div>
  );
};

export default Timer;
