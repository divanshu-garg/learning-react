import { useState } from "react";

function Clock() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  setTimeout(() => {
    setCurrentTime((currentTime) => new Date().toLocaleTimeString());
  }, 1000);
  return (
    <>
      <h1 style={{ color: "red" }}>Time is {currentTime}</h1>
    </>
  );
}

export default Clock;
