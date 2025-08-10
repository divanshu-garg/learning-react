import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";
// import VideosContext from "../context/videosContext";
// import VideoDispatchContext from "../context/videoDispatch";

function VideoList({editVideo }) {
  // const videos = useContext(VideosContext);
  const videos = useVideos();
  // const dispatch = useContext(VideoDispatchContext);
  return (
    <>
      <div className="video-wrapper">
        {videos.map((v, i) => (
          <Video id={v.id}
          // dispatch={dispatch} // eliminated this dispatch prop drilling, directly use from context in Video component
          editVideo={editVideo}
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
    </>
  );
}

export default VideoList;
