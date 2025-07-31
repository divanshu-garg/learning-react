import { useState } from "react";
import "./App.css";
import videosDB from "./data/data";
import Clock from "./components/Clock";
import Timer from "./components/Timer";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videosDB);
  const [editableVideo, setEditableVideo] = useState(null); //initially it should be falsy to not trigger useEffect. cant use {} as it is a truthy value
  // when edit button clicked on video, set editableVideo object to that video by running the editVideo fn. pass this down to addVideo component

  function addVideo(video) {
    setVideos([
      ...videos,
      {
        ...video,
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
    setEditableVideo(videos.find((v, i) => v.id === id));
    // console.log("video id:", id);
    console.log("editable video:", editableVideo);
  }
  function updateVideo(video){
    setVideos(videos.map(v => v.id === video.id ? video : v));
    setEditableVideo(null);
  }

// edit button click leads to editable becoming that. that triggers useEffect and it puts in input box. when we edit and editable is not null then we trigger update video and that actually will update the video

  return (
    <div>
      <AddVideo addVideo={addVideo} updateVideo={updateVideo} editableVideo={editableVideo}/>
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
