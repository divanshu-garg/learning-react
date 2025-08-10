import { useState } from "react";
import "./PlayButton.css";
import useTheme from "../hooks/theme";

function PlayButton({ message, children, onPlay, onPause }) {
  const [playing,setPlaying] = useState(false);
  // const theme = useContext(ThemeContext);
  const theme = useTheme();

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
