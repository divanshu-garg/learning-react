// import { useEffect, useState } from "react";
import "./AddVideo.css";
import useVideoDispatch from "../hooks/VideoDispatch";

function AddVideo({video, setVideo, editMode, resetVideoState }) {
  // const [video, setVideo] = useState(initialVideoState);

  // useEffect(()=> {
  // if(editableVideo) setVideo(editableVideo);
  // console.log("effect hook used");
  // }
  //   , [editableVideo])

  // const dispatch = useContext(VideoDispatchContext);
  const dispatch = useVideoDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!video.title.trim() || !video.views.trim()) {
      alert("Please fill in all fields");
      return;
    }
    if (editMode) {
      // updateVideo(video);
      dispatch({type:"UPDATE",payload:video})
    } else {
      // addVideo(video);
    dispatch({ type: "ADD", payload: video });

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
