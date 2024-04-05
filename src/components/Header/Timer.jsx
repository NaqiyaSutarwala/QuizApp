import React, { useEffect, useRef, useState } from "react";
import styles from "./Timer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { restartQuiz, timer, timerEnded } from "../../Redux/Slices/QuizSlice";
import AlertDialog from "../Common/Model/Dialog";

const Timer = () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const secondsRemaining = useSelector((state) => state.secondsRemaining);
  const status = useSelector((state) => state.status);

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = Math.floor(secondsRemaining % 60);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(timer());
    }, 1000);

    secondsRemaining <= 0 && setShowModal(true);

    showModal && dispatch(timerEnded());

    return () => {
      clearInterval(id);
    };
  }, [dispatch, secondsRemaining, showModal, status]);

  return (
    <div className={styles.timer}>
      {mins < 10 && "0"}
      {mins} : {seconds < 10 && "0"}
      {seconds}
      {showModal && <AlertDialog showModal={showModal} />}
    </div>
  );
};

export default Timer;
