import { useEffect, useState } from "react";
import "./AddVideo.css";

const initialVideoState = {
  time: "1 year ago",
  channel: "Coder Dost",
  verified: true,
  title: "",
  views: "",
};

function AddVideo({ addVideo, editableVideo, updateVideo }) {
  const [video, setVideo] = useState(initialVideoState);
  
  useEffect(()=> {
    if(editableVideo) setVideo(editableVideo);
  console.log("effect hook used");
  }
    , [editableVideo])

  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
        updateVideo(video);
    }else{
      addVideo(video);
    }
    setVideo(initialVideoState);
  }
  // useEffect(()=>console.log("effecting"),[])
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
          <button onClick={handleSubmit}> {editableVideo?'Update': 'Add'} Video</button>
        </div>
      </form>
    </>
  );
}

export default AddVideo;
