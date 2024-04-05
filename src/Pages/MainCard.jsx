import React from "react";
import styles from "./MainCard.module.css";
import IntroductionPage from "./IntroductionPage.jsx";
import Header from "../components/Header/Header.jsx";
import QuestionsDisplayPage from "./QuestionsDisplayPage.jsx";
import { useSelector } from "react-redux";

const MainCard = () => {
  const status = useSelector((state) => state.status);

  console.log(status);

  return (
    <div className={styles.mainDiv}>
      <Header />
      {status === "ready" && <IntroductionPage />}
      {status === "started" && <QuestionsDisplayPage />}
      {status === "review" && <QuestionsDisplayPage />}
    </div>
  );
};

export default MainCard;
