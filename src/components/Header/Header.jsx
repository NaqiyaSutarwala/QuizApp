import React from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Timer from "./Timer";
import { useSelector } from "react-redux";
import TimerLabel from "./TimerLabel";

const Header = () => {
  const status = useSelector((store) => store.status);
  console.log(status, "s");

  return (
    <>
      <Title />
      <Subtitle>Answer the Question Below</Subtitle>
      {status === "started" ? <Timer /> : <TimerLabel />}
    </>
  );
};

export default Header;
