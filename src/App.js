import { useState } from "react";
import "./App.css";
import videosDB from "./data/data";
import Clock from "./components/Clock";
import Timer from "./components/Timer";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videosDB);

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

  return (
    <div>
      <AddVideo addVideo={addVideo} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h1 style={{ color: "white" }}>Hello from Divanshu</h1>
        <Timer />
        <Clock />
      </div>
      <VideoList videos={videos} />

      <div style={{ clear: "both" }}>{/* <Counter/> */}</div>
    </div>
  );
}

export default App;
