import { useReducer, useState } from "react";
import "./App.css";
import videosDB from "./data/data";
import Clock from "./components/Clock";
import Timer from "./components/Timer";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/themeContext";
import VideosContext from "./context/videosContext";
import VideoDispatchContext from "./context/videoDispatch";
import Counter from "./components/Counter";

function App() {
  const initialVideoState = {
    time: "1 year ago",
    channel: "Coder Dost",
    verified: true,
    title: "",
    views: "",
  };

  const [editMode, setEditMode] = useState(false);
  // when edit button clicked on video, set editMode true by running the editVideo fn. pass this down to addVideo component which triggers updateVideo if editMode is true on submit

  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [
          ...videos,
          {
            ...action.payload,
            id: videos.length + 1,
            url: `https://picsum.photos/id/${
              (videos.length + 1) * 10
            }/1280/720`,
          },
        ];
      case "DELETE":
        return videos.filter((v, i) => v.id !== action.payload);
      case "UPDATE":
        setEditMode(false);
        return videos.map((vid) =>
          vid.id === action.payload.id ? action.payload : vid
        );
      default:
        return videos;
    }
  }
  const [videos, dispatch] = useReducer(videoReducer, videosDB);
  // const [videos, setVideos] = useState(videosDB);
  const [video, setVideo] = useState(initialVideoState); // (state liftinf) video is used for input field in addVideo, used in editVideo function and handleSubmit of AddVideo component

  const [siteColor, setSiteColor] = useState("darkMode");

  function resetVideoState() {
    setVideo(initialVideoState);
  }

  function editVideo(id) {
    // trigger when edit video button is clicked
    setEditMode(true);
    setVideo(videos.find((v, i) => v.id === id));
    console.log("editable video:", editMode);
  }

  // edit button click leads to editMode becoming true and it puts that video data in input box. when we click submit button and editMode is not null then we trigger update video instead of add video and that actually will update the video

  return (
    <ThemeContext.Provider value={siteColor}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
        {" "}
        {/* this value = videos makes our context value set to this videos state */}
        <div className={`App ${siteColor}`}>
          <button
            onClick={() =>
              setSiteColor(siteColor === "darkMode" ? "lightMode" : "darkMode")
            }
          >
            Mode
          </button>
          <AddVideo
            video={video}
            setVideo={setVideo}
            resetVideoState={resetVideoState}
            // dispatch={dispatch}
            editMode={editMode}
          />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h1
              style={
                siteColor === "darkMode"
                  ? { color: "white" }
                  : { color: "black" }
              }
            >
              Hello from Divanshu
            </h1>
            <Timer />
            <Clock />
          </div>
          <VideoList
            editVideo={editVideo}
            // videos={videos}
            // dispatch={dispatch}
          />

          <div style={{ clear: "both" }}><Counter/></div>
        </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
