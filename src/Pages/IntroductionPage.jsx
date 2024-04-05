import React from "react";
import QuizDetails from "../components/Introduction Page/QuizDetails";
import InstructionParagraph from "../components/Introduction Page/InstructionParagraph";
import Button from "../components/Common/Button/Button";
import { handleDataFetch } from "../Redux/Slices/QuizSlice";
import { useDispatch } from "react-redux";

const IntroductionPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <QuizDetails />
      <InstructionParagraph />
      <Button
        position="right"
        onClick={() => {
          handleDataFetch(dispatch);
        }}
      >
        Start Quiz
      </Button>
    </div>
  );
};

export default IntroductionPage;
