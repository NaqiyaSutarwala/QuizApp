import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionsData: [],
  status: "ready",
  currentIndex: 0,
  secondsRemaining: 300,
  score: 0,
};

const QuizReducer = createSlice({
  name: "quiz",
  initialState: initialState,
  reducers: {
    quizStarted(state, action) {
      state.questionsData = [...action.payload.questionsData];
      state.status = action.payload.status;
    },
    nextQuestion(state, action) {
      state.currentIndex = state.currentIndex + 1;
    },

    previousQuestion(state, action) {
      state.currentIndex = state.currentIndex - 1;
    },
    currentOption(state, action) {
      state.questionsData[state.currentIndex].selectedAnswer = action.payload;
    },
    reviewMode(state, action) {
      state.status = "review";
      state.currentIndex = 0;
    },
    restartQuiz(state, action) {
      state.status = "ready";
      state.questionsData = [];
      state.currentIndex = 0;
      state.secondsRemaining = 10;
      state.score = 0;
    },
    timer(state, action) {
      state.secondsRemaining = state.secondsRemaining - 1;
    },
    timerEnded(state, action) {
      state.status = "review";
      state.currentIndex = 0;
    },
  },
});

export const handleDataFetch = (dispatch) => {
  try {
    const fetchData = async () => {
      const res = await fetch("https://the-trivia-api.com/v2/questions/");
      const data = await res.json();
      const questionsData = data.map((data) => {
        const randomNumber = Math.floor(Math.random() * (4 - 0 + 1) + 0);
        const options = [...data.incorrectAnswers];
        options.splice(randomNumber, 0, data.correctAnswer);

        const question = {
          id: data.id,
          question: data.question.text,
          options,
          correctAnswer: data.correctAnswer,
          selectedAnswer: "",
        };
        return question;
      });

      dispatch(
        QuizReducer.actions.quizStarted({
          questionsData: questionsData,
          status: "started",
        })
      );
    };
    fetchData();
  } catch (error) {}
};

export const {
  nextQuestion,
  previousQuestion,
  currentOption,
  reviewMode,
  restartQuiz,
  timer,
  nextQuestionReadyState,
  timerEnded,
} = QuizReducer.actions;

export default QuizReducer.reducer;
