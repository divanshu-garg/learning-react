import { useContext, useState } from "react";
import "./PlayButton.css";
import ThemeContext from "../context/themeContext";

function PlayButton({ message, children, onPlay, onPause }) {
  const [playing,setPlaying] = useState(false);
  const theme = useContext(ThemeContext);

  function handleClick(e) {
    // console.log(e);
    e.stopPropagation();

    if (playing) onPause();
    else onPlay();

    setPlaying(!playing);
  }

  return (
    <button className={theme} onClick={handleClick}>
      {children} : {playing ? "⏸️" : "▶️"}
    </button>
  );
}

export default PlayButton;
