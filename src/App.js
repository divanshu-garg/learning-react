import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videosDB from "./data/data";

function App() {
  const [videos, setVideos] = useState(videosDB);
  function handleOnClick(){
    setVideos(videos => [...videos, {
      id: videos.length+1,
    title: "NextJS tutorial",
    views: "2M",
    time: "3 months ago",
    channel: "Coder Dost",
    url: `https://picsum.photos/id/${(videos.length+1)*10}/1280/720`,
    verified: false,
  }])
  }

  return (
    <div>
      <button onClick={handleOnClick}>Add a Video</button>
      <div> <h1 style={{color:'white'}}>Hello from Divanshu</h1></div>
      <div className='video-wrapper'>
        {videos.map((v, i) => (
          <Video
            key={v.id}
            title={v.title}
            views={v.views}
            time={v.time}
            verified={v.verified}
            channel={v.channel}
            url={v.url}
          >
            <PlayButton
              onPlay={() => console.log("Playing..", v.title)}
              onPause={() => console.log("Paused..", v.title)}
            >
              {v.title}
            </PlayButton>
          </Video>
        ))}
      </div>

      <div style={{ clear: "both" }}>
      <Counter/>
        {/* <PlayButton
          message="play was clicked"
          onSmash={(message) => console.log(message)}
        >
          Play
        </PlayButton>
        <PlayButton
          message="pause was clicked"
          onSmash={(message) => alert(message)}
        >
          Pause
        </PlayButton> */}
      </div>
    </div>
  );
}

export default App;
