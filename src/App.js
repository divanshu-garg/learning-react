import { useState } from "react";
import "./App.css";
import videosDB from "./data/data";
import Clock from "./components/Clock";
import Timer from "./components/Timer";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const initialVideoState = {
  time: "1 year ago",
  channel: "Coder Dost",
  verified: true,
  title: "",
  views: "",
};

  const [videos, setVideos] = useState(videosDB);
  const [video, setVideo] = useState(initialVideoState); // (state liftinf) video is used for input field in addVideo, used in editVideo function and handleSubmit of AddVideo component
  const [editMode, setEditMode] = useState(false);
  // when edit button clicked on video, set editMode true by running the editVideo fn. pass this down to addVideo component which triggers updateVideo if editMode is true on submit

  function resetVideoState(){
    setVideo(initialVideoState);
  }

  function addVideo(v) {
    setVideos([
      ...videos,
      {
        ...v,
        id: videos.length + 1,
        url: `https://picsum.photos/id/${(videos.length + 1) * 10}/1280/720`,
      },
    ]);
  }
  function deleteVideo(id) {
    setVideos(videos.filter((v, i) => v.id !== id));
    console.log("video id:", id);
  }
  function editVideo(id) {
    // trigger when edit video button is clicked
    setEditMode(true);
    setVideo(videos.find((v, i) => v.id === id));
    // console.log("video id:", id);
    console.log("editable video:", editMode);
  }
  function updateVideo(v){
    setVideos(videos.map(vid => vid.id === v.id ? v : vid));
    setEditMode(false);
  }

// edit button click leads to editable becoming that. that triggers useEffect and it puts in input box. when we edit and editable is not null then we trigger update video and that actually will update the video

  return (
    <div>
      <AddVideo video={video} setVideo={setVideo} resetVideoState={resetVideoState} addVideo={addVideo} updateVideo={updateVideo} editMode={editMode}/>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h1 style={{ color: "white" }}>Hello from Divanshu</h1>
        <Timer />
        <Clock />
      </div>
      <VideoList
        editVideo={editVideo}
        videos={videos}
        deleteVideo={deleteVideo}
      />

      {/* <div style={{ clear: "both" }}><Counter/></div> */}
    </div>
  );
}

export default App;
