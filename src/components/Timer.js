import { useState } from "react";

function Timer() {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  // how to handle start stop logic and how to get time and show it there and store it on pause
  function handleStart() {
    return setInterval(() => {
      setTime((time) => time + 1);
      console.log("time is: ", time);
    }, 1000);
  }
  function handlePause(intervalId) {
    clearInterval(intervalId);
    setIntervalId(null);
  }
  function handleClick1() {
    // let intervalId;
    if (!start) setIntervalId(handleStart());
    else handlePause(intervalId);
    setStart(!start);
  }
  function handleClick2() {
    setStart(false);
    handlePause(intervalId);
    setTime(0);
  }
  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={handleClick1}>{start ? "stop" : "start"}</button>
        <h1 style={{ color: "white", marginLeft: "10px", marginRight: "10px" }}>
          {time}
        </h1>
        <button onClick={handleClick2}>reset</button>
      </div>
    </>
  );
}

export default Timer;
