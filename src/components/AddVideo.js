// import { useEffect, useState } from "react";
import "./AddVideo.css";

function AddVideo({ addVideo, video, setVideo, editMode, updateVideo, resetVideoState }) {
  // const [video, setVideo] = useState(initialVideoState);

  // useEffect(()=> {
  // if(editableVideo) setVideo(editableVideo);
  // console.log("effect hook used");
  // }
  //   , [editableVideo])

  function handleSubmit(e) {
    e.preventDefault();
    if (!video.title.trim() || !video.views.trim()) {
      alert("Please fill in all fields");
      return;
    }
    if (editMode) {
      updateVideo(video);
    } else {
      addVideo(video);
    }
    // setVideo(initialVideoState);
    resetVideoState();
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
          <button onClick={handleSubmit}>
            {" "}
            {editMode ? "Update" : "Add"} Video
          </button>
        </div>
      </form>
    </>
  );
}

export default AddVideo;
