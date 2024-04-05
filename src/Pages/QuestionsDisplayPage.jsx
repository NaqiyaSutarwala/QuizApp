import React, { useState } from "react";
import Questions from "../components/QuizQuestions/Questions";
import Options from "../components/QuizQuestions/Options";
import Button from "../components/Common/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  nextQuestion,
  previousQuestion,
  restartQuiz,
} from "../Redux/Slices/QuizSlice";
import AlertDialog from "../components/Common/Dialog";

const QuestionsDisplayPage = () => {
  const questionsData = useSelector((state) => state.questionsData);
  const currentIndex = useSelector((state) => state.currentIndex);
  const status = useSelector((state) => state.status);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handleOnNext = () => {
    dispatch(nextQuestion());
  };

  const handleOnBack = () => {
    dispatch(previousQuestion());
  };

  const handleOnStartAgain = () => {
    dispatch(restartQuiz());
  };

  const handleOnSubmit = () => {
    setShowModal(true);
  };

  return (
    <>
      <Questions />
      <Options />
      {currentIndex > 0 && (
        <Button position="left" onClick={handleOnBack}>
          Back{" "}
        </Button>
      )}

      {status !== "review" ? (
        currentIndex + 1 < questionsData.length ? (
          <Button position="right" onClick={handleOnNext}>
            Next
          </Button>
        ) : (
          <Button position="right" onClick={handleOnSubmit}>
            Submit
          </Button>
        )
      ) : (
        ""
      )}

      {status === "review" ? (
        currentIndex + 1 < questionsData.length ? (
          <Button position="right" onClick={handleOnNext}>
            Next
          </Button>
        ) : (
          <Button position="right" onClick={handleOnStartAgain}>
            Go to HomePage
          </Button>
        )
      ) : (
        ""
      )}

      {showModal ? <AlertDialog showModal={showModal} /> : ""}
    </>
  );
};

export default QuestionsDisplayPage;
