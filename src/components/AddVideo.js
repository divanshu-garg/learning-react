import { useState } from "react";
import "./AddVideo.css";

const initialVideoState = {
  time: "1 year ago",
  channel: "Coder Dost",
  verified: true,
  title: "",
  views: "",
};

function AddVideo({ addVideo }) {
  const [video, setVideo] = useState(initialVideoState);

  function handleSubmit(e) {
    e.preventDefault();
    addVideo(video);
    setVideo(initialVideoState);
  }

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  return (
    <>
      <form style={{ display: "flex" }}>
        <div>
          <input
            type="text"
            name="title"
            value={video.title}
            onChange={handleChange}
            placeholder="title"
          />
          <input
            type="text"
            name="views"
            onChange={handleChange}
            value={video.views}
            placeholder="views"
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Add a Video</button>
        </div>
      </form>
    </>
  );
}

export default AddVideo;
