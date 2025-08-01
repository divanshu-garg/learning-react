import "./Video.css";

function Video({
  title,
  channel = "Coder Dost",
  views,
  time,
  verified,
  url,
  children,
  id,
  dispatch,
  editVideo,
}) {

  return (
    <>
      <div className="container">
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
