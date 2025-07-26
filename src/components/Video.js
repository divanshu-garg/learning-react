import "./Video.css";

function Video({
  title,
  channel = "Coder Dost",
  views,
  time,
  verified,
  url,
  children,
}) {
  return (
    <>
      <div className="container">
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
