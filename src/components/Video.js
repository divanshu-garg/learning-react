import "./Video.css";
import useVideoDispatch from "../hooks/VideoDispatch";
import useTheme from "../hooks/theme";

function Video({
  title,
  channel = "Coder Dost",
  views,
  time,
  verified,
  url,
  children,
  id,
  // dispatch,
  editVideo,
}) {

  // const theme = useContext(ThemeContext);
  const theme = useTheme();
  // const dispatch = useContext(VideoDispatchContext);
  const dispatch = useVideoDispatch();

  return (
    <>
      <div className={`container ${theme}`}>
        <button onClick={()=>dispatch({ type: "DELETE", payload: id })} className="close">X</button>
        <button onClick={()=>editVideo(id)} className="edit">edit</button>
        <div className="pic">
          <img
            src={`${url}`}
            alt="dummy-mage"
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {verified ? "✅" : null}{" "}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
