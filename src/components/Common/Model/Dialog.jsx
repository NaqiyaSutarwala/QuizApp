import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import badge from "../../../assets/Badge.png";
import styles from "./Dialog.module.css";
import { useDispatch } from "react-redux";
import { reviewMode, timerEnded } from "../../../Redux/Slices/QuizSlice";
import { useSelector } from "react-redux";

export default function AlertDialog({ showModal }) {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.questionsData);
  // const score = useSelector((state) => state.score);

  const score = question.reduce((acc, curr) => {
    return (acc = curr.correctAnswer === curr.selectedAnswer ? acc + 10 : acc);
  }, 0);

  const totalPercent = (100 * score) / (question.length * 10);
  const handleOnReview = () => {
    dispatch(reviewMode());
  };

  return (
    <React.Fragment>
      <Dialog
        PaperProps={{
          className: styles.dialogBox,
          sx: {
            borderRadius: "30px",
            height: "250px",
          },
        }}
        open={showModal}
      >
        <img src={badge} alt="badge" className={styles.badgeImage} />
        <DialogTitle id="alert-dialog-title" sx={{ fontWeight: "bold" }}>
          {"Congratulations!! You have Passed"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className={styles.percentage}
          >
            You scored {totalPercent}%
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnReview}>Review Answers</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
